import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

//UI Materialize
import { Row, Input } from 'react-materialize';

//UI Material-UI
import AutoComplete from 'material-ui/AutoComplete';
import { ProgressCircle } from './../../../misc';


//Request Config
import { urlApi } from './../../../../requestConfig';
import { getAllCourses} from './../../../../requests/CoursesRequest';

//Filters 
import { filterByHisCode} from './../Utils/Filter';

//Factory
import { ClassesFactoryAutocomplete } from './../Utils/Factory';

//Assets
import './styles.css';
import { getAllClasses } from '../../../../requests/ClassesRequest';

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
    value: 'value',
};

export class AutocompleteClass extends Component {

    constructor(props) {
        super(props);

        this.state = {
            listado: props.listado ? props.listado : [],
            value: props.value ? props.value : undefined,
            status: false,
            loading: false,
            message: 'No hay ningún dato cargado',
            searchText:'',
        }
    }
    
    componentWillReceiveProps(nextProps){
        
        // console.log('Entrando al nextProps DE AutcompleteCourse');
        //Si no se cargó todavia el listado, lo recibiré despues de manera asincronica.

        if (this.state.value == undefined) {
            this.setState({
                value: nextProps.value
            });
        }

        // if (this.state.listado.length == 0) {
        //     console.log(`El Listado del state no tiene datos. || ListadosState: ${this.state.listado.length} || NEXTPROPSLISTADO : ${nextProps.listado.length}` );
            
        //     this.setState({
        //         listado : nextProps.listado
        //     });
        // }
    }

    populateList(){

        //Traigo los cursos.
        getAllClasses((res)=>{

            if (res.status) {
                console.log("< ==================<##DEBUG=>POPULATELIST========================");

                let factoryList = ClassesFactoryAutocomplete(res.data);
                console.log(factoryList);
                
                let filtering = filterByHisCode(this.state.value, factoryList);
                console.log(filtering);
                
                return this.setState({
                    searchText: (filtering != undefined) ? filtering.title : '',
                    status: true,
                    listado: factoryList,
                    loading:false
                });
                console.log("< ==================##DEBUG=>POPULATELIST />========================");
                            
            }

            this.setState({
                status:false
            });
        });
    }
    componentDidMount() {
      
        // console.clear();
        this.populateList();
       
        
    }

    /**
     * handleUpdate =>>Necesario para setear los valores del input.
     * @param {STRING} searchText => Este es el valorq ue estoy ingresando por el input.
     */
    handleUpdate(searchText){

        this.setState({
            searchText
        });
    }
    handleRequest(chosenRequest, index) {
        console.log('=============UPDATING=================');

        console.log(this.props);
        console.log(` El nombre es ${chosenRequest.title}`);
        console.log(` El ID es ${chosenRequest.value}`);
        console.log('=================UPDATING===================');

        this.setState({
            value: chosenRequest.value,
            status: true
        })
    }

    getValue() {

        let _response = new Response(); //Instancio una respuesta.

        /**
         * En caso de que no tenga valor o sea igual a 0 debo indicar que stats es false.
         */
        if (this.state.value) {
            if (this.state.status) { //Si es correcto enviarlo.
                _response.status = true;
                _response.value = this.state.value;
                _response.message = "OK"
                return _response;   //Devuelvo el dato valido.
            }
            _response.message = this.state.message;

            return _response;
        }
        _response.message = "Debe seleccionar un valor correcto para la clase perteneciente.";

        return _response;

        

    }

    render() {
        if (this.state.loading) {
            return <ProgressCircle
                active={true}
                size={30}
            />
        }

        if (!this.state.status) {

            return <Input s={12} label="Elegír la clase a la cual pertenece" defaultValue="No hay conexión, por favor revisar." disabled />
        }

        return (

            <AutoComplete
                className="autocomplete"
                fullWidth={true}
                floatingLabelText="Elegír la clase a la cual pertenece"
                filter={AutoComplete.fuzzyFilter}
                dataSource={this.state.listado}
                dataSourceConfig={dataSourceConfig}
                onUpdateInput={this.handleUpdate.bind(this)}
                onNewRequest={this.handleRequest.bind(this)}
                maxSearchResults={10}
                menuProps={menuProps}
                searchText={this.state.searchText}
            />
        );
    }
}