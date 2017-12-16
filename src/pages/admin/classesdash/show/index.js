import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

//UI
import {
    Card,
    CardTitle,
    Collection,
    CollectionItem    
} from 'react-materialize';

import { ProgressCircle 
} from './../../../../helpers/UI/misc';

import AlertRemove from './../../../../helpers/UI/alerts';
import {ButtonShowCard} from './../../../../helpers/UI/form/button/ButtonShowCard';

//Assets
import './styles.css';
import cover from './../../../../assets/img/classPortada.jpg';

//URI
import {
    urlApi,
    routeCourse
} from './../../../../helpers/requestConfig';

//Request
import { getClass, deleteClass} from './../../../../helpers/requests/ClassesRequest';

//Components
import EditClass from './../edit/';

//Routes
import {  arrayRoutes } from "./../../../../helpers/requestConfig";
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
                            <strong>Descripcion: </strong>
                            <p>{(!data.Description) ? "No posee descripción" : data.Description}</p>
                        </CollectionItem>
                        <CollectionItem>
                            <strong>Video: </strong>
                            <span>{data.PathVideo}</span>
                        </CollectionItem>
                        <CollectionItem>
                            <strong>Curso perteneciente: </strong>
                            <span>{((data.Course != undefined) ? <a href={routeCourse+data.Course.Code}>{data.Course.Name}</a> : "No tiene")}</span>
                        </CollectionItem>
                    </Collection>

                    <Collection header='Recursos'>
                        
                        {
                            (!data.Resources) ? <CollectionItem><span> No hay recursos </span> </CollectionItem>:
                                data.Resources.map((datum,i) => <CollectionItem key={i}>
                                    {i + 1}- <a href={arrayRoutes.resources + datum.CodeResource}>{datum.TitleResource}</a> </CollectionItem>)
                        }
                        
                    </Collection>
                    
            </Card>
            );
        }
        return <h1>No hay nada </h1>
    }
}