import React from 'react'
import { Link } from 'react-router-dom'


const NoteItem = ({notes}) => {
  return (
    <Link to={`/edit-note/${notes.id}`} className='notes bg-blue-500 rounded-md p-4 flex flex-col gap-2 cursor-pointer transition-all duration-300 ease-in-out text-white'>
        <h4 className='font-bold'> {notes.title.length > 40 ? (notes.title.substr(0, 40)) + '...' : notes.title} </h4>
        <p>{notes.date}</p>
    </Link>
  )
}

export default NoteItem
