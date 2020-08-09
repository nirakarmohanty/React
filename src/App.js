import React, { Component } from 'react';
import Person from './Person/Person'
import Parent from './Person/Parent'
import './App.css';


class App extends Component {
  //State is an JS object used to hold the Reactive data 
  state = {
    person: [
      { name: "Maxx", age: "12", id: "1" },
      { name: "Dolly", age: "13", id: "2" },
      { name: "Shean", age: "14", id: "3" }
    ],
    showPersonDiv: false
  }
  //Its a variable for CLick handler

  onClickHandler = (newname) => {
    console.log("Clcik Handler ! ")
    this.setState({
      person: [
        { name: newname, age: "18", id: "1" },
        { name: "Dolly", age: "13", id: "2" },
        { name: "Harry", age: "14", id: "3" }
      ]
    });
  }
  //Acccepts event as parameter 
  onChangedHandler = (event) => {
    this.setState({
      person: [
        { name: "Chris", age: "18", id: "1" },
        { name: event.target.value, age: "13", id: "2" },
        { name: "Harry", age: "14", id: "3" }
      ]
    });
  }
  //ANother Handler if name changes 

  onNameChangedHandler = (event, index) => {
    debugger;
    const personIndex = this.state.person.findIndex(pers => {
      return pers.id = index
    })
    const personI = { ...this.state.person[personIndex] }

    personI.name = event.target.value;
    const persons = [...this.state.person]
    persons[personIndex] = personI;
    this.setState({
      person: persons
    })

  }
  togglePersonHandler = () => {
    const toggleProperty = this.state.showPersonDiv;
    this.setState({ showPersonDiv: !toggleProperty });
  }
  removePersonHandler = (personIndex) => {
    //let tempPerson = this.state.person;
    let tempPerson = [...this.state.person];
    tempPerson.splice(personIndex, 1);
    this.setState({ person: tempPerson });
  }

  render() {
    //Inline styling of Button 
    const buttonStyle_1 = {
      backgroundColor: 'White',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      marginRight: '5px'
    };

    const buttonStyle_2 = {
      backgroundColor: 'Green',
      text:'White',
      font: 'inherit',
      border: '1px solid red',
      padding: '8px',
      cursor: 'pointer',
      marginRight: '5px',
       ':hover': {
         backgroundColor: 'lightGreen',
         color: 'white'
       }
    };


    //Elegent way of toggling div 
    let personDiv = null;

    if (this.state.showPersonDiv) {
      personDiv = (
        <div>
          {this.state.person.map((p, index) => {
            return <Person
              click={() => this.removePersonHandler(index)}
              name={p.name}
              age={p.age}
              key={p.id}// Key variable is required here key={index}                
              changed={(event) => this.onNameChangedHandler(event, p.id)}
            />
          }
          )}
        </div>
         );
         buttonStyle_2.backgroundColor='Red';
         buttonStyle_2[':hover']= {
          backgroundColor: 'yellow',
          color: 'black'
        }
    }
    //Applying Css dynamically to Paragraph
    const cssDynamic = [];
    if(this.state.person.length>=2){
      cssDynamic.push('red');
      console.log(cssDynamic.length)
    }
    if(this.state.person.length>=1){
      cssDynamic.push('larger');
      console.log(cssDynamic.length)
    }
    if(this.state.person.length === 0){
      cssDynamic.push('green');
      console.log(cssDynamic.length)
    }
    return (
      
      <div className="App">
        <h1>Hi , This is React Js project</h1>
        <p className="App-p">This is Not HTML , rather its JSX</p>
        <p className="App-example"> ********Example of passing data from RXS to Person component by hardcoding ***</p>
        <Parent name="Naman" age="3" />
        <Parent name="Nirakar" age="37" />
        <Parent name="Bagmita" age="32"> I am looking for Project </Parent>
        <Parent name="Filu" age="35"> I am sataying in Bhubaneswar </Parent>

        <p className="App-example"> ******** Example of passing data from State Object ***</p>

        {/* <button
          style={buttonStyle}
          onClick={this.onClickHandler.bind(this, 'Chris')}>Switch Me</button>
        <button
          className="button-allign"
          onClick={() => this.onClickHandler('Chris !!')}>Click Me</button>

        <Person
          name={this.state.person[0].name}
          age={this.state.person[0].age} > State object 1
        </Person>

        <Person
          name={this.state.person[1].name}
          age={this.state.person[1].age}
          click={this.onClickHandler.bind(this, 'Chris!')}
          changed={this.onChangedHandler}
        >State object 2
        </Person>

        <Person
          name={this.state.person[2].name}
          age={this.state.person[2].age}
        /> */}

        <p className="App-rendering-content"> ******** Rendering Content Conditionally ***</p>
        <p className={cssDynamic.join(' ')}>Applying css dynamically on Person size</p>
        <button
          style={buttonStyle_1}
          onClick={this.togglePersonHandler}>Toggle Me 1</button>

        <button
          style={buttonStyle_2}
          onClick={this.togglePersonHandler}>Toggle Me 2</button>

        <hr className="hr-tag"></hr>
        {
          // this.state.showPersonDiv === true ?
          //   <div>
          //     <Person
          //       name={this.state.person[1].name}
          //       age={this.state.person[1].age}
          //       click={this.onClickHandler.bind(this, 'Chris!')}
          //       changed={this.onChangedHandler}>
          //     </Person>
          //     <Person
          //       name={this.state.person[0].name}
          //       age={this.state.person[0].age} > State object 1
          //     </Person>
          //   </div> : null
          personDiv
        }
        
      </div>
     
    );
  }
}

export default App;
