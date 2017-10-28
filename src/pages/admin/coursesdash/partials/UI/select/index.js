import React, { Component } from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


//Constructor de respuesta 

import {Response} from './../../../../../../helpers/UI/form/';

const styles = {
    labelStyle:{
        color:'black',
    },
    floatingLabelStyle: {
        color: '#26a296',
        fontSize: '1.4rem',
    },
    underlineStyle:{
        border: '1px solid #26a69a'
    }
}
export class SelectedInstructor extends Component {
    constructor(props){
        super(props);

        this.state = {
            value : (this.props.instructorCode) ? this.props.instructorCode : 1
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event, index, value) => 
    {
        this.setState({ value })
        console.log(value);
        // this.props.onChangeSelectedField(value);    //Recogo el valor y lo envio al padre.
    };

    getValue(){

        let _response = new Response(false,null,"Error en Selected");

        if (this.state.value != null && this.state.value != undefined) {
            _response.status = true;
            _response.value = this.state.value;
            _response.message = "OK";

        }

        console.log(_response);
        return _response;


    }

    render () {
        return (
            <SelectField
                floatingLabelText="Instructor"
                id="instructorSelectField"
                value={this.state.value}
                onChange={this.handleChange}
                fullWidth={true}
                label={this.props.label}
                labelStyle={styles.labelStyle}
                floatingLabelStyle={styles.floatingLabelStyle}
                underlineStyle={styles.underlineStyle}
            >
                <MenuItem value={1} primaryText="Facundo Herrera" />
                <MenuItem value={2} primaryText="Diego Herrera" />
                <MenuItem value={3} primaryText="Walter Herrera" />
                <MenuItem value={4} primaryText="Agustin Herrera" />
                <MenuItem value={5} primaryText="Emilia Herrera" />
            </SelectField>
        );
    }
}