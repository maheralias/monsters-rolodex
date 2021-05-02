import logo from './logo.svg';
import './App.css';
import React, { Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor(){
    super();
    this.handleClick2= this.handleClick1.bind(this);
    this.state = {
      string : 'Hello Maher',
      searchField : '',
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

  handleClick1(){
    console.log('Button 1 Clicked')
  }
  handleClick3 = () => {
    console.log('Button 3 Clicked')
  }
  
  
  render() {
    const { searchField, monsters} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
            Edit <code>src/App.js</code> and save to reload. 
            <button onClick={this.handleClick1()}>CLick 1</button>
            <button onClick={this.handleClick1}>CLick 2</button>
            <button onClick={this.handleClick2}>CLick 3</button>
            <button onClick={this.handleClick3}>CLick 4</button>

            {/* <input type='search' placeholder='Search Monster' onChange={e=>this.setState({searchField:e.target.value})}/> */}
            <SearchBox placeholder='Search Monster' handleChange={e=>this.setState({searchField:e.target.value})}></SearchBox>
            <p>
              <CardList cubaan='saje2' monsters={filteredMonsters}>
                {/* {this.state.monsters.map(monster => <p>{monster.name}</p>)} */}
              </CardList>
            {this.state.string}
            </p>
            <p>
            {/* {this.state.monsters.map(monster => <p>{monster.name}</p>)} */}
            

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
