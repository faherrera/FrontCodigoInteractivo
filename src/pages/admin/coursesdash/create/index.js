import React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

//Helpers 
import { constructorObjectCourse } from './../helpers/coursesRequest';

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
        }

        this.handleSendRequest = this.handleSendRequest.bind(this);

    }
    componentDidMount(){
        
    }

    

    handleSendRequest(e){

      
    }

   
   
    render() {
        return (
            <div className="collection courses-section">

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

               <SelectedInstructor instructorCode={2}/>

                <VideoURLUpload/>

               

                <a href="#!" className="waves-effect  btn btn-crud green darken-4 right" id="createCourseBtn" onClick={this.handleSendRequest}> Crear Curso (+)</a>

            </div>
        );
    }
}