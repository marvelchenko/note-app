import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { RiDeleteBin6Fill } from 'react-icons/ri';

const EditNote = ({ note, setNote }) => {
  const { id } = useParams();
  const noteToEdit = note.find((item) => item.id === id);

  // Initialize state with empty values in case noteToEdit is not found
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  // Use effect to set the title and details when noteToEdit is available
  useEffect(() => {
    if (noteToEdit) {
      setTitle(noteToEdit.title);
      setDetails(noteToEdit.details);
    }
  }, [noteToEdit]); // This effect will run only when noteToEdit changes

  const handleSave = () => {
    const updatedNotes = note.map((item) =>
      item.id === id ? { ...item, title, details } : item
    );
    setNote(updatedNotes);
  };

  const handleDelete = () => {
    if(window.confirm('Are you sure you want to delete?')) {
      const updatedNotes = note.filter((item) => item.id !== id);
    setNote(updatedNotes);
    }
      
  };

  // If noteToEdit is not found, show a message
  if (!noteToEdit) {
    return <div>Note not found</div>;
  }

  return (
    <div className="custom-container">
      <section>
      <header className="flex items-center justify-between">
        <Link
          to="/"
          className="btn text-white transition-all duration-300 ease-in-out rounded-md px-3 py-3 bg-gray-500"
        >
          <IoIosArrowBack size={25} />
        </Link>
        <div className="flex items-center">
          <Link to="/"><button
            className="btn mr-3 rounded-md px-3 py-3 bg-red-500 text-white"
            onClick={handleDelete}
          >
            <RiDeleteBin6Fill size={25} />
          </button></Link>
          <Link to='/'><button
            className="btn rounded-md px-3 py-3 bg-blue-500 text-white"
            onClick={handleSave}
          >
            Save
          </button></Link>
        </div>
      </header>
      <form className="create-note_form">
        <input
          type="text"
          className="rounded-md p-2 w-full mt-2"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <textarea
          className="w-full text-white bg-gray-600 rounded-md mt-2 p-2"
          rows="28"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Note Details..."
        ></textarea>
      </form>
    </section>
    </div>
  );
};

export default EditNote;
