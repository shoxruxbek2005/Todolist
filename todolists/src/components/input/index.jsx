import React from 'react';

const InputComponent = ({ label, value, onChange, className }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={`Enter ${label}`}
        className={className}
      />
    </div>
  );
};

export default InputComponent;
