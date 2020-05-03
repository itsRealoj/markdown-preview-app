import React, { Component } from 'react';

let marked = require('marked');

class Markdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  updateMarkdown(event) {
    this.setState({
      input: event,
    });
  }

  render() {
    return (
      <div>
        <textarea
          id='editor'
          value={this.state.input}
          onChange={(event) => this.updateMarkdown(event.target.value)}
          placeholder='Enter Markdown Text'>
          {/* some text */}
        </textarea>
        <div>
          <h1>Markdown Preview</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: marked(this.state.input),
            }}></div>
          {/* <div id='preview'>{marked(this.state.input)}</div> */}
        </div>
      </div>
    );
  }
}
export default Markdown;
