// components/EfficiencyReport.js
import React from 'react';

const EfficiencyReport = ({ usageData }) => {
  const totalUsage = usageData.reduce((acc, data) => acc + data.quantity, 0);
  const averageUsage = totalUsage / (usageData.length || 1); // Avoid division by zero

  return (
    <div>
      <h2>Efficiency Report</h2>
      <p>Total Consumption: {totalUsage.toFixed(2)} kWh</p>
      <p>Average Usage per Entry: {averageUsage.toFixed(2)} kWh</p>
    </div>
  );
};

export default EfficiencyReport;
