import React from 'react';
import { PropTypes } from 'prop-types';
import Note from './Note';
import { deleteNote } from './NoteActions';
//import styles from './Notes.css';

const Notes = ({ notes }) => {
  console.log('notes ', notes)
  return !notes ? null : (<ul className="notes">{notes.map((note) =>
    <Note
      id={note.id}
      key={note.id}
    >
      {note.task}
      <button 
        onClick={() => {
          console.log('Deleting note')
          deleteNote(note.noteId)}}
      >Delete Note</button>
    </Note>
  )}</ul>);
};

Notes.propTypes = {
  notes: PropTypes.array,
};

export default Notes;