import React, { useContext, useState } from 'react';
import Header from './Header';
import List from './List/List';
import Modal from './Modal';

import { dataContext } from '../context/storeApi';

import { getCardByListId } from '../utils/getCardByListId';
import { ICardToEdit } from '../data/data';
import ChangeUserModal from './ChangeUserModal';

const Dashboard: React.FC = () => {
  const { data } = useContext(dataContext);
  const { lists } = data;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isUserModalVisible, setIsUserModalVisible] = useState(false);
  const [cardToEdit, setCardToEdit] = useState<ICardToEdit | undefined>(
    undefined
  );

  const handleModalVisible = (listId?: string, cardId?: string) => {
    if (listId && cardId) {
      const card = getCardByListId(listId, cardId, data) as ICardToEdit;
      card.list = listId;
      setCardToEdit(card);
    } else {
      setCardToEdit(undefined);
    }
    setIsModalVisible(!isModalVisible);
  };

  const handleChangeUserModalVisible = () => {
    setIsUserModalVisible(!isUserModalVisible);
  };

  return (
    <>
      {isModalVisible && (
        <Modal
          handleModalVisible={handleModalVisible}
          cardToEdit={cardToEdit}
        />
      )}
      {isUserModalVisible && (
        <ChangeUserModal
          handleChangeUserModalVisible={handleChangeUserModalVisible}
        />
      )}

      <div className="flex-1 min-w-0 bg-white">
        <div className="border-b-2 border-gray-200">
          <Header
            handleModalVisible={handleModalVisible}
            handleChangeUserModalVisible={handleChangeUserModalVisible}
          />
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
                  handleModalVisible={handleModalVisible}
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
