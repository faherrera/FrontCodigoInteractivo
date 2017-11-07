import React, { Component } from 'react';
import axios from 'axios';

import {Card,CardTitle} from 'react-materialize';

import { ProgressCircle } from './../../../../helpers/UI/misc';

import { _getResponse } from './../../../../helpers/responses';

export default class ShowCourse extends Component {

    constructor(props){
        super(props);

        this.state = {
            course:{},
            loading:true
        }
    }

    componentDidMount() {
        let code = this.props.code;


        this.getCourse(code);

     
    }

    getCourse(code) {    //Traigo el curso.
        const url = 'http://localhost:17082/api/Courses/';

        let _gr = new _getResponse();

        let endPoint = url + code;

        axios.get(endPoint)
            .then(
            response => {
                console.log(response);
                _gr._codeState = response.data.codeState;
                _gr._obj = response.data.obj;
                _gr._message = response.data.message;
                _gr._status = response.data.status;

                return this.setState({
                    course: _gr._obj,
                    loading: false
                });
            })
            .catch(
            error => {
                console.log(error.message);
                _gr._message = error.message;

                return this.setState({
                    course: _gr.obj,
                    loading: false
                });

            }
            );

    }

    render() {


        console.log('====================================');
        console.log('====================================');
        console.log(this.state.course);
        console.log('====================================');
        console.log('====================================');

        if (this.state.loading) {
            return <ProgressCircle active={this.state.loading} /> 
        }

        const url = 'http://localhost:17082/Uploads/Courses/';
        let pathImage = (this.state.course.Thumbnail !== '') ? url + this.state.course.Thumbnail : 'http://www.barracadefuegos.com.uy/wp-content/uploads/2016/11/sin-imagen-disponible-600x600.png';

        return (
            <Card
                header={<CardTitle  image={pathImage}>{this.state.course.Name}</CardTitle>}
                actions={[<button key={1} className="red ligthen-3 btn">Borrar curso</button>]}>
                <p>{this.state.course.Description}</p>
                
            </Card>
        );
    }
}


