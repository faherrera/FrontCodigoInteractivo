import React, { Component } from 'react';
import axios from 'axios';
//Components UI
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

///Request Courses
import { getAllCourses } from './../../../../helpers/requests/CoursesRequest';

import { getCourses } from './../helpers/request';

import { Modal, Button, Card, Col, CardTitle} from 'react-materialize';

import { ProgressCircle } from './../../../../helpers/UI/misc';
import { ServerMessageBox } from './../../../../helpers/UI/messages/ServerMessageBox';
import { arrayRoutes,arrayUpload} from './../../../../helpers/routesConfig';

const styles = {
    table: {

    },
    headStyle: {
        color: 'white',
        textAlign: 'left'
    },
    tableRowStyles: {
        color: 'white',
        textAlign: 'center'
    },
    tableBodyStyles: {}
}


export default class TableCourse extends Component {

    constructor(props){
        super(props);

        this.state = {
            loading: true,
            courses: [],
            message: "",
            messageServer: "",
        }

        this.handleShow = this.handleShow.bind(this);
    }
    componentDidMount() {
       this.handleCourses();    //Trayendo los cursos
    }

    /**
     * HandleCourses =>> Manejador del getAllCourses, lo tengo en una funcion aparte para poder usarlo en e
     * la funcion 'handleReload'.
     * 
     * getAllCourses=>> Este recibe un callback, el callback este será el el seteo del estado, pasandole 
     * nuevos datos al courses, diciendole que el load es false y en caso de que la response del state 
     * sea FALSE le grabaré el mensaje, sino le diré que me deje el mensaje vacio.
     */
    handleCourses() {
        getAllCourses((res) => {
            if (res.status) {
                return this.setState({
                    courses: res.data,
                    loading: false,
                    message:'',
                    messageServer:'',
                });
            }

            if (res.codeState == 0){
                return this.setState({
                    message:'',
                    messageServer: res.message,
                    loading: false
                });
            }

            console.log(res);

            return this.setState({
                message: res.message,
                messageServer: '',
                loading: false
            });


        });
    }

    /**
     * handleReload=> Esta funcion maneja el reload, le envio un loading:true para que mientras está 
     * haciendo la peticioon vea si tengo conexión o no
     */
    handleReload() {

        this.setState({
            loading:true,
        });

        this.handleCourses();

    }

    handleShow(e){
        // alert(e.target.name);
        window.location = arrayRoutes.courses+e.target.name;
    }

    render() {

        if (this.state.loading) {
            return <ProgressCircle active={this.state.loading} />
        }

        if (this.state.messageServer) {
            return <ServerMessageBox
                message={this.state.messageServer}
                onClick={this.handleReload.bind(this)}
                />
        }

        return (
            <div className="courses-container">
                <div className="row">
                    {
                        this.state.courses.map((course,index) => {
                            
                            let pathImage = (!course.Thumbnail) ? 'https://react-materialize.github.io/img/sample-1.jpg' : arrayUpload.courses+course.Thumbnail;
                        return  <Col key={index} m={4} s={12}>
                                    <Card 
                                        className='grey lighten-3 small hoverable' 
                                        textClassName='white-text' 
                                        title={course.Name}
                                        header={<CardTitle image={pathImage}></CardTitle>}
                                        actions={
                                            [
                                                <div key={index}className="actions-container" style={{display : 'flex',justifyContent:'flex-end'}}>
                                                    <a
                                                        href="#!"
                                                        name={course.Code}
                                                        onClick={this.handleShow} 
                                                        className="blue-text text-darken-3" 
                                                        > Ver más </a>
                                                </div>
                                            ]}>
                                    </Card>
                                </Col>
                        })
                    }
                </div>

                
            </div>
        );

    }
}