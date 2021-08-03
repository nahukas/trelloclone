export interface ICard {
  id: string;
  title: string;
  date: string;
  createdBy: string;
  assignedTo?: string;
  tag?: string;
}

export interface ICardToEdit extends ICard {
  list: string;
}

export interface IData {
  id: string;
  title: string;
  cards: ICard[];
}

const backlogCards = [
  {
    id: 'card-1',
    title: 'create boilerplate',
    date: '2020-09-12',
    createdBy: 'nahuelCastro',
    assignedTo: 'nahuelCastro',
  },
  {
    id: 'card-2',
    title: 'config tailwind',
    date: '2021-03-23',
    createdBy: 'nahuelCastro',
    assignedTo: 'maxMustermann',
  },
  {
    id: 'card-3',
    title: 'create basic structure',
    date: '2021-03-24',
    createdBy: 'nahuelCastro',
    assignedTo: 'maxMustermann',
  },
];

const doingCards = [
  {
    id: 'card-4',
    title: 'config data',
    date: '2021-03-24',
    createdBy: 'nahuelCastro',
    assignedTo: 'erikaMuller',
  },
  {
    id: 'card-5',
    title: 'config drag and drop',
    date: '2021-03-24',
    createdBy: 'nahuelCastro',
    assignedTo: 'nahuelCastro',
  },
  {
    id: 'card-6',
    title: 'edit cards',
    date: '2021-03-24',
    createdBy: 'nahuelCastro',
    assignedTo: 'erikaMuller',
    tag: 'enhancement',
  },
  {
    id: 'card-7',
    title: 'Sidebar bug',
    date: '2021-07-29',
    createdBy: 'nahuelCastro',
    assignedTo: 'nahuelCastro',
    tag: 'bug',
  },
];

const data: IData[] = [
  {
    id: 'list-1',
    title: 'Backlog',
    cards: backlogCards,
  },
  {
    id: 'list-2',
    title: 'Doing',
    cards: doingCards,
  },
];

export interface IUser {
  username: string;
  completeName: string;
}

export const users = [
  {
    username: 'nahuelCastro',
    completeName: 'Nahuel Castro',
  },
  {
    username: 'maxMustermann',
    completeName: 'Max Mustermann',
  },
  {
    username: 'erikaMuller',
    completeName: 'Erika Müller',
  },
];

export default data;
