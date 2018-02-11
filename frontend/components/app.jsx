import React from "react";
import HeaderContainer from "./header_container";
import NoteIndexContainer from "./note_index_container";
import ModalContainer from "./modal_container";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderContainer />
        <NoteIndexContainer />
        <ModalContainer />
      </div>
    );
  }
}

export default App;
