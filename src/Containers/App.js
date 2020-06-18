import React, { Component } from 'react';
import './App.css';
import Persons from '../Components/Persons/Persons';
import Validation from '../Components/Validaton/Validation';
import Cockpit from '../Components/Cockpit/Cockpit';
// import CharComponent from '../Components/CharComponent/CharComponent';

class App extends Component {
  state = {
      persons: [
        { id: 'jfi4j3i', name: "Tony", age: 24, },
        { id: 'fw87egf', name: "Madie", age: 23 },
        { id: 'r9eg83', name: "caleb", age: 19}
      ],
      someOtherReason: "new value for other reason... ",
      showPersons: false,
      userInput: ' ',
      length: 0,
      changedCounter: 0
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  };

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  };

  nameChangeHandler = ( event, id ) => {
    //event is an object and once it is fired off we want to use its target property to get the value of the target element, that is why it is used 
    // console.log(event);
    // console.log(id);
    const personIndex = this.state.persons.findIndex(p => { 
      return p.id === id; //should return true or false, if true the found index will be assign to person
    });
    
    //in order not to mutate the person element in the original state, do this ...
    const person = {
      ...this.state.persons[personIndex]
    };
    //alternative approach
    // const person = Object.assign({}, this.state.person[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
     
    //we cant do this else we will be changing the whole original state to just what persons contain which is an arr of obj
    // this.state.persons = persons;

    this.setState((prevState, props) => {
      return {
          persons: persons,
          changedCounter: prevState.changedCounter + 1
        };
    });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1); //splice at this index, once
    //the element at that index doesn't exist anymore after the splice, so we want to update our state
    this.setState({ persons: persons })
  };

  toggleChangeHandler = () => {
    let doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  };

  inputTextHandler = (event) => {
    let newInput = event.target.value;
    let textLength = newInput.length
    // console.log(textLength);
    this.setState({ 
      userInput: newInput,
      length: textLength
     });
  };

  
  render() {
    let person = null;

    //want to render my list of persons array object by OUTPUTTING LIST
    if (this.state.showPersons) {
      // we dont need the paranthesis cos we are having just one component that is rednering a list
      person = <Persons 
        persons = {this.state.persons} 
        clicked = {this.deletePersonHandler}
        changed = {this.nameChangeHandler} 
      />
    };

    // const character = this.state.userInput.split('').map((ch, index) => {
    //   return <CharComponent text = { ch } key = { index} /> 
    // });   
 
    return (
        <div className= "App"> 
          <Cockpit 
            title = {this.props.appTitle}
            showPersons = {this.state.showPersons}
            persons = {this.state.persons}
            clicked = {this.toggleChangeHandler}
          />

          { person }
          <div>
            <input 
              onChange = {this.inputTextHandler}  
              value= { this.state.userInput }
              />
            <p> {this.state.userInput} </p>
          </div>
          

          <Validation length = { this.state.length } />

          {/* { character } */}
        </div>
    )
  }
};

export default App;






//Can't use this react approach because it's cumbersome
// return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this work'));

//USING STATES INSTEAD OF MUTATING 
// switchNameHandler = (newName) => {
//   console.log("button was clicked");
//   this.state.persons[0].name = 'Maximillian'; YOU CAN'T MUTATE IN A STATE LIKE THIS IN REACT
  
//   this.setState({ 
//     persons: [
//       { name: "Maximallian", age: 24, },
//       { name: "Madie", age: 23 },
//       { name: newName, age: 21}
//     ]
//    });
// };
