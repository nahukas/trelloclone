import React, { useContext, useState } from 'react';
import Header from './Header';
import List from './List/List';
import Modal from './Modal';

import { dataContext } from '../utils/storeApi';

const Dashboard: React.FC = () => {
  const { data } = useContext(dataContext);
  const { lists } = data;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModalVisible = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>
      {isModalVisible && <Modal handleModalVisible={handleModalVisible} />}
      <div className="flex-1 min-w-0 bg-white">
        <div className="border-b-2 border-gray-200">
          <Header handleModalVisible={handleModalVisible} />
        </div>
        <div>
          <main className="p-3 flex">
            {lists.map(({ id, title, cards }, index) => {
              return (
                <List
                  key={id}
                  index={index}
                  id={id}
                  title={title}
                  cards={cards}
                />
              );
            })}
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
