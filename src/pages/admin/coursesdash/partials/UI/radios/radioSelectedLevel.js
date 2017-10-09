import React, { Component } from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

const styles = {

    radioStyles: {
        color: "#9e9e9e",
        fontSize: '1rem'
    }
};

export default class RadioSelectedLevel extends Component {

    constructor(props){
        super(props)
        
        this.state ={
            value: (this.props.levelDefault) ? this.props.levelDefault : 1
        }
        
    }
    render () {
        return (
            <RadioButtonGroup
                name="level"
                id="level"
                defaultSelected={this.state.value.toString()}>


                <RadioButton
                    value="1"
                    label="Principiante"
                    labelStyle={styles.radioStyles}

                />

                <RadioButton
                    value="2"
                    label="Intermedio"
                    labelStyle={styles.radioStyles}
                />

                <RadioButton
                    value="3"
                    label="Avanzado"
                    labelStyle={styles.radioStyles}
                />

            </RadioButtonGroup>
        );
    }
}