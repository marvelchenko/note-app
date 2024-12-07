import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Notes from './pages/Notes';
import CreateNote from './pages/CreateNote';
import EditNote from './pages/EditNote';
import { useEffect, useState } from 'react';

function App() {
  // Safe parsing for localStorage data
  const getInitialNotes = () => {
    const savedNotes = localStorage.getItem('note');
    try {
      // Try parsing, if it fails, return an empty array
      return savedNotes ? JSON.parse(savedNotes) : [];
    } catch (e) {
      console.error("Error parsing JSON from localStorage:", e);
      return []; // Return an empty array if the JSON is invalid
    }
  };

  const [note, setNote] = useState(getInitialNotes);

  // To Save to localStorage whenever note changes
  useEffect(() => {
    if (note.length > 0) {
      localStorage.setItem('note', JSON.stringify(note));
    }
  }, [note]);

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Notes note={note} />} />
          <Route path='/create-note' element={<CreateNote setNote={setNote} />} />
          <Route path='/edit-note/:id' element={<EditNote note={note} setNote={setNote} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
