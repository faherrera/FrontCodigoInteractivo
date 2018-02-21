import React, { Component } from 'react';

import './assets/sass/materialize.css';


//Lay Components
  import AdminLayout from './layouts/admin/adminLayout';
  import GeneralLayout from './layouts/general/generalLayout';
  import NoNavLayout from './layouts/nonav/';

class App extends Component {

  componentWillMount(){
    console.log(this.props);
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
