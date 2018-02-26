import React, { Component } from 'react';

import './assets/sass/materialize.css';


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
