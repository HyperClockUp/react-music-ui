import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
// import logo from '../../img/logo.svg';
import './App.css';
// import SearchInput from '../SearchInput/index';
import NavigationBar from '../NavigationBar/index';
import TestComponent from '../TestComponent/index';
import Home from '../Home/index'
import Music from '../Music/index'
import MusicPlayer from '../MusicPlayer/index'

const tags = [
    {
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
            <div className='app-container'>
                <Router>
                    <NavigationBar tags={tags}/>
                    <Route path='/' exact component={Home}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/community' component={TestComponent}/>
                </Router>
                <MusicPlayer ref="musicPlayer"/>
            </div>
        );
    }
}

export default App;
