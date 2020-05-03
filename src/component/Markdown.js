import React, { Component } from 'react';
import { FormGroup, FormText } from 'reactstrap';

class Markdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: '',
    };
  }

  updateMarkdown = (markdown) => {
    this.setState({
      markdown,
    });
  };

  render() {
    return (
      <div>
        <FormGroup>
          <input
            placeholder='Enter Text'
            value={this.state.markdown}
            onChange={(event) => this.updateMarkdown(event.target.value)}
          />
          <div></div>
        </FormGroup>
        <div>
          <h1>Markdown Output</h1>
          <FormText>
            <li>{this.state.markdown}</li>
          </FormText>
        </div>
      </div>
    );
  }
}

export default Markdown;
