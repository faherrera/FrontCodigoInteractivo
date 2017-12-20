import React from 'react';

//Assets

import './testimonials.css';
import userTestimonial from "./user.jpg";
export default class Testimonials extends React.Component{


    render(){
        return(
            <div className="testimonial-container">

                            <div className="container">
                                <div className="row">
                                    <div className="col s12 center white-text text-testimonial">

                                        <div className="text-testimonial--quote">
                                            <blockquote>
                                                <p>
                                                    <i className="material-icons">format_quote</i>
                                                    Una institución totalmente seria, tienen metodología de enseñanza y saben llegar a través de su experiencia. Recomendado ya voy llevando 2 cursos y totalmente agradecido por todo.
                                            <i className="material-icons">format_quote</i>

                                                </p>
                                            </blockquote>
                                        </div>

                                        <div className="student-container">
                                            <div className="row">
                                                <div className="col s6">

                                                    <img src={userTestimonial} alt="" className="circle img-responsive testimonial-img-student " />

                                                </div>

                                            </div>

                                        </div>
                                        <div className="student-container">
                                            <div className="row">
                                                <div className="col s12">
                                                    <span> <i className="material-icons">school</i> <strong>Facundo Herrera </strong> - Estudiante de Codigo Interactivo  </span> <i className=" material-icons">sentiment_very_satisfied</i>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

        );
    }
}