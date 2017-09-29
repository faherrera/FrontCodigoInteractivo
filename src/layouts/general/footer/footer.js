import React from 'react';

//Components UI
import './footer.css';

export default class FooterGeneral extends React.Component {

    render() {
        return (
            <footer className="page-footer  blue-grey darken-2">
                <div className="container">
                    <div className="row">

                        <div className="col s12 m6 center">
                            <h5 className="white-text">Nuestros Links</h5>
                            <ul>
                                <li>
                                    <a href="#!" className="grey-text text-lighten-3">¿Quienes somos?</a>
                                </li>
                                <li>
                                    <a href="#!" className="grey-text text-lighten-3">Servicios</a>
                                </li>
                                <li>
                                    <a href="#!" className="grey-text text-lighten-3">Contacto</a>
                                </li>
                                <li>
                                    <a href="#!" className="grey-text text-lighten-3">Portfolio</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col s12 m6 ">
                            <h4 className="white-text center ">
                                <i className="material-icons verticalAlign">devices</i>  Codigo Interactivo
                                </h4>
                            <h6 className="grey-text text-lighten-4 center">Aprende a desarollar con nosotros</h6>
                            
                            <div className="social-network-footer center grey-text text-lighten-4">
                                <div className="social-network-menu">
                                    <a href="https://www.facebook.com/codigointeractivo/" className="zocial-facebook"></a>
                                    <a href="https://www.twitter.com/codigointeractivo/" className="zocial-twitter"></a>
                                    <a href="https://www.youtube.com/channel/UC78qlW4y9MSqWmpUQPcHayg" className="zocial-youtube"></a>
                                    <a href="https://www.linkedin.com/in/codigointeractivo/" className="zocial-linkedin"></a>
                                </div>

                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © 2017 Codigo Interactivo
            <a className="grey-text text-lighten-4 right" href="https://faherrera.github.io/">faherrera</a>
                    </div>
                </div>
            </footer>
        );
    }
}