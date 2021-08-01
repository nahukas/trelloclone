import { createContext } from 'react';
import { IData } from '../data/data';

interface IContext {
  data: IData;
  currentUser: string;
  addCard: (title: string, assignedBy?: string, tag?: string) => void;
}

const initial: IContext = {
  data: {
    lists: [],
  },
  currentUser: '',
  addCard: () => {},
};

export const dataContext = createContext<IContext>(initial);
