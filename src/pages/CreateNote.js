import React, { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import useCreateDate from '../components/useCreateDate'


const CreateNote = ({setNote}) => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const date = useCreateDate()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    if(title && details) {
      const note = {id: uuid(), title, details, date}
      // add this note to the Notes array
      setNote(prevNotes => [note, ...prevNotes])
      // redirect to homepage
    navigate ('/')
    }
    
  }
  return (
  <div className="custom-container">
    <section>
    <header className='flex items-center justify-between'>
    <Link to="/" className='btn transition-all duration-300 ease-in-out rounded-md px-3 py-3 bg-gray-500'> <IoIosArrowBack /> </Link>
    <button className='btn rounded-md px-3 py-3 bg-blue-500' onClick={handleSubmit}>Save</button>
    </header>
    <form className='create-note_form' onSubmit={handleSubmit}>
      <input type="text" className='rounded-md p-2 text-black w-full mt-2 ' placeholder='Title' autoFocus value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea className='w-full text-black bg-white rounded-md mt-2 p-2' rows="28" placeholder='Note Details...'
      value={details} onChange={(e) => setDetails(e.target.value)}></textarea>
    </form>
  </section>
  </div>
  )
}

export default CreateNote
