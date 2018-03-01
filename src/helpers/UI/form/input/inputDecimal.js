import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { validationDecimal} from './../validation';
import { Input } from 'react-materialize';

export default class InputDecimal extends Component {

    constructor(props){
        super(props);

        this.state = {
            value : props.value || "0.0",
        }
    }

    handleChange(e){
        let value = e.target.value;

       if (validationDecimal(value) || !value) {
           

            this.setState({
                value : value,
            });
       }
    }

    getValue(){
        let response = {};

        return response = {
            status: true,
            value: this.state.value || "0.0",
            message: "OK"
        }
    }
    render() {
        return (
            <Input placeholder="Ejemplo : 55.4" label="Precio del curso" value={this.state.value} onChange={this.handleChange.bind(this)}/>
        );
    }
}


InputDecimal.propTypes = {
    value: Proptypes.any,

}