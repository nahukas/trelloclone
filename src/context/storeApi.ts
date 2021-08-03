import { createContext } from 'react';
import store, { IData } from '../data/data';

interface IContext {
  data: IData[];
  setData: (dataProps: IData[]) => void;
  currentUser: string;
  handleCurrentUser: (user: string) => void;
  addCard: (title: string, assignedBy?: string, tag?: string) => void;
  addBoard: (boardName: string) => void;
}

const initial: IContext = {
  data: store,
  setData: () => {},
  currentUser: '',
  handleCurrentUser: () => {},
  addCard: () => {},
  addBoard: () => {},
};

export const dataContext = createContext<IContext>(initial);
