import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

const App: React.FC = () => (
  <div className="h-screen flex">
    <Sidebar />
    <Dashboard />
  </div>
);

export default App;
