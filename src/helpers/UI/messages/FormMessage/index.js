import React from 'react';

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
                    <div className={(this.state.messages == undefined || this.state.messages) ? `hide` : `collapsible-header red darken-4 white-text`}>
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