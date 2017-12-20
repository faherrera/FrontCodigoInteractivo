import React from 'react';

/**
 * FormMessage => Componente que recibe un array de los mensajes, y aparte filtra los que dicen OK.
 * {props} messages => Recibe un array. 
 */
export class FormMessage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            color: props.color != null ? props.color : 'blue',
            messages: props.messages != null ? props.messages : [],
            count: 0

        }
    }

    componentDidMount() {
       
    }
    componentWillReceiveProps(nextProps) {
        console.log('Fue actualizado');
        console.log(nextProps.messages);

        this.setState(
            { messages: nextProps.messages }
        );
    }

    
    render() {

        let mensajes = this.state.messages;
        return (
            <ul >
                <li>
                    <div 
                        className={(this.state.messages.length > 0) ? `collapsible-header red darken-4 white-text` : `hide` }
                        // className="collapsible-header red darken-4 white-text"
                        >
                        <i className="material-icons">info</i>
                        Mensajes
                    </div>
                        <ul >
                            {   
                            (this.state.messages != undefined) ? 
                                this.state.messages.map((value, index) => {
                                    if (value != "OK") {

                                        return <li className="red darken-4 white-text" key={index}> {value} </li>
                                    }
                                }) 
                            : null
                            }
                        </ul>
                </li>
            </ul>
        );
    }
}