import React, { Component } from 'react';

import CircularProgress from 'material-ui/CircularProgress';


/**
 * Progress Circle, this Component is a Management of Progress. 
 * This receives two params : 
 * Active: Indica si está activo o no, puede ser omitido si usamos el render según state del padre.
 * size: Tamaño que ocupará el circulo.
 */

export  class  ProgressCircle extends Component {
    constructor(props){
        super(props);

        this.state = {
            active: props.active || true,
            size: (props.size) ? props.size : 500
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState(
            {
                active : nextProps.active
            }
        );
    }

    render() {
        return (
            <div className={(this.state.active) ? 'center' : 'hide'}>
                <CircularProgress size={this.state.size} thickness={3} style={{padding:'1rem'}}/>
            </div>
        );
    }
}


export const Progressing = ({size = 300}) => {
    return (
        <div style={{ width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ProgressCircle active={true}
             size={size} />
        </div>
    )
}