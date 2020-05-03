import React, { Component } from 'react';

class Markdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  updateMarkdown = (event) => {
    this.setState({
      input: event,
    });
  };

  render() {
    return (
      <div>
        <textarea
          id='editor'
          value={this.state.input}
          onChange={(event) => this.updateMarkdown(event.target.value)}>
          {/* some text */}
        </textarea>
        <div id='preview'>{this.state.input}</div>
      </div>
    );
  }
}
export default Markdown;
