import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

//UI
import {
    Card,
    CardTitle,
    Collection,
    CollectionItem,    
    Container
} from 'react-materialize';

import { ProgressCircle 
} from './../../../../helpers/UI/misc';

import AlertRemove from './../../../../helpers/UI/alerts';
import {ButtonShowCard} from './../../../../helpers/UI/form/button/ButtonShowCard';

//Assets
import './styles.css';
import cover from './../../../../assets/img/classPortada.jpg';
import noVideo from './../../../../assets/img/noVideo.jpg';

//URI
import {
    urlApi,
    routeCourse
} from './../../../../helpers/routesConfig';

//Request
import { getClass, deleteClass} from './../../../../helpers/requests/ClassesRequest';

//Components
import EditClass from './../edit/';

//Routes
import {  arrayRoutesDash } from "./../../../../helpers/routesConfig";



export default class ShowClass extends Component {

    constructor(props){
        super(props);

        this.state = {
            _class : {},
            loading:true,
            editing:false,
            message:''
        }

        this.handleClassEdit = this.handleClassEdit.bind(this);
        this.handleClassDelete = this.handleClassDelete.bind(this);
        this.renderVideo = this.renderVideo.bind(this);
    }
    componentDidMount() {
        let code = this.props.id;
        
        getClass(code,(res) => {
            if (res.status) {
                return  this.setState({
                        _class : res.data,
                        loading:false,
                    });
            }

            return this.setState({
                loading:false,
                message: res.message

            });

            
        });

    }

    handleClassEdit(){
        this.setState({
            editing:true,
        });
    }

    handleClassDelete(){
        console.log('Remove Class');
        deleteClass(this.props.id);
    }

    renderVideo(PathVideo) {
        
        if (!PathVideo) {
            return(
                <figure className="center">
                    <img src={noVideo} className="img-responsive circle" />
                    <h6> No tiene videos esta clase aún</h6>

                </figure>
            ) 
        }

        return <iframe src={PathVideo} allowFullScreen style={{ border: "none", width: "100%",height:'300px' }} />
    }

    render() {
        let data = this.state._class; 
        // let imagen ='http://www.meditea.com/home/wp-content/uploads/2015/07/cursos-banner-2.jpg';

        if(this.state.loading && !data){
            return <ProgressCircle active={this.state.loading} />
        }
        if(this.state.editing){
            return <EditClass id={data.CodeClass}/>
        }

        if(this.state.message){
            return <h1> EL ESTATUS ES FALSE, EL MENSAJE ES {this.state.message}</h1>
        }
        if (data) { //O tambien (data != {})
            return (
                <Container>
                    <Card 
                        className='card-show--classes'
                        header={<CardTitle image={cover}></CardTitle>}
                        actions={[<ButtonShowCard key={1} title={data.TitleClass} handleEdit={this.handleClassEdit} handleDelete={this.handleClassDelete}/>]}>
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
                                <strong>Curso perteneciente: </strong>
                                <span>{((data.Course != undefined) ? <a href={routeCourse+data.Course.Code}>{data.Course.Name}</a> : "No tiene")}</span>
                            </CollectionItem>
                        </Collection>

                        <Collection header='Recursos'>
                            
                            {
                                (!data.Resources || !data.Resources.length) ? <CollectionItem active> <span> No hay recursos cargados aún </span> </CollectionItem>:
                                    data.Resources.map((datum,i) => <CollectionItem key={i}>
                                        {i + 1}- <a href={arrayRoutesDash.resources + datum.CodeResource}>{datum.TitleResource}</a> </CollectionItem>)
                            }
                            
                        </Collection>

                        <Collection header='Video de la clase'>
                            {this.renderVideo(data.PathVideo)}
                        </Collection>

                        <Collection header='Descripcion'>
                            {
                                data.Description ? 
                                <CollectionItem>
                                    {data.Description}
                                </CollectionItem>:
                                <CollectionItem active> <span> No hay recursos cargados aún </span> </CollectionItem>
                            }
                        </Collection>
                        
                </Card>
            </Container>

            );
        }
        return <h1>No hay nada </h1>
    }
}

