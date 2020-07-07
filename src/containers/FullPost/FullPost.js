import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidMount() {
        // console.log(this.props.match.params.id);
        // console.log(this.props.postId)
        this.loadedPost() 
    }

    componentDidUpdate() {
        // You need to handle changes in compDidUpdate if the commp in genral is loaded through routing
        // because the router will not unmount the old component and mount the same copponent again with different data
        // It will resue the old comp and just adjust the route parameter
        // so this life cycle is used to update data in a component
        // which wiil be called becos the props changed, you receive a new props and with match obj and params obj
        this.loadedPost()
    }

    loadedPost() {
        if (this.props.match.params.id) {
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id) ) {
                axios.get('/posts/' + this.props.match.params.id)
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
        if (this.props.match.params.id) {
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