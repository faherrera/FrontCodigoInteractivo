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

        // this.setState({
        //     loading: true
        // });
        
        if (e.target.id === 'btnSend') {
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

                this.setState({
                    loading: true,
                },() => {
                    postCourse(_cresponse.course);

                    this.setState({
                        loading:false
                    });
                });

                // postCourse(_cresponse.course).then(() => this.setState({ loading: false }));



            }else{
                this.setState({
                    messageError: _cresponse.messageError
                });

            }

        }

    }

    

    loading(){
        this.setState({
            loading: true
        });
        console.log("Pasando por Loading");
    }

    loaded(){
        this.setState({
            loading: false
        });
        console.log("Pasando por loaded");
    }

    render(){

        if (this.state.loading) {
            return  <CircularProgress size={100} thickness={5} />
        }
        else{

            return(
                <div className="courses-section center">

                    {
                        this.state.messageError.map((value,index)=>{
                            if (value != 'OK') {
                                return <li className="blue accent-4 white-text" key={index}>{value}</li>
                            }
                        })
                    }                
                
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
}