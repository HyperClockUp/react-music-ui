import React, { Component } from 'react';
import logo from '../../img/logo.svg';
import '../css/App.css';
import CommonHeader from '../../components/js/CommonHeader';
import SearchInput from '../SearchInput/index';
import NavigationBar from '../NavigationBar/index';

const tags=['待开发1','待开发2'];
class App extends Component {
  render() {
    return (
      <div>
          <NavigationBar tags={tags}/>
      </div>
    );
  }
}

export default App;
