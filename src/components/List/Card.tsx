import React from 'react';
import moment from 'moment';
import { Draggable } from 'react-beautiful-dnd';
import { EnumColor, EnumTag } from '../../data/constants';
import { ICard } from '../../data/data';

interface CardProps {
  card: ICard;
  index: number;
  listId: string;
  handleModalVisible: (listId?: string, cardId?: string) => void;
}

const Card: React.FC<CardProps> = ({
  card,
  index,
  listId,
  handleModalVisible,
}) => {
  const { id, title, date, tag, assignedTo } = card;

  const handleClick = () => {
    handleModalVisible(listId, id);
  };

  const tagColor = (tag: string) => {
    if (tag === EnumTag.bug) {
      return EnumColor.red;
    }
    return EnumColor.blue;
  };

  const dateFormatted = moment(date).format('D MMM YY');

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <li
          className="mt-3 cursor-pointer"
          onClick={() => handleClick()}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <span className="block p-5 bg-white rounded-sm shadow">
            <div className="flex justify-between">
              <p className="text-sm capitalize font-medium leading-snug text-gray-900">
                {title}
              </p>
              <span>
                <img
                  className="h-6 w-6 rounded-full"
                  src={`../img/${assignedTo}.jpg`}
                  alt=""
                />
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-600">
                <time dateTime={dateFormatted}>{dateFormatted}</time>
              </div>
              {tag && (
                <div className="mt-2">
                  <span
                    className={`px-2 py-1 leading-tight inline-flex items-center bg-${tagColor(
                      tag
                    )}-100 rounded`}
                  >
                    <svg
                      className={`h-2 w-2 text-${tagColor(tag)}-500`}
                      viewBox="0 0 8 8"
                      fill="currentColor"
                    >
                      <circle cx="4" cy="4" r="3" />
                    </svg>
                    <span
                      className={`ml-2 text-sm font-medium text-${tagColor(
                        tag
                      )}-900`}
                    >
                      {tag}
                    </span>
                  </span>
                </div>
              )}
            </div>
          </span>
        </li>
      )}
    </Draggable>
  );
};

export default Card;
