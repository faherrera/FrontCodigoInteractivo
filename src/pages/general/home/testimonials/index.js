import React from 'react';

//Assets

import './testimonials.css';

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
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            <i className="material-icons">format_quote</i>

                                                </p>
                                            </blockquote>
                                        </div>

                                        <div className="student-container">
                                            <div className="row">
                                                <div className="col s6">

                                                    <img src="https://faherrera.github.io/images/perfil/burns_400x400.jpg" alt="" className="circle img-responsive testimonial-img-student " />

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