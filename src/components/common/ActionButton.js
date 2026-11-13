import React from 'react';
import { Link } from 'react-router-dom';

const ActionButton = ({
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  type = 'button',
  icon,
  iconPosition = 'right',
  disabled = false,
  fullWidth = false,
  className = '',
  children,
  ...rest
}) => {
  const classes = [
    'btn-action',
    `btn-action--${variant}`,
    `btn-action--${size}`,
    fullWidth ? 'btn-action--block' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {icon && iconPosition === 'left' ? (
        <i className={`${icon} btn-action__icon`} aria-hidden="true"></i>
      ) : null}
      <span className="btn-action__label">{children}</span>
      {icon && iconPosition !== 'left' ? (
        <i className={`${icon} btn-action__icon`} aria-hidden="true"></i>
      ) : null}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {content}
    </button>
  );
};

export default ActionButton;
