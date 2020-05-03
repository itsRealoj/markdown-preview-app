import React, { Component } from 'react';
import { FormGroup, FormText } from 'reactstrap';

class Markdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: [],
    };
  }

  handleChange() {
    this.setState({
      markdown: [...this.state.markdown],
    });
  }

  render() {
    return (
      <div>
        <FormGroup controlId='App'>
          <input
            placeholder='Enter Text'
            value={this.state.markdown}
            onChange={this.handleChange.bind(this)}
          />
          <div></div>
        </FormGroup>
        <div>
          <h1>Markdown Output</h1>
          <FormText>{this.state.markdown}</FormText>
        </div>
      </div>
    );
  }
}

export default Markdown;
