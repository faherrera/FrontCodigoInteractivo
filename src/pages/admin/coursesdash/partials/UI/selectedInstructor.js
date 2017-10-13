import React, { Component } from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
    labelStyle:{
        color:'black',
    },
    floatingLabelStyle: {
        color: '#26a296',
        fontSize: '1.4rem',
    },
}
export default class SelectedInstructor extends Component {
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
        this.props.onChangeSelectedField(value);    //Recogo el valor y lo envio al padre.
    };

    render () {
        return (
            <SelectField
                floatingLabelText="Instructor"
                id="instructorSelectField"
                value={this.state.value}
                onChange={this.handleChange}
                fullWidth={true}
                labelStyle={styles.labelStyle}
                floatingLabelStyle={styles.floatingLabelStyle}
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