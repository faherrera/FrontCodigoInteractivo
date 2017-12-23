import React, { Component } from 'react';

//Validations.
import { isEmpty, validationNumber, validationEmail, inputValidate, inputInvalidate } from "./../validation";

//Config.
import { Response } from "./../config";


export class InputNumber extends Component {

    constructor(props) {
        super(props);


        this.state = {
            placeholder: this.props.placeholder != null ? this.props.placeholder : '555',
            id: this.props.id != null ? this.props.id : 'number',
            label: this.props.label != null ? this.props.label : 'Number input',
            value: this.props.value != null ? this.props.value : '',
            isValidate: false,
            style: {},
            disabled: props.disabled ? true : false,
            required: this.props.required != null ? (this.props.required) ? '(**)' : '' : '',
            status: this.props.required != null ? (this.props.required) ? false : true : false,
            min: props.min ? props.min : 3,
            max: props.max ? props.max : 12
        }

        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.value != null ? nextProps.value : '',

        });
    }

    handleBlur(e) {

        if (this.state.required) {
            if (isEmpty(e.target.value)) {
                if (validationNumber(e.target.value)) {
                    
                    if (e.target.value.length <= this.state.max && e.target.value.length >= this.state.min ) {

                        this.setState({
                            isValidate: true,
                            style: inputValidate,
                            status: true
                        })
                    
                    }

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

    handleChangeValue(e) {
        if (this.numberValidate(e.target.value)) {
            if (e.target.value.length <= this.state.max) {
                
                this.setState({
                    value: e.target.value
                });
            }
        }
    }

    numberValidate(string) {
        var patron = /^\d*$/;


        return (!string.search(patron)) ? true : false;    //Retorna true si es solo numerico.
    }

    getValue() {

        let _response = new Response(); //Instancio una respuesta.

        if (this.state.value.length > this.state.max || this.state.value.length < this.state.min){
            _response.message = `El numero de caracteres debe estár entre ${this.state.min} y ${this.state.max}`;

            return _response;
        }
       

        if (this.state.status || this.state.value !== '') { //Si es correcto enviarlo.
            _response.status = true;
            _response.value = this.state.value;
            _response.message = "OK";

            return _response;   //Devuelvo el dato valido.
        }


        _response.message = "No valido el " + this.state.label;

        return _response;

    }
    render() {
        return (
            <div
                className="input-field"
            >

                <input style={this.state.style} placeholder={this.state.placeholder} disabled={this.state.disabled} id={this.state.id} type="text" value={this.state.value} onChange={this.handleChangeValue} onBlur={this.handleBlur} />
                <label
                    htmlFor={this.state.id}
                >
                    {
                        (!this.state.disabled) ? (this.state.label + " " + this.state.required) : null
                        // {this.state.label} {this.state.required}
                    }
                </label>
            </div>
        );
    }

} 