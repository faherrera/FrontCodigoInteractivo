import React, { Component } from 'react';
import axios from 'axios';

//UI
import {
    Card,
    CardTitle,
    Collection,
    CollectionItem    
} from 'react-materialize';

//Assets
import './styles.css';

//URI
import {urlApi} from './../../../../helpers/requestConfig';

//Request

export default class ShowClass extends Component {

    constructor(props){
        super(props);

        this.state = {
            _class : {},
        }
    }
    componentDidMount() {
        let code = this.props.id;
        this.getClass(code);

        

    }

    getClass(code){
        let endPoint = `${urlApi}ClassesCourse/${code}`; 

        axios.get(endPoint)
        .then(
                response => {
                    if (response.data._status) {
                        let _class = (response.data._class != null) ? response.data._class : [];
                        
                        this.setState({
                            _class
                        });

                        return console.log('Excelente!');    
                    }
                    return console.log('No entrámos.');
                    
                })
        .catch(error => console.log(error));  
    }

    render() {
        let data = this.state._class; 
        let imagen ='http://www.meditea.com/home/wp-content/uploads/2015/07/cursos-banner-2.jpg';
        if (data != {}) {
            return (
                <Card 
                    className='card-show--classes'
                    header={<CardTitle image={imagen}></CardTitle>}
                    actions={[<a href='#'>This is a Link</a>]}>
                    <Collection header='Información de la clase'>
                        <CollectionItem>
                            <strong>Codigo: </strong>
                            <span>{data.CodeClass}</span>
                        </CollectionItem>
                        
                        <CollectionItem>
                            <strong>Titulo: </strong>
                            <span>{data.TitleClass}</span>
                        </CollectionItem>
                        <CollectionItem>
                            <strong>Descripción: </strong>
                            <span>{data.Description}</span>
                        </CollectionItem>
                        <CollectionItem>
                            <strong>Video: </strong>
                            <span>{data.PathVideo}</span>
                        </CollectionItem>
                        <CollectionItem>
                            <strong>Curso perteneciente: </strong>
                            <span>{((data.Course != undefined) ? data.Course.Name : "No tiene")}</span>
                        </CollectionItem>
                    </Collection>
                    
            </Card>
            );
        }
        return <h1>No hay nada </h1>
    }
}