import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submitted: false
    }

    componentDidMount () {
        console.log(this.props);
    }

    postSubmitHandler = () => {
        const post = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        };

        axios.post('/posts', post)
            .then(response => {
                console.log(response.data);
                // this.setState({ submitted: true })

                // this.props.history.push('/posts');

                this.props.history.replace('/posts');

                // the history prop is available in every component wrapped by the BrowserRouter component
                // we can receive history obj here in out props
                // it contains a push method which allows us to push a new page
                // Technically, push pushes this page onto the stack, so if we click the back btn we go back to the previous page
                // Whereas, redirect replaces the current page, you can go back but you wont go back to the prev page
                // because redirect replaces the current page on the stack, it doesnt oush a new one
                // We could reolace using the history prop by using the replace keyword

            }).catch(err => {
                console.log(err);
            })

    }
    render () {
        let redirect = null; // this is a variable that will contain the component

        if (this.state.submitted) { // If this true i.e it has made a post req and has submitted data from the new post component 
            // then set the redirect variable to the redirect component
            redirect = <Redirect to="/posts" />
        }

        return (
            <div className="NewPost">
                {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postSubmitHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;