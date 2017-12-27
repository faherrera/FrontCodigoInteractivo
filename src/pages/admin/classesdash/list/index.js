import React, { Component } from 'react';

//UI Materialize
import {  Table } from "react-materialize";
//UI Material-UI
import FontIcon from 'material-ui/FontIcon';
//UI CodigoInteractivo
import { ProgressCircle } from "./../../../../helpers/UI/misc/index";

//#Request
import {getAllClasses} from './../../../../helpers/requests/ClassesRequest';

//Routes
import {arrayRoutes} from './../../../../helpers/routesConfig';
const styles = {
    options: { display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50px' }
}
export default class ListClass extends Component {

    constructor(){
        super();

        this.state = {
            listado: [],
            loading:true,
            error:false,
            message:""
        }
    }
    componentDidMount() {
        this.populateTable();
    }

    populateTable(){
        getAllClasses((res) => {
            if (res.status) {
                return this.setState({
                    listado: res.data,
                    loading: false
                });
            }

            this.setState({
                error: true,
                message: res.message
            });
        });
    }

    render() {

        if (this.state.error) {
            return <div> <h1>Ha ocurrido un error, el estado es falso, verificar la conexión por favor.</h1>  <p>{this.state.message}</p></div>   
        }

        if (this.state.loading) {
            return <ProgressCircle 
                // active={this.state.loading}
            />
        }
        return (
            <Table responsive bordered hoverable>
                <thead>
                    <tr>
                        <th data-field="code">Codigo</th>
                        <th data-field="title">Titulo</th>
                        <th data-field="course">Curso</th>
                        <th data-field="options">Opciones</th>
                       
                    </tr>
                </thead>

                <tbody>

                    {
                        (this.state.listado.length > 0) ? this.state.listado.map( (c,index) => {
                            return <tr key={index}>
                                        <td>{c.CodeClass}</td>
                                        <td>{c.TitleClass}</td>
                                        <td>
                                            <strong> {(c.Course) ? c.Course.Name : 'No tiene Curso Asignado'}
                                            </strong>
                                        </td>
                                        <td>
                                            <a href={arrayRoutes.class+c.CodeClass} className="btn blue accent-3" style={styles.options}>
                                                <FontIcon className="blue accent-3 material-icons">forward</FontIcon>
                                            </a>
                                        </td>

                                    </tr>
                        }) : <span> No tengo datos </span>
                    }
                    
                </tbody>
            </Table>
        );
    }
}