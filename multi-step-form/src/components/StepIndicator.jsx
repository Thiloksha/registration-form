// src/components/StepIndicator.jsx
import React from 'react';
import './StepIndicator.css';

const StepIndicator = ({ currentStep }) => {
  const steps = [
    { number: 1, label: 'Personal Info' },
    { number: 2, label: 'Security Info' }
  ];

  return (
    <div className="step-wrapper">
      {steps.map((step, index) => (
        <div className="step-item" key={step.number}>
          <div
            className={`step-circle ${
              currentStep === step.number ? 'active' : currentStep > step.number ? 'completed' : ''
            }`}
          >
            {step.number}
          </div>
          <div className="step-label">{step.label}</div>
          {index < steps.length - 1 && (
            <div
              className={`step-line ${
                currentStep > step.number ? 'completed' : ''
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
