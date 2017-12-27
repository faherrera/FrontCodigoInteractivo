import React, { Component } from 'react';

//Components Pages.
    import Detail from './detail/';
    import Offer from './offer/';

export default class Courses extends Component {
    constructor(props){
        super(props);

        this.state = {
            code: props.code || 0,

        }
    }

    render() {
        
        if (this.state.code) {
            return (
                <Detail />
            );
        }
        return (
            <Offer />
        );

    }
}