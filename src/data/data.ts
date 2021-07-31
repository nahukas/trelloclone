import { ICard } from '../components/List/Card';

export interface IData {
  lists: {
    id: string;
    title: string;
    cards: ICard[];
  }[];
  listIds: string[];
}

const backlogCards = [
  {
    id: 'card-1',
    title: 'create boilerplate',
    date: '2020-09-12',
  },
  {
    id: 'card-2',
    title: 'config tailwind',
    date: '2021-03-23',
  },
  {
    id: 'card-3',
    title: 'create basic structure',
    date: '2021-03-24',
  },
];

const doingCards = [
  {
    id: 'card-1',
    title: 'config data',
    date: '2021-03-24',
  },
  {
    id: 'card-2',
    title: 'config drag and drop',
    date: '2021-03-24',
  },
  {
    id: 'card-3',
    title: 'edit cards',
    date: '2021-03-24',
  },
];

const data: IData = {
  lists: [
    {
      id: 'list-1',
      title: 'Backlog',
      cards: backlogCards,
    },
    {
      id: 'list-1',
      title: 'Doing',
      cards: doingCards,
    },
  ],
  // listIds: ['list-1'],
  listIds: ['list-1', 'list-2'],
};

export default data;
