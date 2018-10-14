import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

class App extends React.Component {
  state = {
    notes: []
  };

  handleAddNote = text => {
    this.setState(prevState => ({
      notes: prevState.notes.concat(text)
    }));
  };

  render() {
    return (
      <div className="container">
        <NewNote onAddNote={this.handleAddNote} />
        <NoteList notes={this.state.notes} />
      </div>
    );
  }
}

class NewNote extends React.Component {
  state = {
    text: ""
  };

  render() {
    const { onAddNote } = this.props;
    const { text } = this.state;
    return (
      <div className="new-note">
        <input
          type="text"
          className="new-note__input"
          placeholder="Digite sua nota aqui..."
          value={text}
          onChange={event => {
            this.setState({
              text: event.target.value
            });
          }}
          onKeyPress={event => {
            if (event.key === "Enter") {
              onAddNote(event.target.value);
              this.setState({
                text: ""
              });
            }
          }}
        />
      </div>
    );
  }
}

const NoteList = ({ notes }) => (
  <div className="note-list">
    {notes.map(note => (
      <div className="note">{note}</div>
    ))}
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
