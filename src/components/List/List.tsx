import { ReactChildren, ReactChild } from 'react';
import Title from './Title';

interface ListProps {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const List = ({ children }: ListProps) => {
  return (
    <section className="ml-3 flex-shrink-0 p-3 w-80 bg-gray-100 rounded-sm">
      <Title />
      <ul className="mt-2">{children}</ul>
    </section>
  );
};

export default List;
