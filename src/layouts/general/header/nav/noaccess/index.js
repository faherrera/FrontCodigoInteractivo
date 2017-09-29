import React from 'react';

import Login from './login/';
import SignUp from './signup/';

export default class Noaccess extends React.Component{

    render(){
        return(
            <div>
                <Login deviceLoginStyle={this.props.deviceLoginStyle}/>
                <SignUp deviceSignStyle={this.props.deviceSignStyle}/>
            </div>
        )
    }
} 