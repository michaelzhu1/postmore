import { connect } from "react-redux";
import Modal from "./modal";
import { updateModal } from "../actions/modal_actions";
import {
  updateTitle,
  updateBody,
  updateColor
} from "../actions/content_actions";
import { addNote, updateNote, deleteNote } from "../actions/note_actions";

const mapStateToProps = state => ({
  note: state.note,
  modal: state.modal,
  content: state.content
});

const mapDispatchToProps = dispatch => ({
  addNote: note => dispatch(addNote(note)),
  updateModal: (isOpen, type, id) => dispatch(updateModal(isOpen, type, id)),
  updateNote: (note, id) => dispatch(updateNote(note, id)),
  deleteNote: id => dispatch(deleteNote(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
