import React, { useContext } from 'react';
import { dataContext } from '../context/storeApi';
import NewIssue from './NewIssue';

interface HeaderProps {
  handleModalVisible: () => void;
  handleChangeUserModalVisible: () => void;
}

const Header: React.FC<HeaderProps> = ({
  handleModalVisible,
  handleChangeUserModalVisible,
}) => {
  const { currentUser } = useContext(dataContext);

  return (
    <header className="px-6">
      <div className="flex justify-between items-center py-3 border-b border-gray-200">
        <div className="flex-1">
          <div className="relative w-64">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <svg
                className="h-6 w-6 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
            <input
              className="block w-full rounded-md border border-gray-400 pl-10 py-2 text-sm text-gray-900 placeholder-gray-600"
              type="text"
              placeholder="search"
            />
          </div>
        </div>
        <div className="flex items-center">
          <button
            className="ml-6"
            onClick={() => handleChangeUserModalVisible()}
          >
            <img
              className="h-9 w-9 rounded-full object-cover"
              src={`../img/${currentUser}.jpg`}
              alt="Your profile"
            />
          </button>
        </div>
      </div>
      <div className="flex justify-between py-2">
        <div className="flex items-center">
          <div className="flex items-center">
            <h2 className="text-2xl front-semibold text-gray-900 leading-tight">
              All Issues
            </h2>
          </div>
          <div className="ml-6 flex items-centers">
            <span className="-ml-2 rounded-full border-2 border-white">
              <img
                className="h-6 w-6 rounded-full object-cover"
                src={`../img/${currentUser}.jpg`}
                alt=""
              />
            </span>
          </div>
        </div>
        <div className="flex">
          <NewIssue handleModalVisible={handleModalVisible} />
        </div>
      </div>
    </header>
  );
};

export default Header;
