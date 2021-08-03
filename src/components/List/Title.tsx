import React from 'react';

interface ITitleProps {
  title: string;
}

const Title: React.FC<ITitleProps> = ({ title }) => {
  return <h3 className="text-sm font-medium text-gray-900">{title}</h3>;
};

export default Title;
