import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { BsPlusLg } from 'react-icons/bs';
import NoteItem from '../components/NoteItem';

const Notes = ({ note }) => {
  const [searchQuery, setSearchQuery] = useState(''); // State for storing the search input

  // Filter notes based on the search query
  const filteredNotes = note.filter((notes) =>
    notes.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className='custom-container'>
      <header className="notes_header">
        <h2 className="font-bold uppercase text-3xl mb-3">My Notes</h2>
        <div className="flex pb-2 justify-between">
          <input
            type="text"
            className="w-[300px] px-2 py-2 border-2 border-gray-500"
            autoFocus
            placeholder="Keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
          />
          <button className="btn py-2 px-2 bg-blue-500 text-white rounded-lg">
            <CiSearch size={30} />
          </button>
        </div>
        <div className="note_container grid grid-cols-2 gap-5">
          {
            // Render filtered notes
            filteredNotes.map(notes => (
              <NoteItem key={notes.id} notes={notes} />
            ))
          }
        </div>
        <div className="flex flex-col items-end fixed left-[800px] top-[500]">
          <Link to="/create-note">
            <button className="btn transition-all duration-300 ease-in-out bg-green-500 mt-4 shadow-md text-white px-4 py-4 rounded-full hover:bg-blue-600">
              <BsPlusLg />
            </button>
          </Link>
        </div>
      </header>
    </section>
  );
};

export default Notes;
