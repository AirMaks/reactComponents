import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Input = ({
  id, className, label, error, required, type,
}) => {
  const classes = classNames(
    'input',
    className,
    { error },
  );

  return (
    <div className="input-wrapper">
      {label
          && <label className="input-label" htmlFor={id}>{label}</label>}
      {required
          && <span className="input-required">Required</span>}
      <input id={id} name={id} className={classes} type={type} />
      {error
        && <span className="input-error">{error}</span>}
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
};

Input.defaultProps = {
  className: '',
  label: '',
  error: '',
  required: false,
  type: 'text',
};

export default Input;
