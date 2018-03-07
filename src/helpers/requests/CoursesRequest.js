import axios from 'axios';

import { urlApi,endPointCourse,arrayEndpoints } from './../routesConfig';

import {
    getResponse
} from './../responses/';

/**
 *  Traigo todos los cursos que tengo. recibo un callback para saber que hacer despues, por lo general seteo una propiedad del state.
 * @param {function} call 
 * @returns getResponse(codigo,mensaje,status,data)
 */
export const getAllCourses = (call, rol = "Estudiante") => {

    let url = rol == "Estudiante" ? arrayEndpoints.courses +"?rol=" : arrayEndpoints.courses + "?rol=Administrador";
    axios.get(url)
    .then(
        response =>{
            let data = response.data;
            let res = new getResponse(data.codeState, data.message, data.status, data.data);
          
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

export const postCourse = (data, call) => {
    console.log('Estoy intentando crear un curso.');
    let res;
    axios({
        method: 'POST',
        url: arrayEndpoints.courses,
        data
    })
        .then(
        response => {
            let responseData = response.data;
            res = new getResponse(responseData.codeState, responseData.message, responseData.status, responseData.data);
            console.log("< ==================<##DEBUG=>RESPONSE POST Course========================");
            console.log(res);
            console.log("< ==================<##DEBUG=>RESPONSE POST Course========================");
            call(res);
        })
        .catch(error => {
            alert("estoy aquí, en el error de postCourse " + arrayEndpoints.courses);
            res = new getResponse(0, error.message, false);
            call(res);

        });
}
export const putCourse = (code,data, call) => {
    console.log('Estoy intentando Editar un curso.');
    let res;
    axios({
        method: 'PUT',
        url: arrayEndpoints.courses+code,
        data
    })
        .then(
        response => {
            let responseData = response.data;
            res = new getResponse(responseData.codeState, responseData.message, responseData.status, responseData.data);
            console.log("< ==================<##DEBUG=>RESPONSE put Course========================");
            console.log(res);
            console.log("< ==================<##DEBUG=>RESPONSE put Course========================");
            call(res);
        })
        .catch(error => {
            alert("estoy aquí, en el error de pUTtCourse " + arrayEndpoints.courses+code);
            res = new getResponse(0, error.message, false);
            call(res);

        });
}

export const changeAvailability = (code,call) => {
    axios({
        method: 'POST',
        url: arrayEndpoints.courses +"Availability/",
        params: {
            id: code
        }
        
    })
        .then(
        response => {
            let responseData = response.data;
             let res = new getResponse(responseData.codeState, responseData.message, responseData.status, responseData.data);
            
            call(res);
        })
        .catch(error => {
            console.log(error);
            alert("estoy aquí, en el error de Change Visibility " + arrayEndpoints.courses);
            let res = new getResponse(0, error.message, false);
            call(res);

        });
}