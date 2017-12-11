import React, { Component } from 'react';

export class ListMessage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messageError: (this.props.messageError != null) ? this.props.messageError : []//Poner para recibir el prop de mess
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('Fue actualizado el LIST MESSAGE');
        console.log(nextProps);

        if (nextProps.messageError != undefined && nextProps.messageError.length > 0) {
            this.setState(
                { messageError: [...nextProps.messageError] }
            );
            
        }
    }

    render() {
        return <ul className="red accent-3"> {this.state.messageError.map((value, index) => {
            if (value != "OK") {

                return <li key={index}> {value} </li>
            }

        })} </ul>;

    }
}