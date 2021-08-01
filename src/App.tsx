import React, { useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import store, { ICard } from './data/data';
import { dataContext } from './context/storeApi';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  const [data, setData] = useState(store);
  const currentUser = localStorage.getItem('trelloCloneUser') ?? 'nahuelCastro';

  const addCard = (title: string, assignedTo?: string, tag?: string) => {
    const cardId = uuid();
    const today = moment().format('YYYY-MM-DD');
    const newCard: ICard = {
      title,
      id: cardId,
      date: today,
      createdBy: currentUser,
      assignedTo,
      tag,
    };

    data.lists[0].cards.push(newCard);
    setData(data);
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    const sourceList = data.lists.find(
      (list) => list.id === source.droppableId
    );
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
        currentUser,
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
