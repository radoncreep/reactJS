import React from 'react';

//since this is a stateless component we dont need to import the component class from react

const validation = (props) => {
    let validationMessage = 'Text is long enough';

    if (props.length < 5) {
        validationMessage = 'Text is too short'
    }
    return (
        <div>
             <p> { validationMessage }</p>
        </div>

        //using ternary operator
        // <div>
        //     {
        //         // props.length < 5 ? <p>Text too short</p> : <p>Text long enough</p>
               
        //     }
        // </div>
    );
};

export default validation;