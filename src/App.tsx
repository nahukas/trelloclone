import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import store from './data/data';
import { dataContext } from './utils/storeApi';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

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

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    const sourceListId = source.droppableId;
    const sourceList = data.lists.find((list) => list.id === sourceListId);
    const sourceListIndex = data.lists.map((e) => e.id).indexOf(sourceList!.id);
    const sourceCardIndex = data.lists[sourceListIndex].cards
      .map((c) => c.id)
      .indexOf(draggableId);
    const draggedCard = data.lists[sourceListIndex].cards[sourceCardIndex];
    const destinationListIndex = data.lists
      .map((e) => e.id)
      .indexOf(destination.droppableId);

    data.lists[sourceListIndex].cards.splice(sourceCardIndex, 1);
    data.lists[destinationListIndex].cards.splice(
      destination.index,
      0,
      draggedCard
    );
  };

  return (
    <dataContext.Provider
      value={{
        addCard,
        data,
      }}
    >
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="h-screen flex">
          <Sidebar />
          <Dashboard />
        </div>
      </DragDropContext>
    </dataContext.Provider>
  );
};

export default App;
