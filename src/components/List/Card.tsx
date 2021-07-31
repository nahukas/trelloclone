import React from 'react';
import profilePic from '../../assets/profile.jpg';

export interface ICard {
  id: string;
  title: string;
  date: string;
  tag?: string;
}

interface CardProps {
  card: ICard;
}

const Card: React.FC<CardProps> = ({ card }) => {
  const { title, date, tag } = card;
  return (
    <li className="mt-3">
      <a className="block p-5 bg-white rounded-sm shadow" href=".">
        <div className="flex justify-between">
          <p className="text-sm font-medium leading-snug text-gray-900">
            {title}
          </p>
          <span>
            <img className="h-6 w-6 rounded-full" src={profilePic} alt="" />
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600">
            <time dateTime="2020-09-14">{date}</time>
          </div>
          <div className="mt-2">
            <span className="px-2 py-1 leading-tight inline-flex items-center bg-blue-100 rounded">
              <svg
                className="h-2 w-2 text-blue-500"
                viewBox="0 0 8 8"
                fill="currentColor"
              >
                <circle cx="4" cy="4" r="3" />
              </svg>
              <span className="ml-2 text-sm font-medium text-blue-900">
                {tag}
              </span>
            </span>
          </div>
        </div>
      </a>
    </li>
  );
};

export default Card;
