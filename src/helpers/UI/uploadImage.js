import React, { Component } from 'react';

export default class UploadImage extends Component {
    constructor(){
        super();

        this.state = {
            progresValue: 0
        }
    }
    render () {
        return (
            <progress style={{width:'100%'}} value="80" max="100"></progress>
        );
    }
}