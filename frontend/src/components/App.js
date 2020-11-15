import React, { Component } from 'react';
import { render } from 'react-dom';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h2>React app</h2>;
  }
}

render(<App />, document.getElementById('app'));
