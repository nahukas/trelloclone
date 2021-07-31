import { createContext } from 'react';

export default createContext({
  addCard: (title: string) => console.log(title),
});
