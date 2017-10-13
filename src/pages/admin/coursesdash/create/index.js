import React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

//Helpers 
import 
    {
    getValueRadio,
    returnObjectTextInput,
    getBase64Image,
    getSelectedValue
    } from './../../../../helpers/validations';
import  ErrorMessage  from './../../../../helpers/UI/errors';

import {Course} from './../helpers/classCourse';
//AXIOS Helpers
import { getCourse } from './../helpers/requestAxios';


//UI
import SelectedInstructor from './../partials/UI/selectedInstructor';
import RadioSelectedLevel from './../partials/UI/radios/radioSelectedLevel';
import RadioSelectedMode from './../partials/UI/radios/radioSelectedMode';
import RadioSelectedTypeCourse from './../partials/UI/radios/radioSelectedTypeCourse';

import ImageUpload from './../partials/UI/files/imageUpload';
import VideoURLUpload from './../partials/UI/files/videoURLUpload';

// import { determinateRadioChecked } from './../helpers/checkInputs';

//Assets 
import './style.css';

//Stykes


export default class CreateCourse extends React.Component {

    constructor(props){
        super(props);

        this.state = {
          course: [],
          loading: false,
          messageError: [],
          mensaje: 'inicial'
        };

       

        this.handleSendRequest = this.handleSendRequest.bind(this);
        this.onChangeSelectedField = this.onChangeSelectedField.bind(this);
        this.handleLoading = this.handleLoading.bind(this);

    }

    componentDidMount() {

    }
    handleSendRequest(e){
        this.handleLoading();
        if (e.target.id === 'createCourseBtn') {    //Crear un curso.
            
            let CourseObject = Course('code', 'name', 'description', 'duration', 'typeCourse',
            'mode',
            'level',
            'videoInput',
            'inputImage',
            'imgItem',
            'instructorID');    //Obtengo el Objeto del curso, estado y mensajes.
            
            if (this.validatingCourse(CourseObject)){
                console.log('Debo realizar la peticion');
                
                this.setState({
                    Course: CourseObject.Course
                });
                

            }else{
                console.log('No debo realizar la peticion hasta completar los errores.');

            }
            this.handleLoading();
        }
    }

    validatingCourse(CourseObject){
        if (!CourseObject.status) {
            console.log(CourseObject)
            if (CourseObject.messageError.length > 0) {
                this.setState({
                    messageError: [...CourseObject.messageError]

                });
            }

            return false;   //Retorno false para que no pase a la peticion
        }else{
            this.setState({ 
                messageError: []    //En caso de no tener errores debo dejar un array vacio.

            });
            
            return true;    //Retorno true para hacer la peticion.
        }
    }


    onChangeSelectedField(value){
        // const value = e.target.value;
        console.log(value);
    }
    
    handleLoading(){
        this.setState((prevState, props) => ({
            loading: !prevState.loading
        }));
    }
   
    render() {
        // let errores = this.state.messageError;
            return (
                <div className="collection courses-section">
                                        
                    <ErrorMessage listing={this.state.messageError}/>
                    
                    <div className={this.state.loading ? "progress" : 'hide'}>
                        <div className="indeterminate"></div>
                    </div>
    
                    <div className={!this.state.loading ? " " : 'hide'}>
    
                        <ImageUpload />
    
                        <div className="input-field col s12">
                            <input id="code" type="text" className="validate"/>
                            <label >Codigo del curso</label>
                    </div>
                        <div className="input-field col s12">
                            <input id="name" type="text" className="validate"/>
                            <label >Nombre</label>
                    </div>
                        <div className="input-field col s12">
                            <textarea id="description" className="materialize-textarea" data-length="120" ></textarea>
                            <label >Descripcion</label>
                        </div>
                        
                        <div className="input-field col s12">
                            <input id="duration" type="text" className="validate"/>
                            <label >Duracion del curso</label>
                    </div>
    
                        <div className=" col s12">
                            <h5 >Modalidad del curso </h5>
    
                            <RadioSelectedMode />
                        </div>
                        
                        <div className=" col s12">
                            <h5>Tipo de curso </h5>
    
                            <RadioSelectedTypeCourse />
                        </div>
    
                        <div className=" col s12">
                            <h5>Nivel del curso </h5>
    
                            <RadioSelectedLevel levelDefault={2}/>
                        </div>
    
                    <SelectedInstructor 
                        instructorCode={2}
                        onChangeSelectedField={this.onChangeSelectedField}   />
    
                        <VideoURLUpload/>
    
                    
    
                        <a href="#!" className="waves-effect  btn btn-crud green darken-4 right" id="createCourseBtn" onClick={this.handleSendRequest}> Crear Curso (+)</a>
                    </div>
    
                </div>
            );
        }
    
}