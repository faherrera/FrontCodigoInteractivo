import React, { Component } from 'react';

///Assets
import './../styles.css';
//UI

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

