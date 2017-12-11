import axios from 'axios';

import { urlApi,endPointCourse } from './../requestConfig';

import {
    getResponse
} from './../responses/';

/**
 *  Traigo todos los cursos que tengo. recibo un callback para saber que hacer despues, por lo general seteo una propiedad del state.
 * @param {function} call 
 * @returns getResponse(codigo,mensaje,status,data)
 */
export const getAllCourses = (call) => {

    axios.get(endPointCourse)
    .then(
        response =>{
            let data = response.data;
            let res = new getResponse(data.codeState, data.message, data.status, data.data);
            console.log('==========***///***');
            console.log(data);
            console.log(res);
            console.log('==========***///***');
            call(res);
        }
    )
    .catch(error => {
        console.log(error);
        let res = new getResponse(0, error.message,false,null);
        call(res);
    });
}

export const getCourse = (code,call) =>{

    let urlGet = endPointCourse+code;  //URL DE LA API + EL CODIGO DEL CURSO.
    let res = null;

    axios.get(urlGet)
        .then(
        response => {
            let data = response.data;
            
            res = new getResponse(data.codeState,data.message,data.status,data.data);
            console.log(res);

            call(res);
        })
        .catch(error => {
            res= new getResponse(0,error);
            call(res); 
        });
}