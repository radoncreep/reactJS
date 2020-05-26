import React from 'react';
// import ReactDOM from 'react-dom'

const person = (props) => {
    return (
        <div>
            <p onClick= {props.click}>I'm {props.name} and I am {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange= { props.changed } value = { props.name }/>
        </div>
    )
};

export default person; 