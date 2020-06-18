import React, { Component } from 'react';
import Person from '../Person/Person';

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // };

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'snapshot' };
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  };


  render() {
    console.log('[Persons.js] rendering... ');

    if (this.props.persons.length <= 2) {
      // classes.push('red');
    };
    if (this.props.persons.length <=1 ) {
      // classes.push('bold');
    };
    
    return (
        this.props.persons.map((person, index) => {
            return <Person 
              click= { () => this.props.clicked(index) } // arrow function automatically returns a single line code
              name = { person.name} 
              age = { person.age }
              key = { person.id } 
              changed = {(event) => this.props.changed(event, person.id )} /> 
          })
    );
  }
  
};

export default Persons;