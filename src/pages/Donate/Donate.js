import React from 'react';
import Newsletter from '../../components/Newsletter/Newsletter';
import payproLogo from '../../assets/paypro.jpg';
import faysalBankLogo from '../../assets/faysal bank.png';
import uBankLogo from '../../assets/u bank.jpg';
import './Donate.css';

const bankAccounts = [
  {
    id: 1,
    bank: 'Faysal Bank Limited',
    logo: faysalBankLogo,
    accountTitle: 'BNWO',
    accountNumber: '3557-30100000-2775',
    iban: 'PK28FAYS3557311000002775',
    branch: 'Main Branch, Lahore',
  },
  {
    id: 2,
    bank: 'U-Microfinance Bank',
    logo: uBankLogo,
    accountTitle: 'BNWO',
    accountNumber: '1094-0002968-0086',
    iban: 'PK53UMBL010949400029680086',
    branch: 'Main Branch, Lahore',
  },
];

const Donate = () => {
  return (
    <div className="donate-page">
      <section className="donate-paypro">
        <div className="container">
          <div className="paypro-top-card">
            <img src={payproLogo} alt="PayPro" className="paypro-logo" />
            <a
              href="https://billing.paypro.com.pk/donation/best-nation-welfare-organization/"
              target="_blank"
              rel="noreferrer"
              className="paypro-btn"
            >
              Donate Now
            </a>
          </div>
        </div>
      </section>

      <section className="donate-bank-transfer">
        <div className="container">
          <div className="section-title">
            <h2>Donate via Bank Transfer</h2>
            <div className="underline"></div>
          </div>

          <div className="bank-grid">
            {bankAccounts.map((account) => (
              <article key={account.id} className="bank-card">
                <img src={account.logo} alt={account.bank} className="bank-logo" />
                <h3>{account.bank}</h3>
                <p className="acc-title">Account Title: {account.accountTitle}</p>
                <p><strong>Account Number:</strong> {account.accountNumber}</p>
                <p><strong>IBAN:</strong> {account.iban}</p>
                <p>Branch: {account.branch}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default Donate;
