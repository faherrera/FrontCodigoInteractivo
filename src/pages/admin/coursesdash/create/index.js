import React from 'react';


//Assets 
import './style.css';

//Stykes

export default class CreateCourse extends React.Component {
    render() {
        return (
            <div className="collection courses-section">

                <div className="input-field col s12">
                    <input id="first_name" type="text" className="validate"/>
                    <label >First Name</label>
               </div>
                <div className="input-field col s12">
                    <input id="first_name" type="text" className="validate"/>
                    <label >First Name</label>
               </div>
                <div className="input-field col s12">
                    <input id="first_name" type="text" className="validate"/>
                    <label >First Name</label>
               </div>
                
                <div className="input-field col s12">
                    <input id="first_name" type="text" className="validate"/>
                    <label >First Name</label>
               </div>

                <div className="input-field col s12">
                    <input id="first_name" type="text" className="validate"/>
                    <label >First Name</label>
               </div>

                <div className="input-field col s12">
                    <input id="first_name" type="text" className="validate"/>
                    <label >First Name</label>
               </div>

                <a href="#!" className="waves-effect  btn green darken-3"> Crear Curso (+)</a>

            </div>
        );
    }
}