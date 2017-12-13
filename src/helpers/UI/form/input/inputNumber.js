import React, { Component } from 'react';

//Validations.
import { isEmpty, validationNumber, inputValidate, inputInvalidate } from "./../validation";

//Config.
import { Response } from "./../config";


export class InputEmail extends Component {

    constructor(props) {
        super(props);


        this.state = {
            placeholder: this.props.placeholder != null ? this.props.placeholder : 'Ejemplo: codigointeractivo@gmail.com',
            id: this.props.id != null ? this.props.id : 'email',
            label: this.props.label != null ? this.props.label : 'Email',
            value: this.props.value != null ? this.props.value : '',
            isValidate: false,
            style: {},
            required: this.props.required != null ? (this.props.required) ? '(**)' : '' : '',
            status: this.props.required != null ? (this.props.required) ? false : true : false
        }
    }

    handleBlur(e) {

        if (this.state.required) {
            if (isEmpty(e.target.value)) {
                if (validationEmail(e.target.value)) {
                    this.setState({
                        isValidate: true,
                        style: inputValidate,
                        status: true
                    })
                } else {
                    this.setState({
                        isValidate: false,
                        style: inputInvalidate,
                        status: false
                    })

                }
            }
            else {
                this.setState({
                    isValidate: false,
                    style: inputInvalidate,
                    status: false
                })

            }
        } else {
            if (e.target.value.trim().length === 0) {
                this.setState({
                    isValidate: true,
                    style: {},
                    status: true
                })
            }
            if (e.target.value.trim().length > 0) {
                this.setState({
                    isValidate: true,
                    style: inputValidate,
                    status: true
                })
            }
        }

    }

    getValue() {

        let _response = new Response(); //Instancio una respuesta.


        if (this.state.status) { //Si es correcto enviarlo.
            _response.status = true;
            _response.value = this.state.value;
            _response.message = "OK"
            return _response;   //Devuelvo el dato valido.
        }

        _response.message = "No valido el " + this.state.label;

        return _response;

    }
    handleChangeValue(e) {
        this.setState({
            value: e.target.value
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.value != null ? nextProps.value : '',

        });
    }
    render() {
        return (
            <div className="input-field" data-name={this.props.dataName} data-validation={this.state.status} >
                <input style={this.state.style} placeholder={this.state.placeholder} id={this.state.id} type="email" value={this.state.value} onChange={this.handleChangeValue.bind(this)} onBlur={this.handleBlur.bind(this)} />
                <label htmlFor={this.state.id}
                    data-error="Email no valido" data-success="Correctamente validado"
                >{this.state.label} {this.state.required}
                </label>
            </div>
        );
    }

} 