import React, { Component } from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

const styles = {

    radioStyles: {
        color: "#9e9e9e",
        fontSize: '1rem'
    }
};

export default class RadioSelectedTypeCourse extends Component {

    constructor(props) {
        super(props)

        this.state = {
            value: (this.props.typeCourseDefault) ? this.props.typeCourseDefault : 1
        }

    }
    render() {
        return (
            <RadioButtonGroup
                name="typeCourse"
                id="typeCourse"
                defaultSelected={this.state.value.toString()}>


                <RadioButton
                    value="1"
                    label="Premium"
                    labelStyle={styles.radioStyles}

                />

                <RadioButton
                    value="2"
                    label="Free"
                    labelStyle={styles.radioStyles}
                />


            </RadioButtonGroup>
        );
    }
}