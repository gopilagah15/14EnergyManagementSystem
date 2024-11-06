// components/CostForecasting.js
import React from 'react';

const CostForecasting = ({ usageData }) => {
  const ratePerUnit = 0.12; // Example rate per kWh

  const totalCost = usageData.reduce((acc, data) => acc + data.quantity * ratePerUnit, 0);
  const forecastCost = (totalCost / usageData.length) * 30; // Forecast for 30 days

  return (
    <div>
      <h2>Cost Forecasting</h2>
      <p>Current Total Cost: ${totalCost.toFixed(2)}</p>
      <p>Estimated Monthly Cost: ${forecastCost.toFixed(2)}</p>
    </div>
  );
};

export default CostForecasting;
