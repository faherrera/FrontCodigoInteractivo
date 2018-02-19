import React, { Component } from 'react';

//Components UI
    import {
            Table,
            Icon
        } from 'react-materialize';

///Request Courses
import { getAllCourses } from './../../../../helpers/requests/CoursesRequest';

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
        window.location = arrayRoutesDash.courses+e.target.name;
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
            <Table centered responsive hoverable >
                <thead>
                    <tr>
                        <th data-field="id">ID</th>
                        <th data-field="name">Name</th>
                        <th data-field="duration">Duration</th>
                        <th data-field="typeCourse">Tipo</th>
                        <th data-field="level">Level</th>
                        <th data-field="price">Price</th>
                        <th data-field="options">Detalle</th>

                    </tr>
                </thead>

                <tbody>

                {
                    this.state.courses.map((course) => (
                        <tr key={course.Code}>
                            <td>{course.Code}</td>
                            <td>{course.Name}</td>
                            <td>{course.Duration}</td>
                            <td>{course.TypeCourse}</td>
                            <td>{course.Level}</td>
                            <td>{course.Price || "Aún sin colocar"}</td>
                            <td>
                                <a className="btn blue accent-3" href={arrayRoutesDash.courses+course.Code}><Icon>forward</Icon></a>
                            </td>

                        </tr>
                    ))
                }
                   
              
                </tbody>
            </Table>
        );

    }
}