import React, { Component } from 'react';

//Validations.
import { isEmpty, inputValidate, inputInvalidate } from "./../validation";

//Config.
import { Response } from "./../config";

/**
 * Input text, para ingresar y validar texto plato, sean usuarios ,nombres,apellidos etc.
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
* <InputText
            label="Nombre del recurso"
            placeholder="Example: Link al repositorio"
            required={true}
            ref="titleResource"
            value={this.state.resource.TitleResource}
        />
 *   
 */
export class InputText extends Component {

    constructor(props) {
        super(props);


        this.state = {
            placeholder: this.props.placeholder != null ? this.props.placeholder : 'Ejemplo: Place',
            id: this.props.id != null ? this.props.id : 'first_name',
            label: this.props.label != null ? this.props.label : 'Label Text',
            value: this.props.value != null ? this.props.value : '',
            disabled: props.disabled ? true : false,
            isValidate: false,
            style: {},
            required: this.props.required != null ? (this.props.required) ? '(**)' : '' : '',
            status: this.props.required != null ? ((this.props.required) ? false : true) : false
        }
    }

    handleBlur(e) {

        if (this.state.required) {
            if (isEmpty(e.target.value)) {
                this.setState({
                    isValidate: true,
                    style: inputValidate,
                    status: true
                })
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
            _response.message = "OK"; 
            _response.value = this.state.value;

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
        if (nextProps.value != null) {
            this.setState({
                value: nextProps.value != null ? nextProps.value : '',
                status: true,
                isValidate: true,
                style: inputValidate,

            });

        }
    }
    render() {
        return (
            <div className="input-field" {...(this.state.disabled) ? 'disabled' : null}>
                <input style={this.state.style} placeholder={this.state.placeholder} id={this.state.id} type="text" value={this.state.value} onChange={this.handleChangeValue.bind(this)} onBlur={this.handleBlur.bind(this)} />
                <label htmlFor={this.state.id}>{this.state.label} {this.state.required} </label>
            </div>
        );
    }
}