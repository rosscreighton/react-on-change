import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changes: [],
    }
  }

  onChange(e) {
    this.setState({
      changes: this.state.changes.concat([e])
    })
  }

  render() {
    return (
      <div>
        <div>Virtual DOM onChange:</div>
        <input type="text" onChange={this.onChange.bind(this)} />
        {this.state.changes.map(c => (
          <div>onChange fired</div>
        ))}
      </div>
    );
  }
}
