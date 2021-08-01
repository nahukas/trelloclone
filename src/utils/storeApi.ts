import { createContext } from 'react';
import { IData } from '../data/data';

interface IContext {
  data: IData;
  addCard: (title: string) => void;
}

const initial: IContext = {
  data: {
    lists: [],
    listIds: [],
  },
  addCard: () => {},
};

export const dataContext = createContext<IContext>(initial);
