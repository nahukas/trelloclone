import React, { useContext, useEffect, useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import { ICard } from './data/data';
import { dataContext } from './context/storeApi';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  let { data, setData } = useContext(dataContext);
  const [newBoard, setNewBoard] = useState({});
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem('trelloCloneUser') ?? 'nahuelCastro'
  );

  useEffect(() => {
    if (newBoard) {
      setData(data);
    }
  }, [newBoard, data, setData]);

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

    data[0].cards.push(newCard);
  };

  const addBoard = (boardName: string) => {
    const listId = uuid();
    const newBoard = {
      id: listId,
      title: boardName,
      cards: [],
    };
    setNewBoard(newBoard);
    data.push(newBoard);
  };

  const handleCurrentUser = (user: string) => {
    setCurrentUser(user);
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    const sourceList = data.find((list) => list.id === source.droppableId);
    const sourceListIndex = data.map((e) => e.id).indexOf(sourceList!.id);
    const sourceCardIndex = data[sourceListIndex].cards
      .map((c) => c.id)
      .indexOf(draggableId);
    const draggedCard = data[sourceListIndex].cards[sourceCardIndex];
    const destinationListIndex = data
      .map((e) => e.id)
      .indexOf(destination.droppableId);

    data[sourceListIndex].cards.splice(sourceCardIndex, 1);
    data[destinationListIndex].cards.splice(destination.index, 0, draggedCard);
  };

  return (
    <dataContext.Provider
      value={{
        data,
        setData,
        currentUser,
        handleCurrentUser,
        addCard,
        addBoard,
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
