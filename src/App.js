import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  //State is an JS object used to hold the Reactive data 
  state = {
      person:[
        { name:"Maxx",age:"12" },
        { name:"Dolly",age:"13" },
        { name:"Shean",age:"14" }
      ]
  }
  //Its a variable for CLick handler

  onClickHandler = ()=>{
    console.log("Clcik Handler ! ")
    this.setState({
      person:[
        { name:"Maxx",age:"18" },
        { name:"Dolly",age:"13" },
        { name:"Harry",age:"14" }
      ]
    });
  }
  
  render() {
    return (
      <div className="App">
        <h1>Hi , This is React Js project</h1>
        <p className="App-p">This is Not HTML , rather its JSX</p>
        <p className="App-example"> ********Example of passing data from RXS to Person component by hardcoding ***</p>
        <Person name="Naman" age="3"/>
        <Person name="Nirakar" age="37"/> 
        <Person name="Bagmita" age="32"> I am looking for Project </Person>
        <Person name="Filu" age="35"> I am sataying in Bhubaneswar </Person> 
        <p className="App-example"> ******** Example of passing data from State Object ***</p>
        <button onClick={this.onClickHandler}>Switch Me</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}> State object 1 </Person>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}>State object 2</Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}/> 

      </div>
    );
  }
}

export default App;
