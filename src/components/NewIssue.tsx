import React from 'react';

const NewIssue: React.FC = () => (
  <button className="ml-3 flex items-center pl-2 pr-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700">
    <svg className="h-6 w-6" viewBox="0 0 24 24">
      <path
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        d="M12 7v10m5-5H7"
      />
    </svg>
    <span className="ml-1">New Issue</span>
  </button>
);

export default NewIssue;
