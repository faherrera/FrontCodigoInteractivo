import React, { Component } from 'react';
import axios from 'axios';


import {Card,
        CardTitle,
        Collection,
        CollectionItem} from 'react-materialize';

import { ProgressCircle } from './../../../../helpers/UI/misc';

import { _getResponse } from './../../../../helpers/responses';

//###Requests
//Requests Class
import {filterClassesByCourseCode} from './../../../../helpers/requests/ClassesRequest';
//Request Course
import { getAllCourses, getCourse} from './../../../../helpers/requests/CoursesRequest';

//Alert Dialog
import AlertRemove from './../partials/messages/alert';

///Components 
import EditCourse from './../edit/';
import {urlApi,urlApp,urlAppDashboard } from './../../../../helpers/requestConfig';

//Assets
import './style.css';

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
            editing: false
        }

        this.handleEditCourse = this.handleEditCourse.bind(this);
        this.handleDeleteCourse = this.handleDeleteCourse.bind(this);
    }

    componentDidMount() {
        let code = this.props.id;

        getCourse(code,(data) => {
            this.setState({
                course: data});
        });
        
        filterClassesByCourseCode(code,(data) => {
            this.setState({
                classes:data
            });
        })

        this.setState({
            loading:false,
        });
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
                return window.location = urlApp + 'dashboard/courses';
            }

        )
        .catch((error)=>{ alert("Ocurrió un error, por favor comuniquese con el administrador"); console.log(error.message);});

    }

    render() {
        let _level = ["Principiante","Intermedio","Avanzado"];
        let _mode = ["Presencial","Online"];
        let _type = ["Free","Premium"];


        if (this.state.loading) {
            return <ProgressCircle active={this.state.loading} /> 
        }

        if (this.state.editing) {
            return <EditCourse code={this.state.course.Code}/>
        }


        const url = 'http://localhost:17082/Uploads/Courses/';
        let pathImage = (this.state.course.Thumbnail !== '') ? url + this.state.course.Thumbnail : 'http://www.barracadefuegos.com.uy/wp-content/uploads/2016/11/sin-imagen-disponible-600x600.png';


        return (
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
                        <strong>Codigo:</strong>
                        <span>{this.state.course.Code}</span>
                    </CollectionItem>
                    <CollectionItem><strong>Descripcion:</strong>
                        <p>{this.state.course.Description}</p>
                    </CollectionItem>
                    <CollectionItem>
                        <strong>Duracion:</strong>
                        <span>{this.state.course.Duration}</span>
                    </CollectionItem>
                    <CollectionItem>
                        <strong>Tipo de curso:</strong>
                        <span>{_type[this.state.course.TypeCourse - 1 ]}</span>
                    </CollectionItem>
                    <CollectionItem>
                        <strong>Modo:</strong>
                        <span>{_mode[this.state.course.Mode - 1]}</span>
                    </CollectionItem>
                    <CollectionItem>
                        <strong>Nivel:</strong>
                        <span>{_level[this.state.course.Level - 1]}</span>
                    </CollectionItem>
                    <CollectionItem>
                        <strong>Video Preview:</strong>
                        <span>{this.state.course.Video_preview}</span>
                    </CollectionItem>
                    <CollectionItem>
                        <strong>Instructor del curso:</strong>
                        <span>{this.state.course.ProfessorID}</span>
                    </CollectionItem>
                </Collection>
                <Collection header='Listado de Clases'>
                    {
                        (this.state.classes.length > 0)
                        ? this.state.classes.map((cls, index) =>
                                <CollectionItem key={index}>{index + 1} - <a href={urlApiClass + cls.CodeClass}>{cls.TitleClass}</a>  </CollectionItem>)
                        : <CollectionItem>|| Este curso aún no tiene clases ||</CollectionItem> 

                    }
                </Collection>
                <Collection header='Temario'>
                    <CollectionItem>
                        <p>
                            • Introducción
                            • Content Providers de Sistema
                            • Content Providers Personalizados
                            • Practica
                        </p>
                    </CollectionItem>
                </Collection>
                
            </Card>
        );
    }
}


