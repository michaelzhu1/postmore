import React from "react";

class NoteIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.note.title,
      body: this.props.note.body,
      color: this.props.note.color
    };
    this.editNote = this.editNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  editNote() {
    this.props.updateModal(true, "save", this.props.id);
    this.props.updateTitle(this.props.note.title);
    this.props.updateBody(this.props.note.body);
    this.props.updateColor(this.props.note.color);
  }

  removeNote() {
    this.props.updateModal(true, "delete", this.props.id);
  }

  render() {
    const { color, title, body, id } = this.props.note;
    return (
      <div className="note">
        <div className="note-color" style={{ backgroundColor: color }} />
        <div className="title-section">
          <span className="note-top">
            <div className="title">{this.props.note.title}</div>
            <span className="icons">
              <i
                className="fa fa-pencil"
                aria-hidden="true"
                onClick={this.editNote}
              />
              <i
                className="fa fa-trash"
                aria-hidden="true"
                onClick={this.removeNote}
              />
            </span>
          </span>
        </div>
        <textarea
          readOnly
          name="noteContent"
          className="body-section"
          value={body}
        />
      </div>
    );
  }
}

export default NoteIndexItem;
