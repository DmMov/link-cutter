import React from 'react';
import { func, string, oneOfType, bool, object, number, array } from 'prop-types';
import classnames from 'classnames';

// * Sass
import './Field.scss';

export const Field = ({ control: Control, label, placeholder, name, value, type, error, onChange }) =>
  <label
    htmlFor={`${name}__control`}
    className={classnames('field', `${name}Field`, !!error && 'error')}
  >
    <span className="field__label">{label}</span>
    <Control
      id={`${name}__control`}
      name={name}
      value={value}
      type={type}
      className={classnames('field__control', `${name}Field__control`)}
      onChange={onChange}
      placeholder={placeholder}
    />
    {error && <span className="field__error">{error}</span>}
  </label>;

Field.defaultProps = {
  control: 'input',
  type: 'text'
};

Field.propTypes = {
  control: string,
  label: string,
  placeholder: string.isRequired,
  name: string.isRequired,
  value: oneOfType([string, bool, object, number, array]).isRequired,
  type: string,
  onChange: func.isRequired,
  error: string
};