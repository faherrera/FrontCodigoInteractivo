import React, { Component } from 'react';

//Styles
    import './style.css';
//UI MATERIALIZE
    import {Row, Icon, Container} from 'react-materialize';

//Routes
    import { arrayRoutesDash } from './../../../helpers/routesConfig'
export default class HomeDash extends Component {
    render() {
        return (

            <Container>
                <Row >
                    <CardManagment 
                        name="Cursos"
                        link={arrayRoutesDash.courses}
                        />
                    <CardManagment 
                        name="Usuarios"
                        link={arrayRoutesDash.users}
                        />
                    
                </Row>
                
                <Row>
                    <CardManagment
                        name="Recursos"
                        link={arrayRoutesDash.resources}
                    />
                    <CardManagment
                        name="Clases"
                        link={arrayRoutesDash.class}
                    />
                    
                </Row>
                <Row>
                    <CardManagment 
                        name="Inscripciones" 
                        size="l12"
                        link={arrayRoutesDash.enrollment}
                        />                    
                </Row>

            </Container>
        );
    }
}

const CardManagment = (props) => {
    let { 
            type="Listar ",
            name = "Nombre", 
            IconCard ="list",
            link ="#!",
            size = "l6"} = props;

    return <article className={ size + " card card-managment col s12 center "} >

        <h4 style={{fontWeight: 'bolder',}}> {name} Managment </h4>

        <a href={link} className=" card-managment__item hoverable indigo-text text-lighten-1 grey lighten-5 waves-effect ">
            <Icon large >
                {IconCard}
            </Icon>
            <h5> {type} {name} </h5>
        </a>


    </article>

};