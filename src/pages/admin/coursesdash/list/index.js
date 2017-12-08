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
import { ListMessage } from './../../../../helpers/UI/messages';
import { urlApi, urlApp ,endPointCourse,arrayUpload} from './../../../../helpers/requestConfig';

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
        }

        this.handleShow = this.handleShow.bind(this);
    }
    componentDidMount() {
       this.handleCourses();    //Trayendo los cursos
    }


    handleCourses() {
     console.log("Apre");
        getAllCourses((res) => {
            if (res.status) {
                return this.setState({
                    courses: res.data,
                    loading: false,
                    message:''
                });
            }

            return this.setState({
                message: res.message,
                loading: false
            });

        });
    }

    handleReload() {

        console.log('Presionando el reload');
        this.handleCourses();

    }

    handleShow(e){
        // alert(e.target.name);
        window.location = `${urlApp}dashboard/courses/${e.target.name}`
    }

    render() {

        if (this.state.loading) {
            return <ProgressCircle active={this.state.loading} />
        }

        if (this.state.message) {
            return <ListMessage
                message={this.state.message}
                onClick={this.handleReload.bind(this)} />
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