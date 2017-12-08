import React, { Component } from 'react';

import CircularProgress from 'material-ui/CircularProgress';


/**
 * Progress Circle, this Component is a Management of Progress. 
 * This receives two params : 
 * Active: 
 * size: 
 */

export  class  ProgressCircle extends Component {
    constructor(props){
        super(props);

        this.state = {
            active: this.props.active,
            size: (this.props.size) ? this.props.size : 500
        }
    }

    componentWillReceiveProps(nextProps){
        console.log('Next props de ProgressCircle');
        this.setState(
            {
                active : nextProps.active
            }
        );
    }

    render() {
        return (
            <div className={(this.state.active) ? 'center' : 'hide'}>
                <CircularProgress size={this.state.size} thickness={3} />
            </div>
        );
    }
}