import React, { Component } from 'react';

//assets
import './style.css';
//UI
    //materialize
        import { Col, Card, CardTitle } from "react-materialize";

//Routes
    import { arrayRoutesGeneral } from "./../../../routesConfig";
export default class SimpleCourseCard extends Component {
    actions = ()=> {
        let { level, code } = this.props;

        return (<div key="simple" className="actions-container">
            <span> <i className="material-icons">info_outline</i> {level} </span>
            <a href={arrayRoutesGeneral.courses+code}>Ver más</a>
        </div>)

    };
    render() {

        let {title,description,image} = this.props;

        image = image ? image : "https://pbs.twimg.com/profile_images/763061332702736385/KoK6gHzp.jpg";

        return (

            <Card
                className="course-card"
                header={<CardTitle image={image}></CardTitle>}
                actions={[this.actions()]}>
                <h5 className="course-card__title"> {title} </h5>
                <p className="course-card__text">{description}</p>
            </Card>

        );
    }
}