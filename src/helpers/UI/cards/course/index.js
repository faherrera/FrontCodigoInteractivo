import React, { Component } from 'react';

//assets
    import './style.css';
    import noImage from "./../../../../assets/img/noimage.jpg";
//UI
    //materialize
        import { Col, Card, CardTitle } from "react-materialize";

//Routes
    import { arrayRoutesGeneral ,arrayUpload} from "./../../../routesConfig";


/**
 * SimpleCourseCard => Lo llamo simple porque es el estandar, posiblemente lo cambie en el futuro.
 * 
 */
export default class SimpleCourseCard extends Component {
    actions = ()=> {
        let { level, linkOption , mode , actions} = this.props;

        return (<div key="simple" className="actions-container">
            {actions}
        </div>)

    };

    render() {

        let {title,description,image} = this.props;

        image = image ? arrayUpload.courses + image : noImage;

        return (

            <Card
                className={`course-card `}
                header={<CardTitle image={image}></CardTitle>}
                actions={[this.actions()]}>
                <h5 className="course-card__title center-align truncate"> {title} </h5>
                {
                    //<p 
                    // ref="textoCard" 
                    // className="course-card__text">{description}
                    // </p>
                }
            </Card>

        );
    }
}