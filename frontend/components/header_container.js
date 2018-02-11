import { connect } from "react-redux";
import Header from "./header";
import { updateModal } from "../actions/modal_actions";

const mapDispatchToProps = dispatch => ({
  updateModal: (isOpen, type, id) => dispatch(updateModal(isOpen, type, id))
});

export default connect(null, mapDispatchToProps)(Header);
