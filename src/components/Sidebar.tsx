import React from 'react';
import logo from '../assets/logo.png';
import NewProject from './NewProject';

const Sidebar: React.FC = () => (
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
            <span className="text-xs font-semibold text-gray-700 ">36</span>
          </a>
          <a
            className="mt-2 flex justify-between item-center px-3 py-2 rounded-lg"
            href="."
          >
            <span className="text-sm font-medium text-gray-700">
              Assigned to me
            </span>
            <span className="text-xs font-semibold text-gray-700 ">2</span>
          </a>
          <a
            className="mt-2 flex justify-between item-center px-3 py-2 rounded-lg"
            href="."
          >
            <span className="text-sm font-medium text-gray-700">
              Created by me
            </span>
            <span className="text-xs font-semibold text-gray-700 ">1</span>
          </a>
          <a
            className="mt-2 flex justify-between item-center px-3 py-2 rounded-lg"
            href="."
          >
            <span className="text-sm font-medium text-gray-700">Archived</span>
          </a>
        </div>
        <NewProject />
      </nav>
    </div>
  </>
);
export default Sidebar;
