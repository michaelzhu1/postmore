import React from "react";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      color: "rgb(246, 150, 161)",
      addDisabled: true
    };
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateColor = this.updateColor.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  openModal() {
    this.props.updateModal(true);
  }

  closeModal() {
    this.props.updateModal(false);
    this.setState({
      title: "",
      body: "",
      color: "rgb(246, 150, 161)",
      addDisabled: true
    });
  }

  updateTitle(e) {
    this.setState({ title: e.target.value });
    this.checkActive();
  }

  updateBody(e) {
    this.setState({ body: e.target.value });
    this.checkActive();
  }

  updateColor(color, e) {
    e.persist();
    this.setState({ color: color });
    this.removeClass("color-outline");
    e.target.classList.add("color-outline");
    if (this.props.type === "save") {
      this.checkActive();
    }
  }

  removeClass(classname) {
    const elems = document.querySelectorAll(`.${classname}`);
    elems.forEach(ele => {
      ele.classList.remove(classname);
    });
  }

  checkActive() {
    const { note } = this.props;
    const { title, body, color } = this.props.note;
    const { type, id } = this.props.modal;
    if (type === "save") {
      if (
        note[id].body === body &&
        note[id].title === title &&
        note[id].color === color
      ) {
        this.setState({
          addDisabled: true
        });
      } else {
        this.setState({
          addDisabled: false
        });
      }
    } else if (
      type === "add" &&
      this.state.title.length + this.state.body.length > 0
    ) {
      this.setState({
        addDisabled: false
      });
    } else {
      this.setState({
        addDisabled: true
      });
    }
  }

  handleSubmit(e) {
    const { addNote, updateNote } = this.props;
    e.preventDefault();
    if (this.props.modal.type === "add") {
      addNote(this.state);
    } else if (this.props.modal.type === "save") {
      const title =
        this.state.title === ""
          ? this.props.note[this.props.modal.id].title
          : this.state.title;
      const body =
        this.state.body === ""
          ? this.props.note[this.props.modal.id].body
          : this.state.body;
      const color =
        this.state.color === "rgb(246, 150, 161)"
          ? this.props.note[this.props.modal.id].color
          : this.state.color;
      updateNote(
        { title: title, body: body, color: color },
        this.props.modal.id
      );
    }
    this.setState({
      title: "",
      body: "",
      color: "rgb(246, 150, 161)",
      addDisabled: true
    });
    this.closeModal();
  }

  deleteNote() {
    this.props.deleteNote(this.props.modal.id);
    this.closeModal();
    this.setState({
      addDisabled: true
    });
  }

  render() {
    if (this.props.modal.isOpen === false) {
      return null;
    }

    let backdropStyle = {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: "0px",
      left: "0px",
      zIndex: "9998",
      background: "rgba(0, 0, 0, 0.3)"
    };

    const { id, type } = this.props.modal;
    const { note } = this.props;
    let title = note[id] ? note[id].title : this.state.title;
    let body = note[id] ? note[id].body : this.state.body;
    let color = note[id] ? note[id].color : this.state.color;
    if (color === "" && type === "add") {
      color = this.state.color;
    } else if (type === "save") {
      color = this.state.color;
    }
    let saveColor = this.state.addDisabled ? "#a2d8dc" : "#57b8c0";

    if (this.props.modal.type === "delete") {
      return (
        <div className="modal">
          <div className="modal-content delete-modal">
            <div className="delete-top">
              <span>Delete Note</span>
            </div>
            <div className="delete-mid">
              <p>Are you sure you want to delete this note?</p>
            </div>
            <div className="delete-bot">
              <button
                className="delete-cancel"
                onClick={() => this.closeModal()}
              >
                Cancel
              </button>
              <button className="delete-btn" onClick={this.deleteNote}>
                Delete
              </button>
            </div>
          </div>
          {!this.props.noBackdrop && (
            <div
              className={this.props.backdropClassName}
              style={backdropStyle}
              onClick={e => this.closeModal()}
            />
          )}
        </div>
      );
    }

    return (
      <div className="modal">
        <div className="modal-content">
          <div className="note-color" style={{ backgroundColor: color }} />
          <div className="modal-form">
            <div className="color-options">
              <button
                className="btn-color btn-color-red color-outline"
                onClick={e => this.updateColor("rgb(246, 150, 161)", e)}
              />
              <button
                className="btn-color btn-color-green"
                onClick={e => this.updateColor("rgb(168, 233, 199)", e)}
              />
              <button
                className="btn-color btn-color-orange"
                onClick={e => this.updateColor("rgb(250, 212, 159)", e)}
              />
              <button
                className="btn-color btn-color-blue"
                onClick={e => this.updateColor("rgb(159, 191, 249)", e)}
              />
            </div>
            <div className="input-fields">
              <input
                type="text"
                placeholder="Untitled"
                defaultValue={title}
                onChange={this.updateTitle}
                className="title-field"
              />
              <textarea
                type="text"
                placeholder="Just start typing here"
                onChange={this.updateBody}
                defaultValue={body}
                className="body-field"
              />
            </div>
            <div className="modal-bot">
              <button
                type="button"
                className="cancel-btn-modal"
                onClick={() => this.closeModal()}
              >
                Cancel
              </button>
              <button
                type="button"
                className="add-btn-modal"
                style={{ backgroundColor: saveColor }}
                disabled={this.state.addDisabled}
                onClick={this.handleSubmit}
              >
                {type}
              </button>
            </div>
          </div>
        </div>
        {!this.props.noBackdrop && (
          <div
            className={this.props.backdropClassName}
            style={backdropStyle}
            onClick={e => this.closeModal()}
          />
        )}
      </div>
    );
  }
}

export default Modal;
