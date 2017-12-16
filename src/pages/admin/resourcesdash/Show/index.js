import React, { Component } from 'react';

//UI
    //UI MATERIALIZE
    import {
        Card,
        CardTitle,
        Collection,
        CollectionItem
    } from 'react-materialize';
    
    //UI CODIGO INTERACTIVO
    import {
        ProgressCircle
    } from './../../../../helpers/UI/misc';
    import { ButtonShowCard } from './../../../../helpers/UI/form/button/ButtonShowCard';


    //Assets
    import cover from './../../../../assets/img/resourcePortada.jpg'

//Request
    import { getResource,deleteResource } from '../../../../helpers/requests/ResourcesClassesRequest';

//Routes
    import { arrayRoutes} from './../../../../helpers/requestConfig';

//Components
    import Edit from './../Edit/';

export default class Show extends Component {
    constructor(props){
        super(props);

        this.state = {
            code: props.id,
            resource:{},
            loading:true,
            message:'',
            editing:false
        }

        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount() {
        this.populateResource();
    }

    populateResource(){
        let code = this.state.code;
        getResource(code, (res) => {

            if (res.status) {
                return this.setState({
                    resource: res.data,
                    loading:false
                });
            }

            return this.setState({
                loading: false,
                message: res.message
            });

        });

    }

    handleEdit(){
        this.setState({
            editing: true,
        });   
    }
    
    handleDelete(){
        console.log("Clickee en handle Delete");
        deleteResource(this.state.code);
    }

    render() {
        let data = this.state.resource;
        if (this.state.loading) {
            return <ProgressCircle active={this.state.loading}/>
        }

        if (this.state.message) {
            return <h1>Error en la petición -> {this.state.message}</h1>
        }

        if (this.state.editing) {
            return <Edit id={this.state.code} resource={this.state.resource} />
        }

        return (
            <Card
                className='card-show--classes'
                header={<CardTitle image={cover}></CardTitle>}
                actions={[<ButtonShowCard key={1} title={data.TitleResource} handleEdit={this.handleEdit} handleDelete={this.handleDelete} />]}>
                <Collection header='Información del Recurso'>
                    <CollectionItem>
                        <strong>Codigo: </strong>
                        <span>{data.CodeResource}</span>
                    </CollectionItem>

                    <CollectionItem>
                        <strong>Titulo: </strong>
                        <span>{data.TitleResource}</span>
                    </CollectionItem>
                    <CollectionItem>
                        <strong>Link externo: </strong>
                        <span> 
                            <a target="_blank" href={`http://${data.ExternalLink}`}> {data.ExternalLink}</a>
                        </span>
                    </CollectionItem>
                    <CollectionItem>
                        <strong>Clase perteneciente: </strong>
                        <span>{(data.TitleClass != undefined) ? <a href={arrayRoutes.class + data.Class_CourseID}> {data.TitleClass} </a> : 'Sin nombre'}</span>
                    </CollectionItem>
                </Collection>

            </Card>
        );
    }
}