//Requires
import React, { Component } from 'react';


//Components

//Asets
import './banner.css';
import { arrayRoutesGeneral } from '../../../../helpers/routesConfig';


class Banner extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <section className="banner-container">
                    <div className="banner-item">
                        <h1 className=" center banner-title"> Codigo Interactivo </h1>
                        <div className="row center">
                            <h5 className=" col s12 banner-subtitle">A través de cursos prácticos, concisos y actualizados, dictados por profesionales con experiencia </h5>
                        </div>
                        <div className="row center">
                            <a href={arrayRoutesGeneral.courses} className="waves-effect waves-light btn modal-trigger"> Empezá desde aquí </a>
                        </div>
                    </div>


            </section>
        )
    }
}

export default Banner;
