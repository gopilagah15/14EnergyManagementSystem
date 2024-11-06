// App.js
import React, { useState } from 'react';
import UsageMonitoringForm from './components/UsageMonitoringForm';
import ConsumptionAlerts from './components/ConsumptionAlerts';
import CostForecasting from './components/CostForecasting';
import EfficiencyReport from './components/EfficiencyReport';

const App = () => {
  const [usageData, setUsageData] = useState([]);
  const [alerts, setAlerts] = useState([]);

  // Add new usage data
  const handleUsageSubmit = (data) => {
    setUsageData([...usageData, data]);

    // Trigger alerts if usage exceeds a threshold
    if (data.quantity > 100) { // Example threshold
      setAlerts([...alerts, `High usage alert: ${data.quantity} units at ${data.time}`]);
    }
  };

  return (
    <div>
      <h1>Energy Management System</h1>
      <UsageMonitoringForm onSubmit={handleUsageSubmit} />
      <ConsumptionAlerts alerts={alerts} />
      <CostForecasting usageData={usageData} />
      <EfficiencyReport usageData={usageData} />
    </div>
  );
};

export default App;
