import React, { Component } from 'react';

//Components Pages.
    import Detail from './detail/';
    import Offer from './offer/';


//UI
    //OWN
    //import {ProgressCircle} from './../../../helpers/UI/misc/';

export default class Courses extends Component {
    
    render() {
        
        if(this.props.code) return <Detail code={this.props.code}/>

        return <Offer />
    }
}