import React, { Component } from 'react';

///Assets
import './styles.css';
//UI
import AlertRemove from './../../alerts/index';

export class ButtonForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            type : this.props.type !== null ? this.props.type : 'create',

        }
    }
    render() {

        let arrayCreate = ["green darken-2","Crear","send"];
        let arrayBtn = [
            {
                type:'create',
                className: "green darken-2",
                text: "Crear ",
                icon: "send",
                id: "btnCreate"
            },
            {
                type:'edit',
                className: "lime darken-2",
                text: "Modificar ",
                icon: "edit",
                id: "btnEdit"
            },
        ]

            if (this.state.type === 'create') {
                return (
                        <div className="container__btn--form">
                            <a
                                className={`waves-effect ${arrayBtn[0].className} btn-flat btn--form`}
                                onClick={this.props.onClick}
                                id={arrayBtn[0].id}
                            >
                                {arrayBtn[0].text}
                                <i className="material-icons">
                                    {arrayBtn[0].icon}</i>
                            </a>
                        </div>
                )
                
            }

            if (this.state.type === 'edit') {
                return (
                    <div className="container__btn--form">
                        <a
                            className={`waves-effect ${arrayBtn[1].className} btn-flat btn--form`}
                            onClick={this.props.onClick}
                            id={arrayBtn[1].id}
                        >
                            {arrayBtn[1].text}
                            <i className="material-icons">
                                {arrayBtn[1].icon}</i>
                        </a>
                    </div>
                )

            }

            else return null;
      
    }
}

/**
 * Este componente maneja los botones que serán renderizados en el Card.
 * ##PROPS
 * 
 * 1.title => String: El titulo del recurso.
 * 2.handleEdit => function: El manejador del boton editar.
 * 3.handleDelete => function: El manejador del boton ELIMINAR.
 * 
 */
export class ButtonShowCard extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            <div key={1} className="card-options">
                <a name={this.props.title} onClick={this.props.handleEdit} className="lime ligthen-2 btn"><i className="material-icons">edit</i> </a> <AlertRemove name={this.props.title} handleDelete={this.props.handleDelete} />
            </div>
            
        )
    }
}