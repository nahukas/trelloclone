import React from 'react';

interface NewProjectProps {
  handleCreateBoardModal: () => void;
}

const NewBoard: React.FC<NewProjectProps> = ({ handleCreateBoardModal }) => {
  return (
    <>
      <button
        className="mt-2 -ml-1 flex items-center text-sm font-medium text-gray-600"
        onClick={handleCreateBoardModal}
      >
        <svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            d="M12 7v10m5-5H7"
          />
        </svg>
        <span className="ml-1">New Board</span>
      </button>
    </>
  );
};

export default NewBoard;
