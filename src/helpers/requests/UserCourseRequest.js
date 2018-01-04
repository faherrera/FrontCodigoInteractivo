import axios from 'axios';

import { arrayEndpoints } from './../routesConfig';

import {
    getResponse
} from './../responses/';

/**
 *  Traigo todos los cursos del usuario solicitado. 
 *  Recibo un callback para saber que hacer despues, por lo general seteo una propiedad del state.
 * @param {function} call 
 * @returns getResponse(codigo,mensaje,status,data)
 */
export const getAllCoursesOfUser = (username,call) => {

    let url = arrayEndpoints.userCourse + username;

    axios.get(url).then(
        response => {
            let responseData = response.data;
            let res = new getResponse(responseData.codeState, responseData.message, responseData.status, responseData.data);
            call(res);
        })
        .catch(error => {
            console.log(error);
            console.log("HUBO UN ERROR EN GetCoursesOFuSER ->" + error.message);
            let res = new getResponse(0, error.message, false, null);
            call(res);
        });
}