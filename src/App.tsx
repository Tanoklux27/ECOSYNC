import { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import UsageHistory from './components/UsageHistory';
import Automations from './components/Automations';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'usage':
        return <UsageHistory />;
      case 'automations':
        return <Automations />;
      case 'settings':
        return (
          <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
             <div className="p-6 bg-gray-50 rounded-full">
                <div className="w-20 h-20 bg-gray-200 rounded-full animate-pulse" />
             </div>
             <h2 className="text-2xl font-bold">Settings</h2>
             <p className="text-gray-500 max-w-xs">Connection to smart home hub is secure. System updates are available.</p>
             <button className="px-8 py-3 bg-gray-900 text-white font-bold rounded-xl">Update System</button>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderContent()}
    </Layout>
  );
}
