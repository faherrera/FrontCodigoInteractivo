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

import { AutocompleteCourse } from './../../../../../helpers/UI/form/autocomplete/AutocompleteCourse';

//Components 

//Responses
import {ClassResponse} from './../../../../../helpers/responses/FormResponse/FormResponseClass';

//Routes
import { arrayRoutes} from './../../../../../helpers/requestConfig';
//Request 
import { putClass ,postClass } from "./../../../../../helpers/requests/ClassesRequest";
import { getAllCourses } from '../../../../../helpers/requests/CoursesRequest';

export default class FormClasses extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            messageError: [],
            class: props.class ? props.class : {},
            type: this.props.type != null ? (this.props.type === 'edit' ? 'edit' : 'create') : 'create',
            courses:[]

        }

    }

    componentDidMount(){
       if (this.state.type == 'create') {
           this.setState({
               loading:false,
           });
       }
    }

    componentWillReceiveProps(nextProps){
        console.log("< ==================<##DEBUG=>FORM CLASS========================");
                console.log(nextProps);
        console.log("====================##DEBUG====================== />");
        this.setState({
            class: nextProps.class != null ? nextProps.class : {},
            loading:false
        });
    }

 
    handleClickButton(e) {
        this.setState({
            loading: true,
            messageError: []
        });
            // this.loading();

        //Aquí es donde voy a hacer uso de los refs
        let code = this.refs.codeClass.getValue();
        let title = this.refs.titleClass.getValue();
        let description = this.refs.descriptionClass.getValue();
        let video = this.refs.videoClass.getValue();
        let course = this.refs.courseClass.getValue();

        
        if (e.target.id === 'btnCreate') {  //Si hago click en el btn Crear.

            let classResponse = new ClassResponse(code, title, description, video, course);

            if (classResponse.status) {

                postClass(classResponse.data, (res) => {
                    
                    if (res.status) {
                        this.setState({
                            loading:false,
                        });

                        return window.location = arrayRoutes.class;
                    }
                    
                    this.setState({
                        loading:false,
                        messageError: [...[res.message]],
                    });
                    alert('No pudo cargarse correctamente el curso');
                    
                });
            }

        //     this.loading();
        //     console.log('Click en create');
            
        //     let _classResponse = new ClassResponse(code,title,description,video,course);

        //     if (_classResponse.status) {
        //          return postClass(_classResponse.class,this.inSuccessCase.bind(this),this.inErrorCase.bind(this));

        //     }
            
        //     console.log(`El status es Falso`);
        //     console.log(_classResponse);
        //     this.setState({
        //         messageError:  _classResponse.messageError,
        //         loading: false
        //     });
            
        }
        
        if (e.target.id === 'btnEdit') {    //Si hago click en el boton Editar
           
            console.log('Click en edit.');
            let classResponse = new ClassResponse(code,title,description,video,course);
            
            if (classResponse.status) {
                
                //Llamo al putClass
                let code = this.state.class.CodeClass;
                putClass(code,classResponse.data,(res)=>{
                    if (!res.status) {
                        this.setState({
                            messageError: [...[res.message]],
                            loading:false
                        });
                        return alert("No se pudo completar la actualizacion de la clase ->" + res.message);
                    }

                    this.setState({
                        loading:false
                    });

                    window.location.reload();

                    // this.setState({
                    //     loading:false
                    // });

                })

            }
            console.log("< ==================<##DEBUG=>PUTCLASS MESSAGE========================");
                        console.log(classResponse.message);
            console.log("====================##DEBUG====================== />");
            return this.setState({
                messageError: classResponse.message,
                loading: false
            });

            //Imprimo los mensajes.

        }

    }

    render() {
        
        if (this.state.loading) {
            return <ProgressCircle
                    active={this.state.loading}
                />
        
            }

        return (
            <div className="form__group">
               
                <form className="form" >

                    <ListMessage
                        messageError={this.state.messageError}
                    />


                    <InputNumber
                        label="Codigo de la clase"
                        placeholder="555"
                        required={true}
                        ref="codeClass"
                        value={this.state.class.CodeClass}
                    />
                    
                    <InputText
                        label="Titulo de la clase"
                        placeholder="Example: Conociendo el entorno"
                        required={true}
                        ref="titleClass"
                        value={this.state.class.TitleClass}


                    />

                    <TextArea
                        label="Descripcion del curso"
                        required={false}
                        ref="descriptionClass"
                        limitChar={400}
                        value={this.state.class.Description}

                    />

                    <InputText
                        label="Video Preview"
                        placeholder="Example: https://www.youtube.com/embed/7qWMvFsww60"
                        ref="videoClass"
                        required={false}
                        value={this.state.class.PathVideo}
                    />

                    <AutocompleteCourse 
                        ref="courseClass"
                        value={this.state.class.CourseID}
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