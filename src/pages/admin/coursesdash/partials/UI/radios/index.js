import React, { Component } from 'react';

import { Row,Input} from 'react-materialize';

import { Response } from './../../../../../../helpers/UI/form/';    //Import el Response.

export class RadioSelectedLevel extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: props.value || "Intermedio",
            value: props.value ? (props.name == "Intermedio") ? 2 : (props.name == "Principiante") ? 1 : (props.name == "Avanzado") ? 3 : 2 : 2, 
        }

        this.handleOnChange = this.handleOnChange.bind(this);

    }


    
    componentDidMount(){
        console.log('Mostrando los logss' + this.state.value);
    }

    handleOnChange(e){
        const elements = ["","Principiante","Intermedio","Avanzado"];

        console.log('Changed ' + e.target.value);

        this.setState({
            value: e.target.value,
            name: elements[e.target.value]
        })

    }

    getValue(){
        let _response = new Response(true,this.state.value,"OK")
        return _response;
    }

    render() {
        return (
            <div className="form__group ">
                <div className="form__title-group">
                    <h3 className="title">{this.props.title}</h3>
                </div>

                <Row className="align">
                    <Input
                        s={12}
                        name='level'
                        type='radio'
                        value='1'
                        label='Principiante'
                        checked={this.state.name === 'Principiante'}
                        onChange={this.handleOnChange} />

                    <Input
                        s={12}
                        name='level'
                        type='radio'
                        value='2'
                        label='Intermedio'
                        checked={this.state.name === 'Intermedio'}
                        onChange={this.handleOnChange} />

                    <Input
                        s={12}
                        name='level'
                        type='radio'
                        value='3'
                        label='Avanzado'
                        checked={this.state.name === 'Avanzado'}
                        onChange={this.handleOnChange}
                    />
                </Row>
            </div>
        );
    }
}
export class RadioSelectedMode extends Component {
    



    constructor(props) {
        super(props)

        this.state = {
            name: props.value || "Free",
            value: props.value ? (props.value == "Free")  ? 1 : 2 : 1
        }

        this.handleOnChange = this.handleOnChange.bind(this);

    }
    
    componentDidMount(){
        console.log('Mostrando los logss' + this.state.value);
    }

    handleOnChange(e){
        const elements = ["","Free","Premium"];

        console.log('Changed mode');

        this.setState({
            value: e.target.value,
            name: elements[e.target.value]
        })

    }

    getValue(){
        let _response = new Response(true,this.state.value,"OK")
        return _response;
    }

    render() {
        return (
            <div className="form__group ">
                <div className="form__title-group">
                    <h3 className="title">{this.props.title}</h3>
                </div>

                <Row className="align">
                    <Input
                        s={12}
                        name='type'
                        type='radio'
                        value='1'
                        label='Free'
                        checked={this.state.name === 'Free'}
                        onChange={this.handleOnChange} />

                    <Input
                        s={12}
                        name='type'
                        type='radio'
                        value='2'
                        label='Premium'
                        checked={this.state.name === 'Premium'}
                        onChange={this.handleOnChange} />
                </Row>
            </div>
        );
    }
}
export class RadioSelectedType extends Component {
    



    constructor(props) {
        super(props)

        this.state = {
            name: props.value || "Presencial",
            value: props.value ? (props.value == "Presencial") ? 1 : 2 : 1,
        }

        this.handleOnChange = this.handleOnChange.bind(this);

    }
    
    componentDidMount(){
        console.log('Mostrando los logss' + this.state.value);
    }

    handleOnChange(e){
        const elements = ["","Presencial","Remoto"]
        console.log('Changed Type');

        this.setState({
            value: e.target.value,
            name: elements[e.target.value]
        })

    }

    getValue(){
        let _response = new Response(true,this.state.value,"OK")
        return _response;
    }

    render() {
        return (
            <div className="form__group ">
                <div className="form__title-group">
                    <h3 className="title">{this.props.title}</h3>
                </div>

                <Row className="align">
                    <Input
                        s={12}
                        name='mode'
                        type='radio'
                        value='1'
                        label='Presencial'
                        checked={this.state.name === 'Presencial'}
                        onChange={this.handleOnChange} />

                    <Input
                        s={12}
                        name='mode'
                        type='radio'
                        value='2'
                        label='Remoto'
                        checked={this.state.name === 'Remoto'}
                        onChange={this.handleOnChange} />
                </Row>
            </div>
        );
    }
}




