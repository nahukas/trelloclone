import React, { useContext, useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { dataContext } from '../context/storeApi';
import NewProject from './NewProject';

const Sidebar: React.FC = () => {
  const { data, currentUser } = useContext(dataContext);
  const [total, setTotal] = useState(0);
  const [createdByMe, setCreatedByMe] = useState(0);
  const [assignedToMe, setAssignedToMe] = useState(0);

  useEffect(() => {
    const cards = data.lists
      .map((list) => list.cards.map((card) => card))
      .flat();

    setTotal(cards.length);
    setCreatedByMe(
      cards.filter((card) => card.createdBy === currentUser).length
    );
    setAssignedToMe(
      cards.filter((card) => card.assignedTo === currentUser).length
    );
  }, [data, currentUser]);

  return (
    <>
      <div className="w-64 px-8 py-3 bg-gray-50 border-r">
        <img className="h-9 w-9" src={logo} alt="" />
        <nav className="mt-8">
          <h2 className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
            Issues
          </h2>
          <div className="mt-2 -mx-3">
            <a
              className="mt-2 flex justify-between item-center px-3 py-2 bg-gray-200 rounded-lg"
              href="."
            >
              <span className="text-sm font-medium text-gray-900">All</span>
              <span className="text-xs font-semibold text-gray-700 ">
                {total}
              </span>
            </a>
            <a
              className="mt-2 flex justify-between item-center px-3 py-2 rounded-lg"
              href="."
            >
              <span className="text-sm font-medium text-gray-700">
                Assigned to me
              </span>
              <span className="text-xs font-semibold text-gray-700 ">
                {assignedToMe}
              </span>
            </a>
            <a
              className="mt-2 flex justify-between item-center px-3 py-2 rounded-lg"
              href="."
            >
              <span className="text-sm font-medium text-gray-700">
                Created by me
              </span>
              <span className="text-xs font-semibold text-gray-700 ">
                {createdByMe}
              </span>
            </a>
            <a
              className="mt-2 flex justify-between item-center px-3 py-2 rounded-lg"
              href="."
            >
              <span className="text-sm font-medium text-gray-700">
                Archived
              </span>
            </a>
          </div>
          <NewProject />
        </nav>
      </div>
    </>
  );
};
export default Sidebar;
