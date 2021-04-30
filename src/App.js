import logo from './logo.svg';
import './App.css';
import React, { Component} from 'react';
import {CardList} from './components/card-list/card-list.component'

class App extends Component {
  constructor(){
    super();
    this.state = {
      string : 'Hello Maher',
      monsters : [
    
      ]
    }
  }
  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
    // const saje = fetch('http://jsonplaceholder.typicode.com/users')
    // saje.then(response => response.json())
    // .then(users => this.setState({monsters:[{name:'Maher'}]}) )
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
              <CardList cubaan='saje2' monsters={this.state.monsters}>
                {/* {this.state.monsters.map(monster => <p>{monster.name}</p>)} */}
              </CardList>
            {this.state.string}
            </p>
            <p>
            {/* {this.state.monsters.map(monster => <p>{monster.name}</p>)} */}
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
