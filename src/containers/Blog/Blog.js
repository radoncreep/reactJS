import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from '../Posts/Posts';
// import NewPost from '../NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
    return import ('../NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true
    }
    render () {
  
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul> 
                            {/* NavLink has a special styling attached to it so it is used instead of Link in some cases */}
                            <li><NavLink 
                                to="/posts" 
                                exact 
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}
                                >Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true' // allows us to use query params
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>}/>
                <Route path="/" exact render={() => <h1>Home 2</h1>}/> */}

                {/* Components needs to be a reference to our function or class */}
                <Switch> 
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                    <Route path="/posts" component={Posts} /> 

                    {/* <--------- Handling 404 pages ----------> */}
                    <Route render={() => <h1>Not found</h1>} />
                    
                    {/* if you use this outside a switch statement, from cant be specified */}
                    <Redirect from="/" to="/posts"/>
                    {/* Specifies where you want to redirect to
                    the path in the to attr has a route component that renders a content from a component */}
                    {/* it doesnt render content it just changes the URL so that we can reach another route where we render content */}
                </Switch>
            </div>
        );
    }
}

export default Blog;