import React, { Component } from 'react';

import { Row,Input} from 'react-materialize';

import { Response } from './../../../../../../helpers/UI/form/';    //Import el Response.

export class RadioSelectedLevel extends Component {

    constructor(props) {
        super(props)

        this.state = {
            value: (this.props.value != null) ? this.props.value : "2",
        }

        this.handleOnChange = this.handleOnChange.bind(this);

    }
    handleOnChange(e){

        console.log('Changed');

        this.setState({
            value: e.target.value
        })

    }

    getValue(){
        let _response = new Response(true,this.state.value,"OK")
        return _response;
    }

    render() {
        return (
            <div className="form__group">
                <div className="form__title-group">
                    <h3 className="title">{this.props.title}</h3>
                </div>

                <Row className="center">
                    <Input
                        s={12}
                        name='level'
                        type='radio'
                        value='1'
                        label='Principiante'
                        checked={this.state.value === '1'}
                        onChange={this.handleOnChange} />

                    <Input
                        s={12}
                        name='level'
                        type='radio'
                        value='2'
                        label='Intermedio'
                        checked={this.state.value === '2'}
                        onChange={this.handleOnChange} />

                    <Input
                        s={12}
                        name='level'
                        type='radio'
                        value='3'
                        label='Avanzado'
                        checked={this.state.value === '3'}
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
            value: (this.props.value != null) ? this.props.value : "1",
        }

        this.handleOnChange = this.handleOnChange.bind(this);

    }
    handleOnChange(e){

        console.log('Changed mode');

        this.setState({
            value: e.target.value
        })

    }

    getValue(){
        let _response = new Response(true,this.state.value,"OK")
        return _response;
    }

    render() {
        return (
            <div className="form__group">
                <div className="form__title-group">
                    <h3 className="title">{this.props.title}</h3>
                </div>

                <Row className="center">
                    <Input
                        s={12}
                        name='type'
                        type='radio'
                        value='1'
                        label='Free'
                        checked={this.state.value === '1'}
                        onChange={this.handleOnChange} />

                    <Input
                        s={12}
                        name='type'
                        type='radio'
                        value='2'
                        label='Premium'
                        checked={this.state.value === '2'}
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
            value: (this.props.value != null) ? this.props.value : "1",
        }

        this.handleOnChange = this.handleOnChange.bind(this);

    }
    handleOnChange(e){

        console.log('Changed Type');

        this.setState({
            value: e.target.value
        })

    }

    getValue(){
        let _response = new Response(true,this.state.value,"OK")
        return _response;
    }

    render() {
        return (
            <div className="form__group">
                <div className="form__title-group">
                    <h3 className="title">{this.props.title}</h3>
                </div>

                <Row className="center">
                    <Input
                        s={12}
                        name='mode'
                        type='radio'
                        value='1'
                        label='Presencial'
                        checked={this.state.value === '1'}
                        onChange={this.handleOnChange} />

                    <Input
                        s={12}
                        name='mode'
                        type='radio'
                        value='2'
                        label='Remoto'
                        checked={this.state.value === '2'}
                        onChange={this.handleOnChange} />
                </Row>
            </div>
        );
    }
}




