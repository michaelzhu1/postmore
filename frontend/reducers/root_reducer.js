import { combineReducers } from "redux";
import NoteReducer from "./note_reducer";
import ModalReducer from "./modal_reducer";
import ContentReducer from "./content_reducer";

const RootReducer = combineReducers({
  note: NoteReducer,
  modal: ModalReducer,
  content: ContentReducer
});

export default RootReducer;
