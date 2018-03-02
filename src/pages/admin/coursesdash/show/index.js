import React, { Component } from 'react';
import axios from 'axios';


import {Card,
        CardTitle,
        Collection,
        CollectionItem,
        Container} from 'react-materialize';

import { ProgressCircle } from './../../../../helpers/UI/misc';

//###Requests
//Requests Class
import {filterClassesByCourseCode} from './../../../../helpers/requests/ClassesRequest';
//Request Course
import { getAllCourses, getCourse} from './../../../../helpers/requests/CoursesRequest';

//Alert Dialog
import AlertRemove from './../../../../helpers/UI/alerts';

///Components 
import EditCourse from './../edit/';
import { urlApi, urlApp, urlAppDashboard, arrayRoutesDash, arrayUpload} from './../../../../helpers/routesConfig';

//Assets
import './style.css';
import NoImage from './../../../../assets/img/noimage.jpg';


const pathCourses = urlApi + 'courses/';
let urlApiClass = urlAppDashboard + 'classes/'; 

export default class ShowCourse extends Component {

    constructor(props){
        super(props);

        let code = props.id;
       
        
        // alert(code);
        this.state = {
            course:{},
            loading:true,
            classes: [],
            editing: false,
            messsage:''
        }

        this.handleEditCourse = this.handleEditCourse.bind(this);
        this.handleDeleteCourse = this.handleDeleteCourse.bind(this);
    }

    componentDidMount() {

        let code = this.props.id;

        getCourse(code,(res) => {
            if (res.status) {
                return this.setState({
                    course: res.data,
                    message:''
                });
            }

            return this.setState({
                message: res.message
            });
        });
        
        filterClassesByCourseCode(code, (data) => {
            this.setState({
                classes: data,
                loading:false,
            });
        })

    }
    
    handleEditCourse(e){
        let code = e.target.name;

        // return alert(code);
        this.setState({
            editing:true
        });
    }

    handleDeleteCourse(){  //Este metodo paso como prop al dialog.
        axios({
            method: 'DELETE',
            url: pathCourses + this.state.course.Code,
        })
        .then(
            (response)=>{
                alert(response.data.message);
                return window.location = urlApp + 'dashboard/courses';
            }

        )
        .catch((error)=>{ alert("Ocurrió un error, por favor comuniquese con el administrador"); console.log(error.message);});

    }

    renderVideo(PathVideo, Thumbnail) {

        if (!PathVideo) {
            return (
                <figure className="center">
                    <img src={Thumbnail || NoImage} className="img-responsive" />
                    <h6> No tiene video de muestra este curso aún</h6>

                </figure>
            )
        }

        return <iframe src={PathVideo} allowFullScreen style={{ border: "none", width: "100%", height: '300px' }} />
    }

    render() {
        


        if (this.state.loading) {
            return <ProgressCircle active={this.state.loading} /> 
        }

        if (this.state.editing) {
            return <EditCourse code={this.state.course.Code}/>
        }

        if(this.state.message){
            return <h1>{this.state.message}</h1>
        }

       
        let pathImage = (this.state.course.Thumbnail) ? arrayUpload.courses + this.state.course.Thumbnail : NoImage;


        return (
            <Container>
                <Card
                    className="card-courses--show"
                    header={<CardTitle image={pathImage}></CardTitle>}
                    actions={
                        [<div key={1} className="card-options">
                            <a  name={this.state.course.Code} onClick={this.handleEditCourse} className="lime ligthen-2 btn"><i className="material-icons">edit</i> </a> <AlertRemove name={this.state.course.Name} handleDelete={this.handleDeleteCourse}/>
                            </div>
                            ]}>
                    <span className="card-title">{this.state.course.Name}</span>
                    <Collection>
                        <CollectionItem>
                            <strong>Codigo: </strong>
                            <span>{this.state.course.Code}</span>
                        </CollectionItem>
                        <CollectionItem><strong>Fecha de inicio: </strong>
                            <span>{new Date(this.state.course.StartDate).toLocaleDateString()}</span>
                        </CollectionItem>
                        <CollectionItem>
                            <strong>Duracion: </strong>
                            <span>{this.state.course.Duration}</span>
                        </CollectionItem>
                        <CollectionItem>
                            <strong>Tipo de curso: </strong>
                            <span>{this.state.course.TypeCourse}</span>
                        </CollectionItem>
                        <CollectionItem>
                            <strong>Modo: </strong>
                            <span>{this.state.course.Mode}</span>
                        </CollectionItem>
                        <CollectionItem>
                            <strong>Nivel: </strong>
                            <span>{this.state.course.Level}</span>
                        </CollectionItem>
                       
                    {
                        //    <CollectionItem>
                        //        <strong>Instructor del curso:</strong>
                        //        <span>{this.state.course.ProfessorID}</span>
                        //    </CollectionItem>
                    }
                    </Collection>
                    <Collection header='Listado de Clases'>
                        {
                            (!this.state.course.Classes || !this.state.course.Classes.length )
                            ? <CollectionItem active>|| Este curso aún no tiene clases ||</CollectionItem> 
                                : this.state.course.Classes.map((cls, index) =>
                                    <CollectionItem key={index}>{index + 1} - <a href={arrayRoutesDash.class+ cls.CodeClass}>{cls.TitleClass}</a>  </CollectionItem>)

                        }
                    </Collection>

                    <Collection header='Descripcion'>
                        {
                            (this.state.course.Description)
                                ?
                                <CollectionItem>
                                    {this.state.course.Description}
                                </CollectionItem>
                                :
                                <CollectionItem active>
                                    Sin Descripcion por el momento
                                </CollectionItem>
                        }
                    </Collection>
                    
                    <Collection header='Video Preview del curso'>
                        <CollectionItem>
                            {this.renderVideo(this.state.course.Video_preview, this.state.Thumbnail)}
                        </CollectionItem>
                    </Collection>

                    <Collection header='Temario'>
                        {
                            (this.state.course.Temary) 
                            ?
                                <CollectionItem >

                                    <strong><a href={this.state.course.Temary}>{this.state.course.Temary}</a>
                                    </strong>
                                </CollectionItem>
                            :
                                <CollectionItem active>
                                    Sin temario por el momento
                                </CollectionItem>
                        }
                    </Collection>
                    
                </Card>
            </Container>

        );
    }
}


