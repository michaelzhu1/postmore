import {
  UPDATE_TITLE,
  UPDATE_BODY,
  UPDATE_COLOR
} from "../actions/content_actions";

export default function(state = {}, action) {
  switch (action.type) {
    case UPDATE_TITLE:
      return { body: state.body, title: action.payload, color: state.color };
    case UPDATE_BODY:
      return { title: state.title, body: action.payload, color: state.color };
    case UPDATE_COLOR:
      return { title: state.title, body: state.body, color: action.payload };
    default:
      return state;
  }
}
