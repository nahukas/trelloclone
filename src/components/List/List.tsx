import Card, { ICard } from './Card';
import Title from './Title';

interface ListProps {
  id: string;
  title: string;
  cards: ICard[];
  index: number;
}

const List: React.FC<ListProps> = ({ title, cards, index }) => {
  return (
    <section
      className={`${
        index !== 0 && 'ml-3'
      } flex-shrink-0 p-3 w-80 bg-gray-100 rounded-sm`}
    >
      <Title title={title} />
      <ul className="mt-2">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </ul>
    </section>
  );
};

export default List;
