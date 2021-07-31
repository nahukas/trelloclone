export const backlogCards = [
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

// export const doingCards = [
//     {
//         id: 'card-1',
//         title: 'config data',
//     },
//     {
//         id: 'card-2',
//         title: 'config drag and drop',
//     },
//     {
//         id: 'card-3',
//         title: 'edit cards',
//     },
// ];

// export interface DataProps {
//     lists: {
//       id: string;
//       title: string;
//       backlogCards: ICard[];
//     }[];
//     listIds: string[];
//   }

export const data2 = {
  lists: {
    'list-1': {
      id: 'list-1',
      title: 'Backlog',
      cards: backlogCards,
    },

    // 'list-2': {
    //     id: 'list-1',
    //     title: 'Doing',
    //     doingCards
    // },
  },
  listIds: ['list-1'],
};

const data = {
  lists: [
    {
      id: 'list-1',
      title: 'Backlog',
      cards: backlogCards,
    },
  ],
  // 'list-2': {
  //     id: 'list-1',
  //     title: 'Doing',
  //     doingCards
  // },
  listIds: ['list-1'],
};
// listIds: ['list-1', 'list-2']

export default data;
