import React from 'react';

export class GenericMessage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            color: this.props.color != null ? this.props.color : 'blue',
            messages: this.props.messages != null ? this.props.messages : [],
            count: 0

        }
    }

    componentDidMount() {
       
    }
    componentWillReceiveProps(nextProps) {
        console.log('Fue actualizado');
        console.log(nextProps.messages);

        this.setState(
            { messages: [...nextProps.messages] }
        );
    }

    
    render() {

        let mensajes = this.state.messages;
        return (
            <ul >
                <li>
                    <div className={(!this.state.messages.length > 0) ? `hide` : `collapsible-header red darken-4 white-text`}>
                        <i className="material-icons">info</i>
                        Mensajes
                    <span className="new badge blue"> </span></div>
                        <ul>
                            {
                                this.state.messages.map((value, index) => {
                                    if (value != "OK") {

                                        return <li key={index}> {value} </li>
                                    }
                                })
                            }
                        </ul>
                </li>
            </ul>
        );
    }
}