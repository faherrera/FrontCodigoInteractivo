import React, { Component } from 'react';

import './styles.css';

/**
 * {Class} GeneralMessageBox
 * 
 * ##PROPS##
 * 1. {string} message. =>> Mensaje que enviará el comp donde estará renderizado GMB. Este se actualizará en cada 
 * actualizacion.
 * 
 * 2.{string} title. =>> Titulo como Header del GMB
 * 
 * ##STATES##
 *  1. {string} message =>> equal to props.message; if its empty, val DEFAULT
 *  2. {string} title =>> equal to props.title; if its empty, val DEFAULT
 */
export class ServerMessageBox extends Component {

    
    constructor(props){
        super(props);

        
        this.state = {
            message : this.props.message,
            title: this.props.title  ? this.props.title : 'Mensaje de Codigo Interactivo',
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            message : nextProps.message
        });
    }

    render() {
        return (
            <section className="message z-depth-2 ">
                <h5 className={`header orange accent-3`}> {this.state.title} </h5>
                <p>
                    {this.state.message === "Network Error" ? "Error de conexion, recargue por favor" : this.state.message}
                </p>
                
                <button 
                    onClick={this.props.onClick}
                    className="waves-effect white btn black-text"> <i className="material-icons large" >replay</i> </button>
            </section>
        );
    }
}