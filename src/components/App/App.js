import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import logo from '../../img/logo.svg';
import './App.css';
import SearchInput from '../SearchInput/index';
import NavigationBar from '../NavigationBar/index';
import TestComponent from '../TestComponent/index';

const tags = [{
    name: "首页",
    to: "/"
}, {
    name: "音乐",
    to: "/music"
}, {
    name: "社区",
    to: "/community"
}];

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <NavigationBar tags={tags}/>
                    <Route path='/' exact component={TestComponent}/>
                    <Route path='/music' component={TestComponent}/>
                    <Route path='/community' component={TestComponent}/>
                </Router>
            </div>
        );
    }
}

export default App;
