import React, { Component } from 'react';
import axios from 'axios';

import FormCourse from './../helpers/form/';


import { _getResponse } from './../../../../helpers/responses';

//UI
import { ProgressCircle } from './../../../../helpers/UI/misc';

export default class EditCourse extends Component {

    constructor(props){
        super(props);

        this.state = {
            course:{},
            loading : true
        }
    }

    componentDidMount(){
        let code = this.props.code;


        this.getCourse(code);
    }


    getCourse(code){    //Traigo el curso.
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

        if (this.state.loading) {
            return <ProgressCircle active={this.state.loading}/> 
        }


        return (
            <FormCourse
                type='edit'
                course={this.state.course}
            />     
            
        );

    }
}