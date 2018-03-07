import React from 'react';
import axios from 'axios';


import { urlApi } from './../../../../../helpers/routesConfig';

//UI

import {
    InputText,
    InputNumber,
    TextArea,
} from '../../../../../helpers/UI/form/';
import RadioVideo from '../../../../../helpers/UI/form/video/RadioVideo';

import { ProgressCircle } from '../../../../../helpers/UI/misc';

import { ButtonForm } from './../../../../../helpers/UI/form/button/ButtonForm';

import { ListMessage } from './../../../../../helpers/UI/messages/ListError';

import { AutocompleteCourse } from './../../../../../helpers/UI/form/autocomplete/AutocompleteCourse';

//Components 

//Responses
import {ClassResponse} from './../../../../../helpers/responses/FormResponse/FormResponseClass';

//Routes
import { arrayRoutesDash} from './../../../../../helpers/routesConfig';
//Request 
import { putClass ,postClass } from "./../../../../../helpers/requests/ClassesRequest";
import { getAllCourses } from '../../../../../helpers/requests/CoursesRequest';
import { Container } from 'react-materialize';
import { FormMessage } from '../../../../../helpers/UI/messages/FormMessage/index';

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
            console.log("///////////////////InicioDEBUG === CLASSrESPONSE////////////////");
                    console.log(classResponse)
            console.log("*******************FinalizacionDEBUG === CLASSrESPONSE**************");
            
            if (classResponse.status) {

                postClass(classResponse.data, (res) => {
                    
                    if (res.status) {
                        this.setState({
                            loading:false,
                        });

                        return window.location = arrayRoutesDash.class;
                    }
                    
                    return this.setState({
                        loading:false,
                        messageError: [...[res.message]],
                    });
                    alert('No pudo cargarse correctamente el curso');
                    
                });
            }

     
            
            console.log(`El status es Falso`);
            console.log(classResponse);
            return this.setState({
                messageError: [...classResponse.message],
                loading: false
            });
            
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
            <Container>
                <div className="form__group ">
                
                    <form className="form" >

                        <FormMessage messages={this.state.messageError} />

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

                        <RadioVideo
                            value={this.state.class.PathVideo}
                            ref="videoClass"

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
            </Container>

        );
    }


}