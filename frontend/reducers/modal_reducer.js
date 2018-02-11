import { UPDATE_MODAL } from "../actions/modal_actions";

const initialState = {
  isOpen: false,
  type: "",
  id: null
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MODAL:
      return action.payload;
    default:
      return state;
  }
};

export default modalReducer;
