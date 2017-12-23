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
            count: 0,
            open:true

        }
    }

    
    componentWillReceiveProps(nextProps) {
        console.log('Fue actualizado');
        console.log(nextProps.messages);

        this.setState(
            { messages: nextProps.messages }
        );
    }

    handleToggle(){
        this.setState({
            open: !this.state.open
        });
    }
    render() {

        let mensajes = this.state.messages;
        let numero = this.state.messages.length ? this.state.messages.length : 0;

        return (

            <ul  >
                <li>
                    <div 
                        className={(this.state.messages.length > 0) ? `collapsible-header red darken-4 white-text` : `hide` }
                        onClick={this.handleToggle.bind(this)}
                        // className="collapsible-header red darken-4 white-text"
                        >
                        <i className="material-icons">info</i>
                        Mensajes {numero}
                    </div>
                    <ul className={(this.state.open) ? null : 'hide'}>
                            {   
                            (this.state.messages != undefined) ? 
                                this.state.messages.map((value, index) => {
                                    if (value != "OK") {
                                        if (value == "Network Error") {
                                            return <li className="red darken-4 white-text" key={index}> Error en la conexión, probablemente el servidor esté caido. </li>
                                            
                                        }

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