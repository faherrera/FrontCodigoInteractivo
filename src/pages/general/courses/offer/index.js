import React from 'react';

//Components
import OfferItem from './offerItem';    //Item Course
import Filters from './filters';

export default class Offer extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            filter: ['backend']
        }
    }

    render(){
        
        return(
            <section className="page-offer">

                <div className="section blue-grey lighten-1">
                    
                    <div className="container">
                        <h3 className="section-title"> Oferta de cursos  </h3>
                    </div>

                </div>

                <div className="container">

                    
                    {
                        // Section Filters 
                        //<Filters/>
                    }

                    <div className="row">
                        <OfferItem
                            itemClass="col s12 m6 l4"
                            imgCard="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/courses/3609661/14575206662551_illu_Cre%CC%81ez%20votre%20premie%CC%80re%20application%20pour%20Android.png"
                            title="Desarollo Android Nativo"
                            shortDescription="En este curso realizaremos nuestros primeros pasos en Android, prepararemos nuestro entorno de desarrollo, conoceremos Android Studio, la estructura de una aplicación en Android y Gradle."
                            level="Principiante"
                        />
                        <OfferItem
                            itemClass="col s12 m6 l4 "
                            imgCard="http://materializecss.com/images/sample-1.jpg"
                            title="Desarollo Swift"
                            shortDescription="I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively."
                            level="Intermedio"

                        />
                        <OfferItem
                            itemClass="col s12 m6 l4 "
                            imgCard="https://www.sitepoint.com/wp-content/themes/sitepoint/assets/images/icon.php.png"
                            title="Desarollo PHP7"
                            shortDescription="I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively."
                            level="Avanzado"

                        />

                    </div>
                </div>
            </section>
        );
    }
}