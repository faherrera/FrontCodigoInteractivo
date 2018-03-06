import React, { Component } from 'react';

import error from './../../../assets/img/404.jpg'
export default class Error404 extends Component {
    
    render() {
        return (
            <div className="" style={{display: 'flex',flex:'1', flexDirection: 'column',alignItems: 'center', justifyContent:'center'}}>
                <p> 
                    La direccion solicitada no existe, por favor intente otra direccion. 
                </p>

                <h4 className=""> Codigo Interactivo </h4>

                <img src={error} />
            </div>
        );
    }
}