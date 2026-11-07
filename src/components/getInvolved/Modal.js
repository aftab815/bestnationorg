import React, { useEffect, useId, useRef } from 'react';
import { createPortal } from 'react-dom';
import './forms.css';

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled]):not([tabindex="-1"])',
  'input:not([disabled]):not([type="hidden"]):not([tabindex="-1"])',
  'select:not([disabled]):not([tabindex="-1"])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

const Modal = ({ title, onClose, children }) => {
  const modalRef = useRef(null);
  const titleId = useId();

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const node = modalRef.current;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    const getFocusable = () =>
      Array.from(node ? node.querySelectorAll(FOCUSABLE_SELECTOR) : []).filter(
        (element) => element.offsetParent !== null || element === document.activeElement
      );

    const bodyField = node ? node.querySelector('.gi-modal__body input, .gi-modal__body select, .gi-modal__body textarea, .gi-modal__body button') : null;
    const initialTarget = bodyField || getFocusable()[0];
    if (initialTarget) {
      initialTarget.focus();
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;

      const focusable = getFocusable();
      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (previouslyFocused && typeof previouslyFocused.focus === 'function') {
        previouslyFocused.focus();
      }
    };
  }, [onClose]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <div
      className="gi-modal-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="gi-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        ref={modalRef}
      >
        <div className="gi-modal__header">
          <h2 id={titleId} className="gi-modal__title">
            {title}
          </h2>
          <button
            type="button"
            className="gi-modal__close"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <i className="fas fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <div className="gi-modal__body">{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
