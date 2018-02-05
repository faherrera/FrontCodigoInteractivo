import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

//UI
    import {
        Collection,
        CollectionItem,
        Button,
        Icon,
    } from 'react-materialize';
import { UpdateBool } from '../../../../../helpers/requests/UserCourseRequest';
export default class OwnCourses extends Component {

  static propTypes = {
    Courses: PropTypes.array,
    Username: PropTypes.string.isRequired,
    populateShow: PropTypes.func,   //Funcion que se disparará al hacer click para traer nuevamente al usuario.

  }

    HandleBtnAccess(codeCourse){
        let Username = this.props.Username;

        UpdateBool(codeCourse, Username, "Access", () => { this.props.populateShow()});

        

       
    }

    HandleBtnProfessor(codeCourse){
        this.props.populateShow();

        let Username = this.props.Username;

        UpdateBool(codeCourse, Username, "Professor", () => { this.props.populateShow() });


    }

  render() {
    const Courses = this.props.Courses;

    return (
        <Collection header='Inscripciones'>

            {
               (Courses.length) ? 
                Courses.map((value,index) => 
                (
                        <CollectionItem key={index} className="Collection-OwnCourses">
                            <strong> <a href="#!" > {value.Name} </a> </strong>
                            <div className="Own-Courses_buttons">
                                {
                                    (!value.Access) 
                                    ? <Button 
                                        waves='light' 
                                        className="red darken-3" 
                                                onClick={this.HandleBtnAccess.bind(this,value.CourseCode)}
                                        >
                                            Sin acceso 
                                            
                                        </Button> 
                                    : (value.IsProfessor) 
                                        ? <Button 
                                        waves='light' 
                                        className="green darken-3"
                                        disabled
                                        >
                                            Con acceso 
                                            <Icon right>
                                                done
                                            </Icon>
                                        </Button> 
                                        : <Button
                                                waves='light'
                                                className="green darken-3"
                                                onClick={this.HandleBtnAccess.bind(this, value.CourseCode)}
                                            >
                                                Con acceso
                                        <Icon right>
                                                    done
                                        </Icon>
                                            </Button> 
                                }
                                {
                                    (!value.IsProfessor) 
                                            ? <Button onClick={this.HandleBtnProfessor.bind(this,value.CourseCode)}waves='light' className="red darken-3">No es Profesor </Button> 
                                            : <Button onClick={this.HandleBtnProfessor.bind(this,value.CourseCode)}waves='light' className="green darken-3">Profesor <Icon right>done</Icon></Button> 
                                }
                               
                            </div>
                        </CollectionItem>
                )) 
                : 
                    <CollectionItem active>
                        <strong> No está inscripto en ningún curso aún </strong> <Icon right >sentiment_neutral</Icon>
                    </CollectionItem>
            
            }
               

        </Collection>
    )
  }
};
