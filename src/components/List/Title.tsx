import React, { useState } from 'react';

interface ITitleProps {
  title: string;
}

const Title: React.FC<ITitleProps> = ({ title }) => {
  const [open, setOpen] = useState(false);
  const [customTitle, setCustomTitle] = useState(title);

  return (
    <>
      {open ? (
        <input
          className="text-sm font-medium text-gray-900"
          type="text"
          onBlur={() => setOpen(!open)}
          onChange={(e) => setCustomTitle(e.target.value)}
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
