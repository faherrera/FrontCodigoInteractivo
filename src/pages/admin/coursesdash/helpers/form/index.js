import React from 'react';
import axios from 'axios';

//UI


import {
    InputText,
    InputNumber,
    InputEmail,
    TextArea,
    ImageField,
    RadioButton
} from '../../../../../helpers/UI/form/';
import { ProgressCircle } from '../../../../../helpers/UI/misc';

import { ButtonForm } from './../../helpers/form/button';

import {
    RadioSelectedLevel,
    RadioSelectedMode,
    RadioSelectedType,
} from './../../partials/UI/radios/';

import {
    SelectedInstructor,
} from './../../partials/UI/select/';

import {
    GenericMessage,
} from './../../partials/messages/';


//Components 
import { Course } from './../../helpers/classes/course';

import { CourseResponse } from './../../helpers/responses/course';

import { postCourse, putCourse } from './../../helpers/request/';

export default class FormCourse extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            messageError: [],
            course: this.props.course != null ? this.props.course : {},
            type: this.props.type !== null ? (this.props.type === 'edit' ? 'edit' : 'create') : 'create'

        }


    }

    handleClickButton(e) {

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


        if (e.target.id === 'btnCreate') {
            this.loading();

            let _cresponse = new CourseResponse(code, name, description, duration, typecourse, mode, level, video, image, instructor);

            if (_cresponse.status) {

                postCourse(_cresponse.course, this.loading.bind(this), this.inErrorCase.bind(this));



            } else {
                this.setState({
                    loading: false
                });

                this.setState({
                    messageError: _cresponse.messageError
                });

            }

        }

        if(e.target.id === 'btnEdit'){
            this.loading();

            let _cresponse = new CourseResponse(code, name, description, duration, typecourse, mode, level, video, image, instructor);

            if (_cresponse.status) {

                putCourse(_cresponse.course, this.loading.bind(this), this.inErrorCase.bind(this));
                
                //Aquí va el metodo put.
                window.location="/dashboard/courses";

            } else {
                this.setState({
                    loading: false
                });

                this.setState({
                    messageError: _cresponse.messageError
                });

            }
        }


    }



    loading() {
        this.setState({
            loading: !this.state.loading
        });

        console.log("Entrando en loading"); //#Debug
    }

    inErrorCase(message) {
        this.loading();
        console.log(message + "<<<<------");

        this.setState({
            messageError: [...[message]]
        });

    }

    render() {

        console.log('====================================');
        console.log(this.state.course);
        console.log('====================================');

        return (
                <div className="form__group">
                    <ProgressCircle 
                        active={this.state.loading}
                    />

                    <form className={!this.state.loading ? 'form' : 'hide'} >

                        <GenericMessage
                            messages={this.state.messageError}
                        />

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
                            value={this.state.course.Video_preview}

                        />

                        <InputNumber
                            label="Codigo del curso"
                            placeholder="555"
                            required={true}
                            ref="codeCourse"
                            value={this.state.course.Code}

                        />

                        <InputText
                            label="Nombre del curso"
                            placeholder="Example: Android Nativo"
                            required={true}
                            ref="nameCourse"
                            value={this.state.course.Name}

                        />

                        <TextArea
                            label="Descripcion del curso"
                            value={this.state.course.Description} 
                            required={false}
                            ref="descriptionCourse"

                        />

                        <SelectedInstructor
                            label="Seleccionando un intructor"
                            ref="instructorCourse"
                            value={this.state.course.ProfessorID} 

                        />

                        <InputText
                            label="Duracion del curso"
                            placeholder="3 meses y medio"
                            ref="durationCourse"
                            required={false}
                            value={this.state.course.Duration} 

                        />


                        <RadioSelectedLevel
                            title="Seleccionar un Level"
                            ref="levelCourse"
                            value={this.state.course.Level} 

                        />

                        <RadioSelectedMode
                            title="Seleccionar un Modo"
                            ref="modeCourse"
                            value={this.state.course.Mode} 

                        />

                        <RadioSelectedType
                            title="Seleccionar un tipo"
                            ref="typeCourse"
                            value={this.state.course.TypeCourse} 

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