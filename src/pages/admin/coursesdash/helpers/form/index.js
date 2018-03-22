import React from 'react';
import axios from 'axios';

//UI


import {
    InputText,
    InputNumber,
    InputEmail,
    RadioButton,
    
} from '../../../../../helpers/UI/form/';


import { ProgressCircle } from '../../../../../helpers/UI/misc';

import { ButtonForm } from './../../helpers/form/button';

import {
    RadioSelectedLevel,
    RadioSelectedMode,
    RadioSelectedType,
} from './../../partials/UI/radios/';

// import {
//     SelectedInstructor,
// } from './../../partials/UI/select/';

import 
    RadioVideo from './../../../../../helpers/UI/form/video/RadioVideo';
import {ImageField} from './../../../../../helpers/UI/form/imageField/ImageField';
import InputDecimal from './../../../../../helpers/UI/form/input/inputDecimal';
import DateTimeDefault from './../../../../../helpers/UI/form/datetime/DateTimeDefault';
import TextAreaDefault from './../../../../../helpers/UI/form/textarea/TextArea';

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
import { arrayRoutesDash, arrayUpload } from './../../../../../helpers/routesConfig';
import { FormMessage } from '../../../../../helpers/UI/messages/FormMessage/index';

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
        let startDate = this.refs.startDateCourse.getValue();
        let price = this.refs.priceCourse.getValue();
        let temary = this.refs.temaryCourse.getValue();
        //let instructor = this.refs.instructorCourse.getValue();


        if (e.target.id === 'btnCreate') {

            
            
            let formRes = new CourseResponse(code, name, description, duration, typecourse, mode, level, video, image,startDate,price,temary);
            console.log("///////////////////InicioDEBUG === HaciendoClickEnCreate////////////////");
            console.log(formRes)
            console.log("*******************FinalizacionDEBUG === HaciendoClickEnCreate**************");

            if (formRes.status) {

               console.log("< ==================<##DEBUG=>POSTCOURSE STATUS:TRUE========================");

                postCourse(formRes.data,(res)=>{
                    if (res.status) {
                     return   window.location = arrayRoutesDash.courses
                    }

                    this.setState({
                        messageError: [...[res.message]]
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

            let formRes = new CourseResponse(code, name, description, duration, typecourse, mode, level, video, image, startDate, price, temary);
            
            if (formRes.status) {
                console.log("< ==================<##DEBUG=>EDITCOURE => STAATUS TRUE ========================");
                
                putCourse(this.state.course.Code,formRes.data,(res)=>{

                    if (res.status) {
                        return window.location = arrayRoutesDash.courses
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
        let course = this.state.course;

        return (
                <div className="form__group container">
                   

                    <form className={!this.state.loading ? 'form' : 'hide'} >

                        

                        <FormMessage messages={this.state.messageError} />

                       


                        <ImageField
                            pathImage={this.state.course.Thumbnail}
                            pathRoute={arrayUpload.courses}
                            ref="imageCourse"
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

                        <TextAreaDefault
                            label="Descripcion del curso"
                            value={this.state.course.Description} 
                            required={false}
                            ref="descriptionCourse"

                        />
                        {

                            // <SelectedInstructor
                            //     label="Seleccionando un intructor"
                            //     ref="instructorCourse"
                            //     value={this.state.course.ProfessorID} 
    
                            // />
                        }
                        
                        <DateTimeDefault
                            title="Fecha inicio del cursado"
                            value={course.StartDate}
                            ref="startDateCourse"

                        />

                        <InputText
                            label="Duracion del curso"
                            placeholder="Por ejemplo : 3 meses y medio"
                            ref="durationCourse"
                            required={false}
                            value={this.state.course.Duration} 

                        />
                        
                      
                        <InputDecimal
                            value={course.Price ? course.Price.toString() : "0.0" }
                            ref="priceCourse"
                        />

                       
                        
                        <InputText
                            label="Temario del curso [Link EXTERNO]"
                            placeholder="Por ejemplo : https://github.com/rexxars/react-markdown"
                            ref="temaryCourse"
                            required={false}
                            value={course.Temary}

                        />
                        <RadioVideo
                            value={this.state.course.Video_preview}
                            ref="videoCourse"

                        />
                        <RadioSelectedLevel
                            title="Seleccionar un Level"
                            ref="levelCourse"
                            value={this.state.course.Level} 

                        />

                        <RadioSelectedMode
                            title="Seleccionar un Modo"
                            ref="modeCourse"
                        value={this.state.course.TypeCourse} 

                        />

                        <RadioSelectedType
                            title="Seleccionar un tipo"
                            ref="typeCourse"
                            value={this.state.course.Mode} 

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