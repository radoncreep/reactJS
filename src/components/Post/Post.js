import React from 'react';
import { withRouter } from 'react-router-dom'

import './Post.css';

const post = (props) => {
    // console.log(props ); // this works because this executed like how componentDidMont is executed when the page is rendered
    return (
        <article className="Post" onClick={props.clicked}>
            <h1>{props.title}</h1>
            <div className="Info">
                <div className="Author">{props.author}</div>
            </div>
        </article>
    )
};

export default withRouter(post);