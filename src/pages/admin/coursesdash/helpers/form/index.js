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

//Form Response.
import { CourseResponse } from './../../../../../helpers/responses/FormResponse/FormResponseCourse';

//##Request Course 
import { postCourse ,putCourse} from './../../../../../helpers/requests/CoursesRequest';

//Routes
import { arrayRoutes } from './../../../../../helpers/routesConfig';

// import { postCourse } from './../../helpers/request/';

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


        if (e.target.id === 'btnCreate') {

            let formRes = new CourseResponse(code, name, description, duration, typecourse, mode, level, video, image, instructor);

            if (formRes.status) {

               console.log("< ==================<##DEBUG=>POSTCOURSE STATUS:TRUE========================");

                postCourse(formRes.data,(res)=>{
                    if (res.status) {
                     return   window.location = arrayRoutes.course
                    }

                    this.setState({
                        messageError: [...res.message]
                    });
                    

                });
               console.log("====================##DEBUG====================== />");
                this.setState({
                    loading:false,
                });


            } else {

                this.setState({
                    loading: false,
                    messageError: [...formRes.message]

                });


            }

        }

        if(e.target.id === 'btnEdit'){

            let formRes = new CourseResponse(code, name, description, duration, typecourse, mode, level, video, image, instructor);
            
            if (formRes.status) {
                console.log("< ==================<##DEBUG=>EDITCOURE => STAATUS TRUE ========================");
                
                putCourse(this.state.course.Code,formRes.data,(res)=>{

                    if (res.status) {
                        return window.location = arrayRoutes.course
                    }

                    console.log("< ==================<##DEBUG=>EDITCOURE => STAATUS TRUE ======================== / // >>");

                    return this.setState({
                        messageError: [...res.message],
                        loading:false
                    });

                });


            }
            return this.setState({
                loading: false,
                messageError: [...formRes.message]
            });      
        }


    }



    loading() {
        this.setState({
            loading: !this.state.loading
        });

        console.log("Entrando en loading"); //#Debug
    }

    render() {

        console.log('====================================');
        console.log(this.state.course);
        console.log('====================================');

        if (this.state.loading) {
            return <ProgressCircle
                active={this.state.loading}
            />
        }

        return (
                <div className="form__group">
                   

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
                            disabled={(this.state.type == 'edit') ? true : false}


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