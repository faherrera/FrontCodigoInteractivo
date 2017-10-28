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

import { 
    RadioSelectedLevel,
    RadioSelectedMode,
    RadioSelectedType,
} from './../partials/UI/radios/';

import { 
    SelectedInstructor,
} from './../partials/UI/select/';


//Components 
import {Course} from './../helpers/classes/course';

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
        
        if (e.target.id === 'btnSend') {
            
            this.setState({
                loading:true,
            })

            let _course = new Course();

            
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
            
            if (code.status) {
                _course.code = code.value;
            }
            else {
                console.log('====================================');
                console.log(code.message);
                console.log('====================================');
            }

            if (name.status) {
                _course.name = name.value;
            }
            else {
                console.log('====================================');
                console.log(name.message);
                console.log('====================================');
            }

            if (description.status) {
                _course.description = description.value;
            }
            else {
                console.log('====================================');
                console.log(description.message);
                console.log('====================================');
            }
            
            if (duration.status) {
                _course.duration = duration.value;
            }
            else {
                console.log('====================================');
                console.log(duration.message);
                console.log('====================================');
            }

            if (level.status) {
                _course.level = level.value;
            }
            else {
                console.log('====================================');
                console.log(level.message);
                console.log('====================================');
            }

            if (mode.status) {
                _course.mode = mode.value;
            }
            else {
                console.log('====================================');
                console.log(mode.message);
                console.log('====================================');
            }
            
            if (typecourse.status) {
                _course.typecourse = typecourse.value;
            }
            else {
                console.log('====================================');
                console.log(typecourse.message);
                console.log('====================================');
            }
            
            if (video.status) {
                _course.video_preview = video.value;
            }
            else {
                console.log('====================================');
                console.log(video.message);
                console.log('====================================');
            }


            if (image.status) {
                _course.imageBase64 = image.value.base64;
                _course.thumbnail = image.value.nameImg;

                console.log('====================================');
                console.log(image.message);
                console.log(image.value.nameImg);
                console.log('====================================');
            }

           
            if (instructor.status) {
                _course.professorId = instructor.value;
            }
            else{
                console.log('====================================');
                console.log(instructor.message);                
                console.log('====================================');
            }



            console.log('====================================');
            console.log('====================================');
            console.log('====================================');
            this.setState({
                course: _course
            })
            console.log(_course);
            console.log('====================================');
            console.log('====================================');

            // axios.post('http://localhost:17082/api/Courses/',this.state.course)
            //             .then( (response) => {
            //                 console.log(response);

            //                 return this.setState({
            //                     loading:false
            //                 });
            //             })
            //             .catch( (error) => {
            //                     console.log(error.message);
            //                     return this.setState({
            //                         loading: false
            //                     });

            //             });

            axios({
                method: 'post',
                url: 'http://localhost:17082/api/Courses/',
                data: this.state.course
            }).then((response) => {
                console.log(response);

                return this.setState({
                    loading: false
                });
            })
                .catch((error) => {
                    console.log(error.message);
                    return this.setState({
                        loading: false
                    });

                });

            console.log('====================================');

            

        }


    }

    render(){
        return(
            <div className="courses-section center">

                {this.state.loading ? <CircularProgress size={100} thickness={5} /> : null}
                
                
                <div className={this.state.loading ? 'hide' : "form"}>

                    <ImageField
                        idImageB64="imgField"
                        idinputImage="inputImage"
                        ref="imageCourse"
                    />

                    <InputText
                        label="Video Preview"
                        placeholder="Example: https://www.youtube.com/embed/7qWMvFsww60"
                        ref="videoCourse"
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

                    <div className="input-field">
                        <SelectedInstructor
                            label="Seleccionando un intructor"
                            ref="instructorCourse"
                         />
                    </div>


                   

                    <InputText
                        label="Duracion del curso"
                        placeholder="3 meses y medio"
                        ref="durationCourse"
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

                    <a 
                        className="waves-effect green darken-3 btn btn-form" 
                        onClick={this.handleClickButton.bind(this)}
                        id="btnSend"
                    >
                        Crear curso <i className="material-icons  verticalAlign">send</i>
                    </a>

                </div>

            </div>
        );
    }
}