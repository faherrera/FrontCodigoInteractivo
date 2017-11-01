import React from 'react';
import axios from 'axios';

//UI

import CircularProgress from 'material-ui/CircularProgress';

import { 
    InputText,
    InputNumber,
    InputEmail,
    TextArea,
    ImageField,
    RadioButton
} from '../../../../helpers/UI/form/';
import { ButtonForm } from './../helpers/form/button';

import { 
    RadioSelectedLevel,
    RadioSelectedMode,
    RadioSelectedType,
} from './../partials/UI/radios/';

import { 
    SelectedInstructor,
} from './../partials/UI/select/';

import { 
    ErrorMessage,
} from './../partials/errorComponent/error';

import { 
    GenericMessage,
} from './../partials/messages/';


//Components 
import {Course} from './../helpers/classes/course';

import { CourseResponse } from './../helpers/responses/course';

import { postCourse } from './../helpers/request/';

export default class CreateCourse extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            loading: false,
            messageError: [],
            course:{}

        }

        
    }


    handleClickButton(e){

        
        if (e.target.id === 'btnCreate') {
            this.loading();

            let code = this.refs.codeCourse.getValue();
            let name = this.refs.nameCourse.getValue();
            let description = this.refs.descriptionCourse.getValue();
            let duration = this.refs.durationCourse.getValue();
            let typecourse = this.refs.typeCourse.getValue();
            let mode = this.refs.modeCourse.getValue();
            let level = this.refs.levelCourse.getValue();
            let video = this.refs.videoCourse.getValue();
            let image = this.refs.imageCourse.getValue();
            let instructor = this.refs.instructorCourse.getValue();
            

            let _cresponse = new CourseResponse(code, name, description,duration,typecourse,mode,level,video,image,instructor);

            if (_cresponse.status) {

                postCourse(_cresponse.course, this.loading.bind(this), this.inErrorCase.bind(this));



            }else{
                this.setState({
                    loading: false
                });

                this.setState({
                    messageError: _cresponse.messageError
                });

            }

        }

    }

    

    loading(){
        this.setState({
            loading: !this.state.loading
        });

        console.log("Entrando en loading"); //#Debug
    }

    inErrorCase(message){
        this.loading();
        console.log(message + "<<<<------");

       this.setState({
           messageError: [...[message]]
       });

    }

    render(){

        if (this.state.loading) {
            return  <div className="center"> <CircularProgress size={100} thickness={5} /></div>
        }
        else{

            return(
                <div className="courses-section">
                    
                    <GenericMessage
                        messages={this.state.messageError}
                    />
                    
                    <div className="form">

                        <ImageField
                            idImageB64="imgField"
                            idinputImage="inputImage"
                            ref="imageCourse"
                        />

                        <InputText
                            label="Video Preview"
                            placeholder="Example: https://www.youtube.com/embed/7qWMvFsww60"
                            ref="videoCourse"
                            required={false}

                        />

                        <InputNumber
                            label="Codigo del curso"
                            placeholder="555"
                            required={true}
                            ref="codeCourse"
                        />

                        <InputText
                            label="Nombre del curso"
                            placeholder="Example: Android Nativo"
                            required={true}
                            ref="nameCourse"

                        />

                        <TextArea
                            label="Descripcion del curso"
                            value=''
                            required={false}
                            ref="descriptionCourse"
                        />

                        <SelectedInstructor
                            label="Seleccionando un intructor"
                            ref="instructorCourse"
                        />

                        <InputText
                            label="Duracion del curso"
                            placeholder="3 meses y medio"
                            ref="durationCourse"
                            required={false}

                        />

                    
                        <RadioSelectedLevel 
                            title="Seleccionar un Level"
                            ref="levelCourse"
                        />

                        <RadioSelectedMode 
                            title="Seleccionar un Modo"
                            ref="modeCourse"
                        />

                        <RadioSelectedType 
                            title="Seleccionar un tipo"
                            ref="typeCourse"
                        />

                        <ButtonForm 
                            type='create'
                            onClick={this.handleClickButton.bind(this)}
                        />

                    </div>

                    

                </div>
            );
        }

    }
}