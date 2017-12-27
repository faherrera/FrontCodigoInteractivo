import React, { Component } from 'react';

//Assets

class About extends Component {
    render() {
        return (
            <div className="about-class">

                <div className="about-class__description">
                    <div className="row">
                        <div className="col s12">
                            <div className="card">
                                <div className="card-content">
                                    <span className="card-title ">Descripción</span>
                                    <hr />
                                    <p>
                                        {this.props.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-class__listado">
                    <div className="row">
                        <div className="col s12">
                            <div className="card">
                                <div className="card-content">
                                    <span className="card-title ">Listado de clases</span>
                                    <hr />

                                    <div className="collection">
                                        <a href="#!" className="collection-item"> 1. <strong> Introduccion </strong>  </a>
                                        <a href="#!" className="collection-item"> 2. <strong> Instalacion </strong> </a>
                                        <a href="#!" className="collection-item"> 3. <strong> Primer desarollo </strong> </a>
                                        <a href="#!" className="collection-item"> 4. <strong> Conociendo el entorno </strong></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default About;
