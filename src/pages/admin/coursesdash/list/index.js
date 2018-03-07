import React, { Component } from 'react';

//Components UI
    import {
            Table,
            Icon,
            Button,
            Toast
        } from 'react-materialize';

///Request Courses
import { getAllCourses, changeAvailability } from './../../../../helpers/requests/CoursesRequest';

import { getCourses } from './../helpers/request';


import { ProgressCircle } from './../../../../helpers/UI/misc';
import { ServerMessageBox } from './../../../../helpers/UI/messages/ServerMessageBox';
import { arrayRoutesDash,arrayUpload} from './../../../../helpers/routesConfig';

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
        this.handleChangeAvailability = this.handleChangeAvailability.bind(this);
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


        },"Administrador");
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
        window.location = arrayRoutesDash.courses+e.target.name;
    }

    handleChangeAvailability(code){ 

        this.setState({
            loading:true,
        });
        
        changeAvailability(code, (res) => {

            if (res && res.status) {
                alert(res.message);
                return this.handleReload();
            }

            return this.setState({
                message: res.message,
                loading:false,
            });
        });

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
            <Table centered responsive hoverable centered>
                <thead>
                    <tr>
                        <th data-field="name">Code</th>
                        <th data-field="name">Name</th>
                        <th data-field="startDate">Fecha Inicio</th>
                        <th data-field="duration">Duracion</th>
                        <th data-field="typeCourse">Tipo</th>
                        <th data-field="level">Level</th>
                        <th data-field="price">Price</th>
                        <th data-field="status">Estado </th>
                        <th data-field="classes">Clases asociadas</th>
                        <th data-field="options">Detalle</th>

                    </tr>
                </thead>

                <tbody>

                {
                    this.state.courses.map((course,index) => {

                    let StartDate = new Date(course.StartDate).toLocaleDateString();

                    return  <tr key={index}>
                        <td>{course.Code}</td>
                                <td>{course.Name}</td>
                                <td>{StartDate}</td>
                                <td>{course.Duration}</td>
                                <td>{course.TypeCourse}</td>
                                <td>{course.Level}</td>
                                <td>${course.Price || "0.0"}</td>
                                <td>
                                    {
                                    course.Availability ?

                                        <Button
                                             waves='green'
                                             onClick={() => this.handleChangeAvailability(course.Code)}
                                             className="green lighten-2">
                                        Disponible<Icon right>tag_faces</Icon>
                                        </Button>
                                        :
                                        <Button
                                             waves='red'
                                             onClick={() => this.handleChangeAvailability(course.Code)}
                                             className="red lighten-1">
                                        No disponible<Icon right>pan_tool</Icon>
                                        </Button>
                                    }
                                </td>
                                <td>{course.Classes.length} Clases</td>
                                <td>
                                    <a className="btn blue accent-3" href={arrayRoutesDash.courses+course.Code}><Icon>forward</Icon></a>
                                </td>

                            </tr>
                    })
                }
                   
              
                </tbody>
            </Table>
        );

    }
}