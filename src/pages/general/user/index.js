import React, { Component } from 'react';

//Assets
import "./style.css";
import noUserImage from './../../../assets/img/noUserImage.jpg' 

//UI    
    //MATERIALIZE
    import { Tabs,Tab } from "react-materialize";

//Components
    import MyCourses from './mycourses/';

export default class UserSection extends Component {
    render() {
        return (
            <div className="user-page">
                <div className="user-container ">
                    <div className="user-header white-text ">
                        <img src={noUserImage} className="circle responsive-img" alt="Imagn del usuaro" />
                        <h3 className="user__title"> @faherreradev</h3> 
                    </div>
                    <div className="user-content black-text">
                        <Tabs className='user__navigation-tab'>
                            <Tab className="indicator-tab" title="Mis cursos" active>
                                <MyCourses />
                            </Tab>
                            <Tab className="indicator-tab" title="Configuracion" >
                                Modificar configuración.
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        );
    }
}