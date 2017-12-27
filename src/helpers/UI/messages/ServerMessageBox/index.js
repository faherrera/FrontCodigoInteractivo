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
            message : props.message,
            title: props.title  ? props.title : 'Mensaje de Codigo Interactivo',
            errorServer: props.error || true,
            color: props.color || 'cyan',
            btnText: props.btnText ||'',
            btnIcon:props.btnIcon || 'replay',
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            message : nextProps.message
        });
    }

    render() {
        let classButton = this.state.errorServer ? 'waves-effect white btn black-text valign-wrapper' : 'hide';

        return (
            <section className="message z-depth-2 ">
                <h5 className={`header ${this.state.color} accent-3`}> {this.state.title} </h5>
                
                <p>
                    {this.state.message === "Network Error" ? "Error de conexion, recargue por favor" : this.state.message}
                </p>
                
                <button 
                    onClick={this.props.onClick}
                    className={classButton}
                    style={{display:'flex'}}
                    >{this.state.btnText}<i className="material-icons large" >{this.state.btnIcon}</i> 
                </button>

            </section>
        );
    }
}