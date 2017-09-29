//Requires
import React, { Component } from 'react';


//Components
import img from './dev-book-resized.jpg';



class Banner extends Component {
    constructor(props) {
        super(props);

    }



    render() {
        return (
            <section className="banner-container">
                <div className="parallax-container">
                    <div className="section no-pad-bot">
                        <div className="container">
                            <h1 className=" center banner-title"> Codigo Interactivo </h1>
                            <div className="row center">
                                <h5 className=" col s12 banner-subtitle">A través de cursos prácticos, concisos y actualizados, dictados por profesionales con experiencia </h5>
                            </div>
                            <div className="row center">
                                <a className="waves-effect waves-light btn modal-trigger"> Empezá desde aquí </a>
                            </div>
                        </div>
                    </div>
                    <div className="parallax">
                        <img src={img} alt={img}/>
                    </div>
                </div>


            </section>
        )
    }
}

export default Banner;
