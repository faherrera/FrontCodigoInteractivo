import React, { Component } from 'react';
import axios from 'axios';

import FormCourse from './../helpers/form/';


import { getResponse } from './../../../../helpers/responses';
import { getCourse } from './../../../../helpers/requests/CoursesRequest';

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

        getCourse(code,(res)=>{

            if (res.status) {
                return this.setState({
                    course: res.data,
                    loading:false,
                });
            }

            return this.setState({
                loading:false,
                message:res.message
            });

        });
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