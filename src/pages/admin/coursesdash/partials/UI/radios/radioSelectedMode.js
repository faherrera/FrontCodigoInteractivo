import React, { Component } from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

const styles = {

    radioStyles: {
        color: "#9e9e9e",
        fontSize: '1rem'
    }
};

export default class RadioSelectedMode extends Component {

    constructor(props){
        super(props)
        
        this.state ={
            value: (this.props.modeDefault) ? this.props.modeDefault : 1
        }
        
    }
    render () {
        return (
            <RadioButtonGroup
                name="mode"
                id="mode"
                defaultSelected={this.state.value.toString()}>


                <RadioButton
                    value="1"
                    label="Presencial"
                    labelStyle={styles.radioStyles}

                />

                <RadioButton
                    value="2"
                    label="Remoto"
                    labelStyle={styles.radioStyles}
                />

            </RadioButtonGroup>
        );
    }
}