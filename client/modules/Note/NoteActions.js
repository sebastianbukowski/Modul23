import callApi from '../../util/apiCaller';
// Export Constants
export const CREATE_NOTE = 'CREATE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const CREATE_NOTES = 'CREATE_LANES';
// Export Actions

export function createNote(note, laneId) {
  return {
    type: CREATE_NOTE,
    laneId,
    note,
  };
}
export function createNotes(notesData) {
  return {
    type: CREATE_NOTES,
    notes: notesData
  }
}
 
export function createNoteRequest(note, laneId) {
  return (dispatch) => {
    return callApi('notes', 'post', { note, laneId }).then(noteResp => {
      dispatch(createNote(noteResp, laneId));
    });
  };
}
  
  export function updateNote(note) {
    return {
      type: UPDATE_NOTE,
      note,
    };
  }
  
  export function deleteNote(noteId,laneId) {
    console.log('deleting ...')
    console.log('from delete function',laneId,noteId)

    return {
      type: DELETE_NOTE,
      noteId ,
      laneId,
    };
  }