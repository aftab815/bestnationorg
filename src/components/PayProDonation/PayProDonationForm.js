import React, { useState, useEffect, useCallback } from 'react';
import payproLogo from '../../assets/paypro.jpg';
import './PayProDonationForm.css';

const PRESET_AMOUNTS = [
  { value: 1000, label: 'PKR 1,000', hint: 'Basic Relief' },
  { value: 2500, label: 'PKR 2,500', hint: 'Medical Support' },
  { value: 5000, label: 'PKR 5,000', hint: 'Family Rashan' },
  { value: 10000, label: 'PKR 10,000', hint: 'Orphan Support' },
  { value: 25000, label: 'PKR 25,000', hint: 'Community Well' },
  { value: 50000, label: 'PKR 50,000', hint: 'Emergency Aid' },
];

const CAUSES = [
  { id: 'general', name: 'General Welfare / Sadaqah', icon: 'fa-hand-holding-heart' },
  { id: 'zakat', name: 'Zakat Fund (100% Shariah Compliant)', icon: 'fa-mosque' },
  { id: 'rashan', name: 'Rashan & Food Distribution', icon: 'fa-box-open' },
  { id: 'medical', name: 'Healthcare & Medical Aid', icon: 'fa-heartbeat' },
  { id: 'education', name: 'Education & Orphan Support', icon: 'fa-graduation-cap' },
  { id: 'water', name: 'Clean Drinking Water', icon: 'fa-tint' },
];

const PAYPRO_FALLBACK_URL =
  'https://billing.paypro.com.pk/donation/best-nation-welfare-organization/';

