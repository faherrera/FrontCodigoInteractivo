import React from 'react';
import FontIcon from 'material-ui/FontIcon';

export default class Temary extends React.Component{

    render(){
        return(
            <div className="tab-item collection">
                <h3 className="tab-title center"> Al terminar el curso, el alumno aprenderá </h3>

                <li>
                    <FontIcon className="material-icons verticalAlign">arrow_forward</FontIcon> Uno
                </li>

                <li>
                    <FontIcon className="material-icons verticalAlign">arrow_forward</FontIcon>

                    Aprenderá a preparar el entorno de desarrollo Android studio
                </li>


                <li>
                    <FontIcon className="material-icons verticalAlign">arrow_forward</FontIcon>

                    Conocerá las técnicas de debug de aplicaciones Android.
                </li>

                <li>
                    <FontIcon className="material-icons verticalAlign">arrow_forward</FontIcon>

                    Aprenderá a diseñar interfaces que sean operativas en teléfonos celulares y tablet.
                </li>

                <li>
                    <FontIcon className="material-icons verticalAlign">arrow_forward</FontIcon>

                    Aprenderá a utilizar los controles de datos y de usuario.
                </li>

                <li>
                    <FontIcon className="material-icons verticalAlign">arrow_forward</FontIcon>

                    Aprenderá a construir adaptadores personalizados para despliegue de información.
                </li>

                <li>
                    <FontIcon className="material-icons verticalAlign">arrow_forward</FontIcon>

                    Comprenderá los componentes principales de una aplicación android. 
                </li>

                <li>
                    <FontIcon className="material-icons verticalAlign">arrow_forward</FontIcon>
                    Desarrollara aplicaciones que trabajan con base de datos SQLITE. 
                </li>

                <li>
                    <FontIcon className="material-icons verticalAlign">arrow_forward</FontIcon>
                    Obtener conocimiento sobre las api disponibles para manipular el dispositivo.
                </li>

                <li>
                    <FontIcon className="material-icons verticalAlign">arrow_forward</FontIcon>

                    Sera capaz de crear Servicios de escucha en segundo plano.
                </li>

                <li>
                    <FontIcon className="material-icons verticalAlign">arrow_forward</FontIcon>

                    Que sea capaz de conectar a servicios rest utilizando json con medio de transporte.
                </li>

                <li>
                    <FontIcon className="material-icons verticalAlign">arrow_forward</FontIcon>

                    Sea capaz de desarrollar aplicaciones de geolocalización con google maps.
                </li>

                <li>
                    <FontIcon className="material-icons verticalAlign">arrow_forward</FontIcon>
                    Aprenderá a publicar aplicaciones en google play.
                </li>

            </div>
        );

    }
}