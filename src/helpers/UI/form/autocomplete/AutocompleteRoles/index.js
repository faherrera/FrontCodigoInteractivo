import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';

import './styles.css';
import { filterByHisCode } from '../Utils/Filter';



function Response(status = false, value = '', message = '') {
    this.status = status;
    this.value = value;
    this.message = message;
}

const menuProps = {
    desktop: true,
    disableAutoFocus: true,
};

const dataSource = [
    { title: 'Estudiante', value: 1 },
    { title: 'Admin', value: 2 },
];

const dataSourceConfig = {
    text: 'title',
    value: 'value',
};

/**
 * Provide props to be passed into the Menu component.
 */


export default class AutocompleteRoles extends Component {
    constructor(props){
        super(props);

        this.state = {
            value: props.value || 1,
            searchText:'',
            status: props.value ? true :false
        }
    }

    componentDidMount() {
        if (this.state.value) {
            
            let searchText = filterByHisCode(this.state.value, dataSource);

            this.setState({
                searchText: searchText.title || ""
            });
        }
    }
    getValue(){
        let _response = new Response(); //Instancio una respuesta.

        /**
         * En caso de que no tenga valor o sea igual a 0 debo indicar que stats es false.
         */
        if (this.state.value) {
            if (this.state.status) { //Si es correcto enviarlo.
                _response.status = true;
                _response.value = this.state.value;
                _response.message = "OK"
                return _response;   //Devuelvo el dato valido.
            }
            _response.message = this.state.message;

            return _response;
        }
        _response.message = "Debe seleccionar un valor correcto para el rol perteneciente.";

        return _response;
    }

    /**
    * handleUpdate =>>Necesario para setear los valores del input.
    * @param {STRING} searchText => Este es el valorq ue estoy ingresando por el input.
    */
    handleUpdate(searchText) {
        console.log("///////////////////InicioDEBUG === handleUpdate////////////////");
                console.log(searchText)
        console.log("*******************FinalizacionDEBUG === handleUpdate**************");
        
        this.setState({
            searchText
        });
    }

    handleRequest(chosenRequest, index) {
        console.log('=============UPDATING=================');

        console.log(this.props);
        console.log(` El nombre es ${chosenRequest.text}`);
        console.log(` El ID es ${chosenRequest.value}`);
        console.log('=================UPDATING===================');

        this.setState({
            value: chosenRequest.value,
            status: true
        })
    }

    render() {
        return (
            <AutoComplete
                className="autocomplete"
                floatingLabelText="Seleccionar Rol"
                filter={AutoComplete.fuzzyFilter}
                openOnFocus={false}
                dataSource={dataSource}
                dataSourceConfig={dataSourceConfig}
                fullWidth={true}
                onNewRequest={this.handleRequest.bind(this)}
                onUpdateInput={this.handleUpdate.bind(this)}
                searchText={this.state.searchText}
            />
        );
    }
}

