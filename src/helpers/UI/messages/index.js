import React, { Component } from 'react';

import './styles.css';

export class ListMessage extends Component {

    constructor(props){
        super(props);

        this.state = {
            message : this.props.message
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
                <h5 className="header blue lighten-1"> Mensaje del listado </h5>
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