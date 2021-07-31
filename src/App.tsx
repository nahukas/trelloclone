import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import store from './data/data';
import StoreApi from './utils/storeApi';
import { ICard } from './components/List/Card';

const App: React.FC = () => {
  const [data, setData] = useState(store);
  const addCard = (title: string) => {
    const cardId = uuid();
    const newCard: ICard = {
      title,
      id: cardId,
      date: '2021-03-30',
    };

    data.lists[0].cards.push(newCard);
    setData(data);
  };

  return (
    <StoreApi.Provider
      value={{
        addCard,
      }}
    >
      <div className="h-screen flex">
        <Sidebar />
        <Dashboard lists={data.lists} listIds={data.listIds} />
      </div>
    </StoreApi.Provider>
  );
};

export default App;