const PayProDonationForm = () => {
  const [selectedAmount, setSelectedAmount] = useState(5000);
  const [customAmount, setCustomAmount] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const [selectedCause, setSelectedCause] = useState('general');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    city: '',
    notes: '',
    isAnonymous: false,
  });

  const [gatewayStatus, setGatewayStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [orderResult, setOrderResult] = useState(null);
  const [countdown, setCountdown] = useState(null);

  // Check backend PayPro config status on mount
  useEffect(() => {
    let isMounted = true;
    fetch('/api/paypro/status')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (isMounted && data) {
          setGatewayStatus(data);
        }
      })
      .catch(() => {
        // Fallback default
        if (isMounted) {
          setGatewayStatus({
            configured: false,
            fallbackUrl: PAYPRO_FALLBACK_URL,
          });
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);

  // Countdown timer for automatic redirect
  useEffect(() => {
    if (countdown === null) return;
    if (countdown <= 0) {
      if (orderResult?.paymentUrl) {
        // Use top-level navigation — NOT iframe — for PayPro checkout
        // This is required for 3D Secure 2.0 card payment to work properly
        window.open(orderResult.paymentUrl, '_blank', 'noopener,noreferrer');
      }
      return;
    }
    const timer = setTimeout(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearTimeout(timer);
  }, [countdown, orderResult]);

  const activeAmount = isCustom ? Number(customAmount) || 0 : selectedAmount;

  const handlePresetSelect = (val) => {
    setSelectedAmount(val);
    setIsCustom(false);
    setCustomAmount('');
  };

  const handleCustomChange = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(val);
    setIsCustom(true);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Validate Pakistani mobile number format
  const validateMobile = (phone) => {
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) return false;
    // Must start with 03 or 923 or 0092
    if (/^(03\d{9}|923\d{9}|00923\d{9})$/.test(cleanPhone)) return true;
    // Also allow general 10+ digit number as fallback
    return cleanPhone.length >= 10;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (activeAmount < 50) {
      setErrorMessage('Please enter an amount of at least PKR 50.');
      return;
    }

    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Please provide a valid email address for your payment receipt.');
      return;
    }

    if (!validateMobile(formData.mobile)) {
      setErrorMessage('Please provide a valid Pakistani mobile number (e.g. 03001234567).');
      return;
    }

    setIsSubmitting(true);

    try {
      const causeObj = CAUSES.find((c) => c.id === selectedCause);
      const payload = {
        amount: activeAmount,
        donorName: formData.name,
        donorEmail: formData.email,
        donorMobile: formData.mobile,
        donorAddress: formData.city,
        cause: causeObj ? causeObj.name : 'General Welfare',
        isAnonymous: formData.isAnonymous,
        notes: formData.notes,
      };

      const response = await fetch('/api/paypro/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      let data;
      try {
        data = await response.json();
      } catch (parseErr) {
        throw new Error('Server returned an invalid response. The backend may be misconfigured.');
      }

      if (!response.ok || !data.ok) {
        // If credentials are not yet set up in .env
        if (data.configured === false || data.missingCredentials) {
          setErrorMessage(
            data.message ||
              'PayPro direct credentials are being connected. You can donate directly through the official BNWO PayPro portal below.'
          );
          setOrderResult({
            paymentUrl: data.fallbackUrl || PAYPRO_FALLBACK_URL,
            isFallback: true,
            amount: activeAmount,
            cause: payload.cause,
          });
        } else {
          setErrorMessage(data.message || 'Payment initiation failed. Please try again.');
          if (data.fallbackUrl) {
            setOrderResult({
              paymentUrl: data.fallbackUrl,
              isFallback: true,
              amount: activeAmount,
              cause: payload.cause,
            });
          }
        }
        setIsSubmitting(false);
        return;
      }

      // Success! PayPro order created
      setOrderResult({
        ...data,
        isFallback: false,
      });
      setIsSubmitting(false);

      // Start 5-second countdown to auto-open checkout in new tab
      if (data.paymentUrl) {
        setCountdown(5);
      }
    } catch (err) {
      console.error('PayPro fetch error:', err);
      setErrorMessage(
        err.message || 'Network error while connecting to PayPro gateway. You can use the direct link below.'
      );
      setOrderResult({
        paymentUrl:
          gatewayStatus?.fallbackUrl || PAYPRO_FALLBACK_URL,
        isFallback: true,
        amount: activeAmount,
        cause: CAUSES.find((c) => c.id === selectedCause)?.name || 'General Welfare',
      });
      setIsSubmitting(false);
    }
  };

  const resetForm = useCallback(() => {
    setOrderResult(null);
    setCountdown(null);
    setErrorMessage('');
    setIsCustom(false);
    setCustomAmount('');
    setSelectedAmount(5000);
    setSelectedCause('general');
    setFormData({
      name: '',
      email: '',
      mobile: '',
      city: '',
      notes: '',
      isAnonymous: false,
    });
  }, []);

  // Determine the best fallback URL
  const fallbackPortalUrl = gatewayStatus?.fallbackUrl || PAYPRO_FALLBACK_URL;

  return (
    <div className="paypro-form-wrapper" id="paypro-donate-section">
      <div className="paypro-form-card">
        {/* Card Header */}
        <div className="paypro-form-header">
          <div className="paypro-header-branding">
            <img src={payproLogo} alt="PayPro Gateway" className="paypro-badge-logo" />
            <div className="paypro-header-text">
              <h3>Direct PayPro Donation</h3>
              <p>Instant 1Bill, JazzCash, EasyPaisa, Debit / Credit Card &amp; Raast</p>
            </div>
          </div>
          <div className="paypro-security-pill">
            <i className="fas fa-shield-alt"></i>
            <span>256-Bit SSL Encrypted</span>
          </div>
        </div>

        {/* Success / Result Screen */}
        {orderResult ? (
          <div className="paypro-result-view">
            <div className="result-icon-badge">
              <i className={`fas ${orderResult.isFallback ? 'fa-external-link-alt' : 'fa-check-circle'}`}></i>
            </div>
            <h4>
              {orderResult.isFallback
                ? 'Official PayPro Gateway Portal Ready'
                : 'PayPro Payment Invoice Generated!'}
            </h4>
            <p className="result-subtext">
              {orderResult.isFallback
                ? 'Click below to complete your secure donation directly via the official BNWO PayPro portal.'
                : 'Your unique order has been generated with PayPro. Click below or wait for automatic redirect to complete your payment.'}
            </p>

            {/* Error banner if there was an issue */}
            {errorMessage && (
              <div className="paypro-alert error result-alert">
                <i className="fas fa-info-circle"></i>
                <div className="alert-content">
                  <p>{errorMessage}</p>
                </div>
              </div>
            )}

            <div className="result-details-box">
              <div className="result-detail-row">
                <span className="label">Donation Amount:</span>
                <span className="value highlight">
                  PKR {Number(orderResult.amount || activeAmount).toLocaleString()}
                </span>
              </div>
              {orderResult.orderNumber && (
                <div className="result-detail-row">
                  <span className="label">Order Reference:</span>
                  <span className="value code">{orderResult.orderNumber}</span>
                </div>
              )}
              {orderResult.invoiceId && (
                <div className="result-detail-row">
                  <span className="label">PayPro 1Bill / Invoice ID:</span>
                  <span className="value code">{orderResult.invoiceId}</span>
                </div>
              )}
              <div className="result-detail-row">
                <span className="label">Purpose:</span>
                <span className="value">
                  {orderResult.cause || CAUSES.find((c) => c.id === selectedCause)?.name}
                </span>
              </div>
            </div>

            {countdown !== null && countdown > 0 && (
              <div className="redirect-countdown">
                <span className="spinner-border-sm"></span>
                <span>
                  Opening PayPro Checkout in <strong>{countdown}s</strong>...
                </span>
                <button
                  type="button"
                  className="cancel-countdown-btn"
                  onClick={() => setCountdown(null)}
                >
                  Cancel
                </button>
              </div>
            )}

            <div className="result-action-buttons">
              <a
                href={orderResult.paymentUrl}
                target="_blank"
                rel="noreferrer"
                className="paypro-direct-proceed-btn"
              >
                <span>
                  {orderResult.isFallback ? 'Open PayPro Portal' : 'Proceed to PayPro Checkout'}
                </span>
                <i className="fas fa-external-link-alt"></i>
              </a>
              {orderResult.billUrl && (
                <a
                  href={orderResult.billUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="paypro-secondary-btn"
                >
                  <i className="fas fa-file-invoice"></i> View 1Bill Slip
                </a>
              )}
              <button type="button" className="paypro-secondary-btn" onClick={resetForm}>
                Make Another Donation
              </button>
            </div>

            {/* Card payment troubleshooting note */}
            {!orderResult.isFallback && (
              <div className="paypro-card-note">
                <i className="fas fa-credit-card"></i>
                <p>
                  <strong>Card Payment:</strong> Click the button above to open PayPro's secure checkout. 
                  Select <em>"Debit/Credit Card"</em> on the PayPro page to pay with Visa/Mastercard. 
                  3D Secure authentication is required by your bank.
                </p>
              </div>
            )}

            <div className="paypro-result-methods">
              <p>Supported on PayPro checkout:</p>
              <div className="method-tags">
                <span>Visa / MasterCard</span>
                <span>1Link 1Bill</span>
                <span>JazzCash</span>
                <span>EasyPaisa</span>
                <span>Raast ID</span>
                <span>All Bank Apps</span>
              </div>
            </div>
          </div>
        ) : (
          /* Form View */
          <form onSubmit={handleSubmit} className="paypro-main-form">
            {errorMessage && (
              <div className="paypro-alert error">
                <i className="fas fa-exclamation-circle"></i>
                <div className="alert-content">
                  <p>{errorMessage}</p>
                  {gatewayStatus && !gatewayStatus.configured && (
                    <a
                      href={fallbackPortalUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="alert-link"
                    >
                      Click here to donate via direct hosted BNWO PayPro page &rarr;
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* Step 1: Cause Selection */}
            <div className="form-section-block">
              <label className="section-label">
                <span className="step-num">1</span> Select Donation Purpose
              </label>
              <div className="causes-chip-grid">
                {CAUSES.map((cause) => (
                  <button
                    type="button"
                    key={cause.id}
                    className={`cause-chip ${selectedCause === cause.id ? 'active' : ''}`}
                    onClick={() => setSelectedCause(cause.id)}
                  >
                    <i className={`fas ${cause.icon}`}></i>
                    <span>{cause.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Amount Selection */}
            <div className="form-section-block">
              <label className="section-label">
                <span className="step-num">2</span> Choose Donation Amount (PKR)
              </label>
              <div className="amount-preset-grid">
                {PRESET_AMOUNTS.map((preset) => (
                  <button
                    type="button"
                    key={preset.value}
                    className={`amount-preset-btn ${
                      !isCustom && selectedAmount === preset.value ? 'active' : ''
                    }`}
                    onClick={() => handlePresetSelect(preset.value)}
                  >
                    <span className="amount-val">{preset.label}</span>
                    <span className="amount-hint">{preset.hint}</span>
                  </button>
                ))}
              </div>

              <div className="custom-amount-wrapper">
                <label htmlFor="custom-amount-input" className="custom-amount-label">
                  Or Enter Custom Amount:
                </label>
                <div className="currency-input-group">
                  <span className="currency-prefix">PKR</span>
                  <input
                    id="custom-amount-input"
                    type="text"
                    inputMode="numeric"
                    placeholder="e.g. 15000"
                    value={customAmount}
                    onChange={handleCustomChange}
                    className={`custom-amount-input ${isCustom ? 'active-focus' : ''}`}
                  />
                  {isCustom && customAmount && (
                    <button
                      type="button"
                      className="clear-custom-btn"
                      onClick={() => handlePresetSelect(5000)}
                    >
                      &times;
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Step 3: Donor Details */}
            <div className="form-section-block">
              <label className="section-label">
                <span className="step-num">3</span> Donor Information
              </label>
              <div className="donor-fields-grid">
                <div className="form-field">
                  <label htmlFor="donor-name">
                    Full Name <span className="req">*</span>
                  </label>
                  <div className="input-with-icon">
                    <i className="fas fa-user"></i>
                    <input
                      id="donor-name"
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Muhammad Ali"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="donor-mobile">
                    Mobile Number <span className="req">*</span>
                  </label>
                  <div className="input-with-icon">
                    <i className="fas fa-phone-alt"></i>
                    <input
                      id="donor-mobile"
                      type="tel"
                      name="mobile"
                      required
                      placeholder="03001234567"
                      value={formData.mobile}
                      onChange={handleInputChange}
                    />
                  </div>
                  <span className="field-hint">Required for 1Link / PayPro SMS confirmation</span>
                </div>

                <div className="form-field">
                  <label htmlFor="donor-email">
                    Email Address <span className="req">*</span>
                  </label>
                  <div className="input-with-icon">
                    <i className="fas fa-envelope"></i>
                    <input
                      id="donor-email"
                      type="email"
                      name="email"
                      required
                      placeholder="ali@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <span className="field-hint">Official payment receipt sent here</span>
                </div>

                <div className="form-field">
                  <label htmlFor="donor-city">City / Location</label>
                  <div className="input-with-icon">
                    <i className="fas fa-map-marker-alt"></i>
                    <input
                      id="donor-city"
                      type="text"
                      name="city"
                      placeholder="e.g. Lahore, Karachi, Islamabad"
                      value={formData.city}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              {/* Anonymous Checkbox */}
              <div className="anonymous-toggle">
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    name="isAnonymous"
                    checked={formData.isAnonymous}
                    onChange={handleInputChange}
                  />
                  <span className="checkmark"></span>
                  <span className="checkbox-text">
                    Keep my donation anonymous on public records
                  </span>
                </label>
              </div>
            </div>

            {/* Summary & Submit */}
            <div className="paypro-submit-bar">
              <div className="summary-left">
                <span className="summary-label">Total Contribution:</span>
                <span className="summary-amount">
                  PKR {activeAmount > 0 ? activeAmount.toLocaleString() : '0'}
                </span>
                <span className="summary-cause">
                  {CAUSES.find((c) => c.id === selectedCause)?.name}
                </span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || activeAmount < 50}
                className="paypro-submit-btn"
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner-border-sm"></span>
                    <span>Connecting PayPro...</span>
                  </>
                ) : (
                  <>
                    <span>Proceed to Pay with PayPro</span>
                    <i className="fas fa-arrow-right"></i>
                  </>
                )}
              </button>
            </div>

            {/* Trust & Channels Footer */}
            <div className="paypro-trust-footer">
              <div className="trust-badges">
                <span>
                  <i className="fas fa-lock"></i> SECP &amp; Shariah Audited
                </span>
                <span>
                  <i className="fas fa-bolt"></i> Real-time PayPro Fetching
                </span>
                <span>
                  <i className="fas fa-receipt"></i> Instant Digital Receipt
                </span>
              </div>
              <p className="paypro-channels-note">
                Pay using <strong>1Link 1Bill</strong> invoice across all Pakistani Banks,
                <strong> JazzCash</strong>, <strong>EasyPaisa</strong>, or <strong>Credit/Debit Cards</strong>.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default PayProDonationForm;
