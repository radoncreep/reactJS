import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidUpdate() {
        // console.log(this.props.postId)
        if (this.props.postId) {
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.postId !== this.props.postId) ) {
                axios.get('/posts/' + this.props.postId)
                .then(response => {
                    // console.log(response.status)
                    this.setState({ loadedPost: response.data })
                }).catch(error => {
                    console.log(error);
                })
            } 
        }
    }

    deletePostHandler = (id) => {
        console.log(`${id} post id --------`)
        axios.delete('/posts/' + id)
            .then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error);
            }
        );
    }
    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if (this.props.postId) {
            post = <p style={{textAlign: 'center'}}>Loading...!</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick= {() => this.deletePostHandler(this.props.postId)}
                            className="Delete">Delete
                        </button>
                    </div>
                </div>
    
            );  
        };
        
        return post;
    }
}

export default FullPost;


// WHY WE HAVE TO FETCH DATA FROM THE SERVER TO LOAD A POST USING ITS ID 

// so here we passed id as a JSX Attribute from the blog container and 
// we are passing the id here but that's the only property this function gets, the id 
// Juat doing this wont be able to load the post object with that id here
// if the id is id: 023, we cant say id.title, that would be like 023.?? 