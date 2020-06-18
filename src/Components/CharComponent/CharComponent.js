import React from 'react';

const CharComponent = (props) => {
    let style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    };

    return (
        <div style = { style }>
            { props.text }
        </div>
    )
};

export default CharComponent;