import { IData } from '../data/data';

export function getCardByListId(listId: string, cardId: string, data: IData) {
  const sourceListIndex = data.lists.map((e) => e.id).indexOf(listId);
  const sourceCardIndex = data.lists[sourceListIndex].cards
    .map((c) => c.id)
    .indexOf(cardId);

  return data.lists[sourceListIndex].cards[sourceCardIndex];
}
