import React, { Component } from 'react';
import PropTypes from 'prop-types';
//UI
    //Materialize
    import {Input,
            Row
            } from 'react-materialize';

const elements = ["","//youtube.com/embed/", "//player.vimeo.com/video/"];

export default class RadioVideo extends Component {

    state = {
        value: this.props.value || elements[0],
        selected: this.props.value ? null : 0,  
    }

    handleInputText(e){

        let value = e.target.value
        
        this.setState({
             value
        });
    }

    getValue(){
        let response = {};
        return response = {
                status:true,
                value: this.state.value,
                message: "OK"
            };
    }
    render() {


        return (
            <div>
                <h6> Seleccionar de donde es el Embed </h6>
                <Input name='radiovideo' type='radio' value='0' label='Sin preview' onClick={(e) => { this.setState({ selected: e.target.value, value: elements[0] }) }} checked={this.state.selected == 0} />
                <Input name='radiovideo' type='radio' value='1' label='Youtube' onClick={(e) => { this.setState({ selected: e.target.value, value: elements[1] }) }} checked={ this.state.selected == 1 } />
                <Input name='radiovideo' type='radio' value='2' label='VIMEO' onClick={(e) => { this.setState({ selected: e.target.value, value: elements[2] }) }} checked={this.state.selected == 2} />
                
                            
                <Input placeholder="Debe poner el codigo de video. Ejemplo : HTjspe3" label="Codigo video"  value={this.state.value} onChange={this.handleInputText.bind(this)}/>

            </div>
        );
    }
}

RadioVideo.PropTypes = {
    value: PropTypes.string //Value en caso de edit.
}