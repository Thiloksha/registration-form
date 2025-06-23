import React, { useState, useEffect } from 'react';
import InputField, {FormButton } from '../components/InputField';
import './PersonalInformation.css';
import { validateEmail } from '../utils/validation';

const PersonalInformation = ({ formData, setFormData, onNext }) => {
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Email format is invalid';
    }

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onNext();
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Personal Information</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="John Doe"
        />
        {errors.fullName && <p className="error-text">{errors.fullName}</p>}

        <InputField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
        />
        {errors.email && <p className="error-text">{errors.email}</p>}

        <InputField
          label="Phone Number (Optional)"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="0771234567"
          required={false} 
        />

        <FormButton label="Next" disabled={!isValid} />
      </form>
    </div>
  );
};

export default PersonalInformation;
