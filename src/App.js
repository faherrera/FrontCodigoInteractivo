import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


//Lay Components
  import AdminLayout from './layouts/admin/adminLayout';
  import GeneralLayout from './layouts/general/generalLayout';

class App extends Component {
  render() {
    return (
      <GeneralLayout children={this.props.children}/>
    );
  }
}

export default App;
