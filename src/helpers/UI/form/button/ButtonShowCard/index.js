import React, { Component } from 'react';

///Assets
import './../styles.css';
//UI
import AlertRemove from './../../../alerts/index';


/**
 * Este componente maneja los botones que serán renderizados en el Card.
 * ##PROPS
 * 
 * 1.title => String: El titulo del recurso.
 * 2.handleEdit => function: El manejador del boton editar.
 * 3.handleDelete => function: El manejador del boton ELIMINAR.
 * 
 */
export class ButtonShowCard extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div key={1} className="card-options">
                <a name={this.props.title} onClick={this.props.handleEdit} className="lime ligthen-2 btn"><i className="material-icons">edit</i> </a> <AlertRemove name={this.props.title} handleDelete={this.props.handleDelete} />
            </div>

        )
    }
}