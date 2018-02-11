export const ADD_NOTE = "ADD_NOTE";
export const UPDATE_NOTE = "UPDATE_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

export const addNote = note => ({
  type: ADD_NOTE,
  note
});

export const updateNote = (note, id) => ({
  type: UPDATE_NOTE,
  note,
  id
});

export const deleteNote = id => ({
  type: DELETE_NOTE,
  id
});
