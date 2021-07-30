import React from 'react';
import NewIssue from './NewIssue';
import profilePic from '../assets/profile.jpg';

const Header: React.FC = () => (
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
        <button>
          <svg
            className="h-6 w-6 text-gray-5 00"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              d="M15 17h5l=1.405A2.032 2.032 0 0118 14.158V11a6"
            />
          </svg>
          bell icon
        </button>
        <button className="ml-6">
          <img
            className="h-9 w-9 rounded-full object-cover"
            src={profilePic}
            alt="Your profile"
          />
        </button>
      </div>
    </div>
    <div className="flex items-center-justify-between py-2">
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
              src={profilePic}
              alt=""
            />
          </span>
        </div>
      </div>
      <div className="flex">
        <span className="inline-flex p-1 border bg-gray-200 rounded-md">
          <button className="px2 py-1 rounded">
            <svg
              className="h-6 w-6 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
          </button>
          <button className="px2 py-1 bg-white rounded shadow">
            <svg
              className="h-6 w-6 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </button>
        </span>
        <NewIssue />
      </div>
    </div>
  </header>
);

export default Header;
