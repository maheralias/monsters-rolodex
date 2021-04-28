import logo from './logo.svg';
import './App.css';
import React, { Component, PropTypes} from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      string : 'Hello Maher'
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload. 
            have i succeeded?
            <p>
            {this.state.string}
            </p>

            <button onClick ={() => this.setState({string:'Assalamualaikum itu lebih baik...'})}>
              Click Me
            </button>
          </p>
          
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  } 
}

export default App;
