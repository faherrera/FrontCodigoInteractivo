import React from 'react';


import PromoItem from './promoitem';

import './promo.css';

export default class Promo extends React.Component{

    render(){
        return(
            <section className="promo-section">

                <div className="container">

                    <div className="promo-container">
                        
                        <div className="col s12 m4 ">
                            <PromoItem
                                icon="important_devices"
                                title="Desarrollo a Medida"
                                description="Realizamos desarrollo de software a medida en tecnologías como ASP.NET C# JAVA JSP con el objetivo de lograr cubrir las necesidades de nuestros cliente y acompañarlos en el crecimiento de su unidades de negocio por medio de la automatización de procesos con el uso de la tecnología."
                            />
                        </div>

                        <div className="col s12 m4 ">
                            <PromoItem
                                icon="smartphone"
                                title="Desarrollo de App Mobile"
                                description="Tenemos experiencia en el desarrollo de app mobile en plataformas Android y IOS. Realizamos desarrollos específicos para empresas y app de uso general de clientes, participamos desde la etapa de relevamiento hasta su implementación en las diferentes plataformas donde van a residir las aplicaciones."
                            />

                        </div>

                        <div className="col s12 m4 ">
                            <PromoItem
                                icon="sentiment_very_satisfied"
                                title="Formacion de Profesionales"
                                description="Realizamos desarrollo de software a medida en tecnologías como ASP.NET C# JAVA JSP con el objetivo de lograr cubrir las necesidades de nuestros cliente y acompañarlos en el crecimiento de su unidades de negocio por medio de la automatización de procesos con el uso de la tecnología."
                            />
                        </div>

                    </div>
                </div>

            </section>
        );
    }
}