import { connect } from "react-redux";
import NoteIndex from "./note_index";
import { updateModal } from "../actions/modal_actions";
import {
  updateTitle,
  updateBody,
  updateColor
} from "../actions/content_actions";

const mapStateToProps = state => ({
  note: state.note
});

const mapDispatchToProps = dispatch => ({
  updateTitle: title => dispatch(updateTitle(title)),
  updateBody: body => dispatch(updateBody(body)),
  updateColor: color => dispatch(updateColor(color)),
  updateModal: (modalStatus, type, id) =>
    dispatch(updateModal(modalStatus, type, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteIndex);
