import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';
import './style/app.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'JonLem'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

ReactDOM.render(
  (
    <App />
  ),
  document.getElementById('app')
);
