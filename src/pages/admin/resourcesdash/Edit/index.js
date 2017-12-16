import React, { Component } from 'react';

//Request

//Component
import FormResource from './../partials/Form/'; 
export default class Edit extends Component {
    constructor(props){
        super(props);

        this.state = {
            resource : {},
            loading:true,
            messageServer:'',
            message:'',

        }
    }

    componentDidMount() {
        this.setState({
            resource : this.props.resource,
            loading:false
        });
    }
    render() {
        return (
            <FormResource
                type="edit"
                resource={this.state.resource}
            />
        );
    }
}