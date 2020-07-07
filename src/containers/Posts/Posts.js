import React, { Component } from 'react';

import axios from '../../axios';
import { Route } from 'react-router-dom';
import Post from '../../components/Post/Post';
import FullPost from '../FullPost/FullPost'
import './Post.css';


class Posts extends Component {
    state = {
        posts: [],
    }

    componentDidMount() {
        console.log(this.props);

        axios.get('/posts')
            .then(response => {
                // console.log(response.data);
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                // console.log(updatedPosts);
                this.setState({ posts: updatedPosts });
            }).catch(error => {
                console.log(error);
                // this.setState({ error: true })
            });
    };

    postSelectedHandler = (id) => {
        // Navigating programmatically
        // This is used mostly after a given operation like http req is finished
        // Since we receive the id from each post being passed to this method
        // We could use the method push since the pages on the browser are in a stack which makes it possible for us to go back and forth
        // all methods seen in the console, provided by react router are passed as JSX attributes from the Route component 
        // Rendering a specific component and recieved as properties in the props of that comoponent
        // this.props.history.push('/' + id); as a string
        
        // As an object
        this.props.history.push({pathname: '/posts/' + id});
    }

    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>
        
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    <Post 
                        title={post.title}
                        key={post.id}
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)}
                    />
                )
            })
        }
        
        return (
            // creating a nested route
            <div>
                <section className="Posts">
                    { posts }
                </section>
                {/* Dynamically adding the current path to which the Route component will be rendered in or in our nested route */}
                <Route path={this.props.match.url + '/:id'} component={FullPost}/>
            </div>
        )
    }
}

export default Posts;


// If you have a nested route
// Get the current route using the obj properties provided by the reat-router-dom
// which is parsed to props in the component which is being currently rnedered
// and then use this.props.match.url (if it's a class) to append to the nested routed path
// to create a dynamic route incase the path of the parent component is changed 
// So you wont have to make changes to the paths of every nested route
