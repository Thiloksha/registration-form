import React, { useState } from 'react';
import InputField, {FormButton } from '../components/InputField';
import { validatePassword, validateConfirmPassword } from '../utils/validation';


const SecurityInfo = ({ formData, setFormData, handleSubmit, isLoading }) => {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (!validateConfirmPassword(formData.password, formData.confirmPassword)) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      handleSubmit();
    }
  };

  return (
    <form onSubmit={onSubmit} className="form-container">
      <h2 className="form-title">Security Information</h2>
      <InputField
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter a password"
      />
      {errors.password && <p className="error-text">{errors.password}</p>}

      <InputField
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword || ''}
        onChange={handleChange}
        placeholder="Confirm password"
      />
      {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}

      <FormButton label="Submit" isLoading={isLoading}/>
    </form>
  );
};

export default SecurityInfo;
