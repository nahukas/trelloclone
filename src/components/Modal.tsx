import React, { useContext, useState, useEffect } from 'react';
import { dataContext } from '../context/storeApi';
import { tags } from '../data/constants';
import { ICardToEdit, users } from '../data/data';

interface ModalProps {
  handleModalVisible: () => void;
  cardToEdit?: ICardToEdit;
}

const Modal: React.FC<ModalProps> = ({ handleModalVisible, cardToEdit }) => {
  const { addCard, data } = useContext(dataContext);
  const [title, setTitle] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [tag, setTag] = useState('');

  useEffect(() => {
    if (cardToEdit) {
      setTitle(cardToEdit.title);
      if (cardToEdit.tag) {
        setTag(cardToEdit.tag);
      }
      if (cardToEdit.assignedTo) {
        setAssignedTo(cardToEdit.assignedTo);
      }
    }
  }, [cardToEdit]);

  const summitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (cardToEdit) {
      handleEditCard();
    } else {
      handleCreateCard();
    }
  };

  const handleCreateCard = () => {
    if (title && title.replace(/\s/g, '').length) {
      addCard(title, assignedTo, tag);
      resetFrom();
      handleModalVisible();
    }
  };

  const handleEditCard = () => {
    if (title && title.replace(/\s/g, '').length && cardToEdit) {
      const sourceListIndex = data.map((e) => e.id).indexOf(cardToEdit.list);
      const sourceCardIndex = data[sourceListIndex].cards
        .map((c) => c.id)
        .indexOf(cardToEdit.id);
      data[sourceListIndex].cards[sourceCardIndex].title = title;
      data[sourceListIndex].cards[sourceCardIndex].tag = tag;
      data[sourceListIndex].cards[sourceCardIndex].assignedTo = assignedTo;
      resetFrom();
      handleModalVisible();
    }
  };

  const handleCancel = () => {
    resetFrom();
    handleModalVisible();
  };

  const resetFrom = () => {
    setTag('');
    setTitle('');
  };

  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                <svg
                  className="h-6 w-6 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  {cardToEdit ? 'Edit Issue' : 'Create New Issue'}
                </h3>
                <div className="mt-2">
                  <form
                    className="bg-white rounded pt-6 pb-8"
                    onSubmit={(e: React.SyntheticEvent) => summitHandler(e)}
                  >
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="title"
                      >
                        Title
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title"
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        autoFocus={true}
                        tabIndex={0}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="title"
                      >
                        Assigned To
                      </label>
                      <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="assignedTo"
                        value={assignedTo}
                        onChange={(e) => setAssignedTo(e.target.value)}
                        tabIndex={1}
                      >
                        <option value=""></option>
                        {users.map((user) => (
                          <option key={user.username} value={user.username}>
                            {user.completeName}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="title"
                      >
                        Tag
                      </label>
                      <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="tag"
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}
                        tabIndex={2}
                      >
                        <option value=""></option>
                        {tags.map((tag) => (
                          <option key={tag} value={tag}>
                            {tag}
                          </option>
                        ))}
                      </select>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm"
              type="button"
              onClick={cardToEdit ? handleEditCard : handleCreateCard}
            >
              {cardToEdit ? 'Edit' : 'Create'}
            </button>

            <button
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              type="button"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
