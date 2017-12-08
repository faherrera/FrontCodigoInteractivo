import React, { Component } from 'react';
import axios from 'axios';

//UI Materialize
import { Row, Input } from 'react-materialize';

//UI Material-UI
import AutoComplete from 'material-ui/AutoComplete';
import { ProgressCircle } from './../../misc';


//Request Config
import { urlApi } from './../../../requestConfig';
import { getAllCourses} from './../../../requests/CoursesRequest';


//Assets
import './styles.css';

export function Response(status = false, value = '', message = '') {
    this.status = status;
    this.value = value;
    this.message = message;
}


const menuProps = {
    desktop: true,
    disableAutoFocus: true,
};

const dataSourceConfig = {
    text: 'title',
    value: 'id',
};

export class AutocompleteUI extends Component {

    constructor(props) {
        super(props);

        this.state = {
            listado: [],
            courseid: null,
            status: false,
            loading: true,
            message: 'No hay ningún dato cargado',
        }
    }

    componentDidMount() {
        getAllCourses((data)=>{
            let courses = data.data; //Lo pongo en una variable local.
            for (let item of courses) { //Itero sobre el array de datos traidos.
                let objeto = new Object();  //Creo un objeto para asignarle los valores.

                objeto.title = item.Name;
                objeto.id = item.Code;

                this.setState({
                    listado: [...this.state.listado, objeto], //Guardo los objetos en el array.
                });
            }

        });

        this.setState({
            loading:false,
        });
    }

    handleRequest(chosenRequest, index) {
        console.log('=============UPDATING=================');
        console.log(` El nombre es ${chosenRequest.title}`);
        console.log(` El ID es ${chosenRequest.id}`);
        console.log('=================UPDATING===================');

        this.setState({
            courseid: chosenRequest.id,
            status: true
        })
    }

    getValue() {

        let _response = new Response(); //Instancio una respuesta.


        if (this.state.status) { //Si es correcto enviarlo.
            _response.status = true;
            _response.value = this.state.courseid;
            _response.message = "OK"
            return _response;   //Devuelvo el dato valido.
        }

        _response.message = this.state.message;

        return _response;

    }

    render() {
        if (this.state.loading) {
            return <ProgressCircle
                active={true}
                size={30}
            />
        }

        if (this.state.listado.length <= 0) {

            return <Input s={12} label="Elegír el curso al cual pertenece" defaultValue="No hay conexión, por favor revisar." disabled />
        }

        return (

            <AutoComplete
                className="autocomplete"
                fullWidth={true}
                floatingLabelText="Elegír el curso al cual pertenece"
                filter={AutoComplete.fuzzyFilter}
                dataSource={this.state.listado}
                dataSourceConfig={dataSourceConfig}
                onNewRequest={this.handleRequest.bind(this)}
                maxSearchResults={10}
                menuProps={menuProps}
            />
        );
    }
}