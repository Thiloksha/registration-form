import React from 'react';
import './InputField.css';

// Reusable input field
const InputField = ({ label, type = 'text', name, value, onChange, placeholder, required = true, error}) => {
  return (
    <div className="input-group">
      <label className="input-label">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`input-field ${error ? 'input-error' : ''}`}
        required={required}
      />
    </div>
  );
};

// Reusable button (used for both Next and Submit)
export const FormButton = ({ label, type = 'submit', disabled = false, isLoading = false }) => {
  return (
    <button type={type} className="submit-button" disabled={disabled || isLoading}>
      {isLoading ? 'Submitting...' : label}
    </button>
  );
};

export default InputField;
