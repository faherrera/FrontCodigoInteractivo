import React, { Component } from 'react';
import { DatePicker } from 'material-ui';
import PropTypes from  "prop-types";
import { Row } from 'react-materialize';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class DateTimeDefault extends Component {
    
    constructor(props){
        super(props);

       
        this.state = {
            value: props.value ? new Date(props.value) : new Date(),
        }

        this.handleChange = this.handleChange.bind(this);

    }
    componentDidMount() {
        
    }

    getValue(){

        let response = {}

        return response = {
            status : true,
            value: this.state.value,
            message: "Ok"
        }
    }
    handleChange(event,value){

        console.log(value);
        this.setState({
            value
        });
        
    }
    render() {
        return (
            <div className="input-field">
                <h6> {this.props.title || "Ingresar una fecha"}</h6>
                <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                    <DatePicker
                        hintText="Ingreso de fecha"
                        // value={this.state.controlledDate}
                        defaultDate={this.state.value}
                        onChange={this.handleChange}
                        DateTimeFormat={global.Intl.DateTimeFormat}
                        okLabel="OK"
                        cancelLabel="Cancelar"
                        locale="es"
                        // minDate={new Date()}
                        fullWidth
                    />
                </MuiThemeProvider>
            </div>
        );
    }
}
// DateTimeDefault.defaultProps = {
//     title: "Ingresar una fecha por favor "
// }

// DateTimeDefault.propTypes = {
//     title: PropTypes.string,
// }

