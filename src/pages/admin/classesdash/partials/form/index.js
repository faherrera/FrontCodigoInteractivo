import React from 'react';
import axios from 'axios';


import { urlApi } from './../../../../../helpers/requestConfig';

//UI

import {
    InputText,
    InputNumber,
    TextArea,
} from '../../../../../helpers/UI/form/';

import { ProgressCircle } from '../../../../../helpers/UI/misc';

import { ButtonForm } from './../../../../../helpers/UI/form/button';

import { ListMessage } from './../../../../../helpers/UI/messages/ListError';

import { AutocompleteUI } from './../../../../../helpers/UI/form/autocomplete/index';

//Components 

//Responses
import {ClassResponse} from './../../helpers/responses';

//Peticiones 
import { postClass} from './../../helpers/request/';

export default class FormClasses extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            messageError: [],
            classes: this.props.classes != null ? this.props.classes : {},
            type: this.props.type !== null ? (this.props.type === 'edit' ? 'edit' : 'create') : 'create',
            courses:[],
            response:{}

        }

        this.inErrorCase =  this.inErrorCase.bind(this);


    }

    handleClickButton(e) {

        //Aquí es donde voy a hacer uso de los refs
        let code = this.refs.codeClass.getValue();
        let title = this.refs.titleClass.getValue();
        let description = this.refs.descriptionClass.getValue();
        let video = this.refs.videoClass.getValue();
        let course = this.refs.courseClass.getValue();

        
        if (e.target.id === 'btnCreate') {  //Si hago click en el btn Crear.
            this.loading();
            console.log('Click en create');
            
            let _classResponse = new ClassResponse(code,title,description,video,course);

            if (_classResponse.status) {
                 return postClass(_classResponse.class,this.inSuccessCase.bind(this),this.inErrorCase.bind(this));

            }
            
            console.log(`El status es Falso`);
            console.log(_classResponse);
            this.setState({
                messageError:  _classResponse.messageError,
                loading: false
            });
            
        }
        
        if (e.target.id === 'btnEdit') {    //Si hago click en el boton Editar
            // this.loading();
            console.log('Click en Edit');

        }

    }



    loading() {
        this.setState({
            loading: !this.state.loading
        });

        console.log("Entrando en loading"); //#Debug
    }

    inErrorCase(message) {

        console.log("Entrando en el Error case");

        this.loading();
        console.log(message + "<<<<------");

        this.setState({
            messageError: [...[message]]
        });
    }
    inSuccessCase(obj){
        console.log("Entrando en el caso satisfactorio");
        this.loading();

        if (!obj._status) {
            return  this.setState({
                messageError : [...[obj._message]]
            });
            
        }

        this.setState({
            messageError: []

        });
        
        alert('Excelente!');
        console.log(obj);

    }

    render() {

        return (
            <div className="form__group">
                <ProgressCircle
                    active={this.state.loading}
                />

                <form className={!this.state.loading ? 'form' : 'hide'} >

                    <ListMessage
                        messageError={this.state.messageError}
                    />


                    <InputNumber
                        label="Codigo de la clase"
                        placeholder="555"
                        required={true}
                        ref="codeClass"
                        
                    />
                    
                    <InputText
                        label="Titulo de la clase"
                        placeholder="Example: Conociendo el entorno"
                        required={true}
                        ref="titleClass"

                    />

                    <TextArea
                        label="Descripcion del curso"
                        required={false}
                        ref="descriptionClass"
                        limitChar={400}
                    />

                    <InputText
                        label="Video Preview"
                        placeholder="Example: https://www.youtube.com/embed/7qWMvFsww60"
                        ref="videoClass"
                        required={false}

                    />

                    <AutocompleteUI 
                        listado = {this.state.courses}
                        ref="courseClass"
                    /> 

                    <ButtonForm
                        type={this.state.type}
                        onClick={this.handleClickButton.bind(this)}
                    />
                </form>

            </div>

        );
    }


}