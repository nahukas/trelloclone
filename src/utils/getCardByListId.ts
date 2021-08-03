import { IData } from '../data/data';

export function getCardByListId(listId: string, cardId: string, data: IData[]) {
  const sourceListIndex = data.map((e) => e.id).indexOf(listId);
  const sourceCardIndex = data[sourceListIndex].cards
    .map((c) => c.id)
    .indexOf(cardId);

  return data[sourceListIndex].cards[sourceCardIndex];
}
