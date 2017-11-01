import React, { Component } from 'react';

export class ErrorMessage extends Component {
    constructor(props){
        super(props);

        this.state = {
            messageError : (this.props.messageError != null) ? this.props.messageError : []//Poner para recibir el prop de mess
        }
    }

    componentWillReceiveProps(nextProps){
        console.log('Fue actualizado');
        console.log(nextProps.messageError);
        this.setState(
            {messageError : [...nextProps.messageError]}
        );
    }

    render()
    {
        // let content = 
        console.log(this.state.messageError.length);
            return <ul className="red accent-3"> {this.state.messageError.map((value,index) => 
            {
                if (value != "OK") {
                    
                    return <li key={index}> {value} </li>
                }

            })} </ul>;
            
    }
}