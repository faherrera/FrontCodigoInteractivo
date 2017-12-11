import React, { Component } from 'react';

//UI
import { ProgressCircle } from './../../../../helpers/UI/misc';

//Component.
import FormClasses from './../partials/form';
import { getClass } from '../../../../helpers/requests/ClassesRequest';

//Request 

export default class EditClass extends Component {

    constructor(){
        super();
        this.state = {
            class:{},
            loading:true,
            message:''
        };
    }

    componentDidMount(){
       let id = this.props.id;  //Obtengo el ID.

       getClass(id,(res)=>{

            if (res.status) {
                this.setState({
                    class: res.data,
                    loading:false
                });
            }

           return this.setState({
               loading: false,
               message: res.message
           });
       });
    }

    render() {

        if (this.state.loading) {
            <ProgressCircle active={this.state.loading}/>
        }
        return (
            <FormClasses
                type="edit"
                class={this.state.class}
            />
        );
    }
}