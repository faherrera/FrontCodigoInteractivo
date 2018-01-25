import React, { Component } from 'react';

//Validations.
import { isEmpty, validationEmail,inputValidate, inputInvalidate } from "./../validation";

//Config.
import { Response } from "./../config";

/**
 * Input Email, para ingresar y validar emails.
 * {Params} =>
 * 1. placeholder => El place o hint.
 * 2. id => Identificador.
 * 3. label => Titulo label del input
 * 4. value => El valor es el que tomará cuando se cambie, tambien es el que se cargará en caso de EDIT.
 * 5. disabled => Saber si estará desabilitado, en el caso de los codigos obligatorios por ej.
 * 6. status => Estado, es el que se evaluará cuando se responda.
 * 
 * Functions => 
 * 1. GetValue => Es el valor al que se accederá via REFS, en el se tomará una response con los valores.
 * 
 * Responses =>
 * - Es la que tendrá los valores para chequear. Estos son:
 *      1. status => Estado que tendrá, en caso de ser false se agregará un mensaje, si es true el valor.
 *      2. value => Valor agregado en caso de que status sea true 
 *      3. message=>    Mensaje que se agrega en caso de que sea status false.
 * 
 * ##Ejemplo
*   <InputEmail
        label="Email"
        placeholder="Example: cdaud777@gmail.com"
        required={true}
        ref="emailSign"
        value={this.state.resource.TitleResource}
    />
 *   
 */
export class InputEmail extends Component {

    constructor(props) {
        super(props);


        this.state = {
            placeholder: props.placeholder ? props.placeholder : 'Ejemplo: codigointeractivo@gmail.com',
            id: props.id ? props.id : 'email',
            label: props.label ? props.label : 'Email',
            value: props.value ? props.value : '',
            isValidate: false,
            style: {},
            required: props.required ? (props.required) ? '(**)' : '' : '',
            status: props.required ? (props.required) ? false : true : false
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
                <input ref="input" style={this.state.style} placeholder={this.state.placeholder} id={this.state.id} type="email" value={this.state.value} onChange={this.handleChangeValue.bind(this)} onBlur={this.handleBlur.bind(this)} />
                <label htmlFor={this.state.id}
                    data-error="Email no valido" data-success="Correctamente validado"
                >{this.state.label} {this.state.required}
                </label>
            </div>
        );
    }

} 