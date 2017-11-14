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
import { getCourses } from './../helpers/request';

import { Modal, Button, Card, Col, CardTitle} from 'react-materialize';

import { ProgressCircle } from './../../../../helpers/UI/misc';
import { ListMessage } from './../../../../helpers/UI/messages';
import { urlApi, urlApp } from './../../../../helpers/requestConfig';

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
        // console.clear();
        
        getCourses
            .then((response) => {
                this.loading();
                if (response._status) {
                    console.log("Correcto -> " + response._status);
                    this.setState({
                        courses: response._list
                    });
                } else {
                    this.setState({
                        message: response._message
                    });                    
                }
            });
    }


    requestListCourses() {
        this.loading();
        getCourses
            .then((response) => {

                if (response._status) {
                    console.log("Correcto -> " + response._status);
                    this.setState({
                        courses: response._list
                    });

                    console.log('/////***entrando-- deberia actualizar***////');
                } else {
                    this.setState({
                        message: response._message
                    });
                    console.log('/////***entrando xxxx -- deberia mostrar el mensaje de error***////');

                }
                this.loading();
                
            });
    }



    loading() {
        this.setState({
            loading: !this.state.loading
        });
    }

    reload() {

        this.requestListCourses();
        console.log('Aqui estoy recargando');

    }

    handleShow(e){
        // alert(e.target.name);
        window.location = `${urlApp}dashboard/courses/${e.target.name}`
    }

    render() {

        if (this.state.loading) {
            return <ProgressCircle active={this.state.loading} />
        }

        if (!this.state.courses.length > 0) {
            return <ListMessage
                message={this.state.message}
                onClick={this.reload.bind(this)} />
        }
        const url = 'http://localhost:17082/Uploads/Courses/';

        return (
            <div className="courses-container">
                <div className="row">
                    {
                        this.state.courses.map((course,index) => {
                            
                            let pathImage = (course.Thumbnail == '') ? 'https://react-materialize.github.io/img/sample-1.jpg' : url+course.Thumbnail;
                        return  <Col key={index} m={4} s={12}>
                                    <Card 
                                        className='grey lighten-3 small hoverable' 
                                        textClassName='white-text' 
                                        title={course.Name}
                                        header={<CardTitle image={pathImage}></CardTitle>}
                                        actions={
                                            [
                                                <div className="actions-container" style={{display : 'flex',justifyContent:'flex-end'}}>
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