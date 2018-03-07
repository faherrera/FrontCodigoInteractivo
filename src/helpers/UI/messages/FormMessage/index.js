import React from 'react';

/**
 * FormMessage => Componente que recibe un array de los mensajes, y aparte filtra los que dicen OK.
 * {props} messages => Recibe un array. 
 */
export class FormMessage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            color: props.color ? props.color : 'red',
            messages: props.messages.length ? props.messages[0] : [],
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

        return (

            <ul  >
                <li>
                    <div 
                        className={(this.state.messages.length > 0) ? `collapsible-header ${this.state.color} lighten-1 white-text` : `hide` }
                        onClick={this.handleToggle.bind(this)}
                        // className="collapsible-header red darken-4 white-text"
                        >
                        <i className="material-icons">info</i>
                        Mensajes 
                    </div>
                    <ul className={(this.state.open) ? null : 'hide'} >
                            {   
                            
                                    
                            (this.state.messages != undefined) ? 
                                this.state.messages.map((value, index) => {
                                    
                                    if (value != "OK") {
                                        if (value == "Network Error") {
                                            return <li style={{ padding: "0 .5rem" }} className= {`${this.state.color} lighten-1 white-text`} key={index}> Error en la conexión, probablemente el servidor esté caido. </li>
                                            
                                        }

                                        return <li style={{ padding: "0 .5rem" }} className={this.state.color+" lighten-2 white-text"} key={index}> {value} </li>

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