import React, { Component } from 'react';

//UI MATERIALIZE
    import {Table} from 'react-materialize';

//UI MATERIAL-UI
    import { FontIcon} from 'material-ui'

//Requests getAllResources
    import {getAllResources  } from "./../../../../helpers/requests/ResourcesClassesRequest";

//Filters
import { filterFromCode } from "./../../../../helpers/filters/ClassFilter";

//UI CodigoInteractivo
    //Progress
    import { ProgressCircle } from "./../../../../helpers/UI/misc/index";
    //Alerts 
    import { ServerMessageBox } from "./../../../../helpers/UI/messages/ServerMessageBox/";

//Routes
import { arrayRoutes} from './../../../../helpers/requestConfig'
export default class List extends Component {

    constructor(props){
        super(props);

        this.state = {
            loading:true,
            resources: [],
            message:'',
            error:false,
            messageServer:'',
        }
    }

    componentDidMount() {
        this.populateList();
    }

    populateList(){
        getAllResources((res) => {
            if (res.status) {
                return this.setState({
                    resources: res.data,
                    loading: false
                });
            }

            if (res.codeState === 0) {
                return this.setState({
                    loading:false,
                    error:true,
                    messageServer:res.message,
                });
            }
            
            return this.setState({
                message: res.message,
                loading: false,
            });
        });
    }

    handleReload(){
        this.setState({
            loading:true,
            message: '',
            error: false,
            messageServer: '',
        });
        this.populateList();
    }
    render() {

        if (this.state.loading) {
            return <ProgressCircle active={this.state.loading}/>
        }
        if(this.state.messageServer && this.state.error){
            return <ServerMessageBox
                message={this.state.messageServer}
                onClick={this.handleReload.bind(this)}
            />
        }
        if(this.state.message){
            return <h1> El mensaje es  {this.state.message}</h1>
        }
        return (
            <Table responsive bordered hoverable centered>
                <thead>
                    <tr>
                        <th data-field="code">Codigo</th>
                        <th data-field="title">Nombre</th>
                        <th data-field="external">Link externo</th>
                        <th data-field="class">Clase perteneciente</th>
                        <th data-field="options">Opciones</th>
                    </tr>
                </thead>

                <tbody>
                    {   
                       this.state.resources.map((resource,index) => {
                            
                            return <tr key={index}>
                                <td>{resource.CodeResource}</td>
                                <td>{resource.TitleResource}</td>
                                <td><a target="_blank" href={resource.ExternalLink}>{resource.ExternalLink}</a> </td>
                                <td>
                                    <strong>
                                        {(resource.TitleClass != undefined) ? <a href={arrayRoutes.class + resource.Class_CourseID}> {resource.TitleClass} </a>  : 'Sin nombre'}
                                    </strong>
                                </td>
                                <td>
                                    <a href={`./${resource.CodeResource}`} className="btn blue accent-3">
                                        <FontIcon className="blue accent-3 material-icons">forward</FontIcon>
                                    </a>
                                </td>
                            </tr>
                       } )                     
                        

                    }
                </tbody>
            </Table>
        );
    }
}