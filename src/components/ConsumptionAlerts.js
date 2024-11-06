// components/ConsumptionAlerts.js
import React from 'react';

const ConsumptionAlerts = ({ alerts }) => {
  return (
    <div>
      <h2>Consumption Alerts</h2>
      <ul>
        {alerts.map((alert, index) => (
          <li key={index}>{alert}</li>
        ))}
      </ul>
    </div>
  );
};

export default ConsumptionAlerts;
