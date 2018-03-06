import React, { Component } from 'react';

//Assets
import "./style.css";
import noUserImage from './../../../assets/img/noUserImage.jpg' 

//UI    
    //MATERIALIZE
    import { Tabs,Tab } from "react-materialize";

//Components
    import MyCourses from './mycourses/';
    import MyAccount from './myaccount/';
import { arrayUpload } from '../../../helpers/routesConfig';

export default class UserSection extends Component {

    state = {
        tab: this.selectTab(),
    }


    selectTab(){
        let {param} = this.props;
        
        let whiteList = ["miscursos","pendientes","account"];

        if (whiteList.indexOf(param) == -1 || !param) {
                        
            return whiteList[0];
        }
        
        return whiteList[whiteList.indexOf(param)]
    }

    render() {
       
        let userImage = window.localStorage.Image !== "undefined" ? arrayUpload.users + window.localStorage.Image : noUserImage;

        return (
            <div className="user-page">
                <div className="user-container ">
                    <div className="user-header white-text ">
                        <img src={userImage} className="circle responsive-img" alt="Imagn del usuaro" />
                        <h3 className="user__title"> @{window.localStorage.Username}</h3> 
                    </div>
                    <div className="user-content black-text">
                        <Tabs className='user__navigation-tab'>
                            <Tab className="indicator-tab" title="Mis cursos" active={this.state.tab == "miscursos" ? true : null}>
                                <MyCourses 
                                    filter="Access"
                                    valueFilter="true"
                                />
                            </Tab>
                            <Tab className="indicator-tab" title="Pendiente de confirmación" active={this.state.tab == "pendientes" ? true : null}>
                                <MyCourses 
                                    filter="Access"
                                    valueFilter="false"
                                />
                            </Tab>
                            
                                <Tab className="indicator-tab" title="Configuracion" 
                                active={this.state.tab == "account" ? true : null}
                                >
                                <MyAccount />
                                </Tab>

                        </Tabs>
                    </div>
                </div>
            </div>
        );
    }
}