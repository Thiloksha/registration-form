import React, { useState } from 'react';
import PersonalInformation from './pages/PersonalInformation';
import SecurityInfo from './pages/SecurityInfo';
import { postRegistration } from './api/register';
import SuccessMessage from './components/SuccessMessage';
import StepIndicator from './components/StepIndicator';
import './App.css';

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const payload = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
    };

    try {
      await postRegistration(payload);
      setIsSuccess(true);
    } catch (error) {
      console.error('Registration error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return <SuccessMessage />;
  }

  return (
    <div className="app-container">
      
      {isLoading && (
        <div className="loading-overlay">
        <div className="spinner"></div>
        <div>Submitting...</div>
          </div>
      )}

      <StepIndicator currentStep={step} />

      {!isLoading && step === 1 && (
        <PersonalInformation
          formData={formData}
          setFormData={setFormData}
          onNext={handleNext}
        />
      )}

      {!isLoading && step === 2 && (
        <SecurityInfo
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default App;
