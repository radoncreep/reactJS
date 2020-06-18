import React, { Component } from 'react';
import Auxillary from '../../hoc/Auxillary';
import withClass from '../../hoc/withClass';


class Person extends Component {
    render() {
        console.log('[Person.js] rendering... ');
        return (
            <Auxillary>
                <p onClick= {this.props.click}>I'm {this.props.name} and I am {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange= { this.props.changed } value = { this.props.name }/>
            </Auxillary>
        )
    };
};

export default withClass(Person); //wraps this component and its class into the withClass component


 // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }