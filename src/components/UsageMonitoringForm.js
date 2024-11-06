// components/UsageMonitoringForm.js
import React, { useState } from 'react';

const UsageMonitoringForm = ({ onSubmit }) => {
  const [time, setTime] = useState('');
  const [type, setType] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ time, type, quantity: parseFloat(quantity) });
    setTime('');
    setType('');
    setQuantity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Usage Monitoring Form</h2>
      <input
        type="datetime-local"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Type (e.g., Electricity)"
        value={type}
        onChange={(e) => setType(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Quantity (kWh)"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />
      <button type="submit">Add Usage</button>
    </form>
  );
};

export default UsageMonitoringForm;
