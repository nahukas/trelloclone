import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import store from './data/data';

const App: React.FC = () => {
  const [data, setData] = useState(store);
  return (
    <div className="h-screen flex">
      <Sidebar />
      <Dashboard lists={data.lists} listIds={data.listIds} />
    </div>
  );
};

export default App;
