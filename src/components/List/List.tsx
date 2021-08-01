import { Droppable } from 'react-beautiful-dnd';
import Card, { ICard } from './Card';
import Title from './Title';

interface ListProps {
  id: string;
  title: string;
  cards: ICard[];
  index: number;
  handleModalVisible: (listId?: string, cardId?: string) => void;
}

const List: React.FC<ListProps> = ({
  id,
  title,
  cards,
  index,
  handleModalVisible,
}) => {
  return (
    <section
      className={`${
        index !== 0 && 'ml-3'
      } flex-shrink-0 p-3 w-80 bg-gray-100 rounded-sm`}
    >
      <Title title={title} />
      <ul className="mt-2">
        <Droppable droppableId={id}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {cards.map((card, index) => (
                <Card
                  key={card.id}
                  card={card}
                  index={index}
                  listId={id}
                  handleModalVisible={handleModalVisible}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </ul>
    </section>
  );
};

export default List;
