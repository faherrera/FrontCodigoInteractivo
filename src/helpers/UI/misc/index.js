import React, { Component } from 'react';

import CircularProgress from 'material-ui/CircularProgress';

export  class  ProgressCircle extends Component {
    constructor(props){
        super(props);

        this.state = {
            active: this.props.active
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
                <CircularProgress size={500} thickness={3} />
            </div>
        );
    }
}