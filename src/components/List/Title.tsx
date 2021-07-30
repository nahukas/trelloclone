import React, { useState } from 'react';

const Title: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('Backlog');

  return (
    <>
      {open ? (
        <input
          className="text-sm font-medium text-gray-900"
          type="text"
          onBlur={() => setOpen(!open)}
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      ) : (
        <h3
          className="text-sm font-medium text-gray-900"
          onClick={() => setOpen(!open)}
        >
          {title}
        </h3>
      )}
    </>
  );
};

export default Title;
