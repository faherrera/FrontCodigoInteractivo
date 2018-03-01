import React, { Component } from 'react';

//Validations.
import { isEmpty, inputValidate, inputInvalidate } from "./../validation";

//Config.
import { Response } from "./../config";



export default class TextAreaDefault extends Component {

    constructor(props) {
        super(props);


        this.state = {
            limitChar: props.limitChar || 800,
            id: props.id || 'textareaCourse',
            label: props.label || 'Label Text',
            value: props.value || '',
            isValidate: false,
            style: {},
            required: props.required ||false,
            status: !props.required ? true : false
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.value != null ? nextProps.value : '',

        });
    }

    handleChangeValue(e) {
        if (this.isValidate(e.target.value)) {
            console.log('====================================');
            console.log(e.target.value);
            console.log('====================================');
            return this.setState({
                value: e.target.value,
                isValidate: true,
                status: true
            });
        } else {
            return this.setState({
                isValidate: false,
                status: false,
            });

        }


    }

    isValidate(string) {

        if (string.length <= this.state.limitChar) {
            return (this.state.required) ? ((string.length > 0) ? true : false) : true;
        }
        return false;
    }

    getValue() {
        let _response = new Response();

        if (this.state.status) {

            _response.status = true;
            _response.message = "OK";
            _response.value = this.state.value;

        } else {
            _response.message = "No valido el textarea.";

        }
        return _response;

    }

    render() {

        return (
            <div className="input-field" data-name={this.props.dataName}>
                <textarea
                    className="materialize-textarea textarea-400"
                    id={this.state.id}
                    type="text"
                    onChange={this.handleChangeValue.bind(this)}
                    value={this.state.value} />

                <label htmlFor={this.state.id}>{this.state.label}
                    {this.state.required ? '(**)' : null}</label>

                <div className="chip right">
                    {this.state.value.length} / {this.state.limitChar}
                    <i className="material-icons verticalAlign">info</i>
                </div>

            </div>
        );
    }
}
