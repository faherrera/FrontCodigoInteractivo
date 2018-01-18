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

    let url = arrayEndpoints.userCourse +"?username="+ username;

    axios.get(url).then(
        response => {
            let responseData = response.data;
            console.log("///////////////////InicioDEBUG === ResponseData////////////////");
                    console.log(responseData)
            console.log("*******************FinalizacionDEBUG === ResponseData**************");
            
            let res = new getResponse(responseData.codeState, responseData.message, responseData.status, responseData.data);
            call(res);
        })
        .catch(error => {
            console.log(error);
            console.log("HUBO UN ERROR EN GetCoursesOFuSER ->" + error.message);
            let res = new getResponse(0, error.message, false, null);
            call(res);
        });
};

/**
 * Busco todos los cursos a los que está inscripto un usuario pero traidos según filtro.
 * @param {*} username => Username de quien hace la petición
 * @param {*} filter  => filtro al que llamaré
 * @param {*} valueFilter  => valor del filtro
 * @param {*} call  => Call que se ejecutará .
 */
export const getAllCoursesOfUserWithFilters = (username,filter = 'access',valueFilter=true,call) => {


    let url = `${arrayEndpoints.userCourse}?username=${username}&filter=${filter}&valueFilter=${valueFilter}`

    console.log("///////////////////InicioDEBUG === URL de GETWITHFILTER////////////////");
            console.log(url)
    console.log("*******************FinalizacionDEBUG === URL de GETWITHFILTER**************");
    
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
};

/**
 * Linkear el user course, estará como pendiente por el momento (access false)
 * @param {*} data 
 * @param {*} call 
 */
export const postUserCourse = (data,call) => {

    axios({
        method:"POST",
        url: arrayEndpoints.userCourse,
        data
    })
    .then(
        response => {
            let responseData = response.data;

            let res = new getResponse(responseData.codeState, responseData.message, responseData.status, responseData.data);

            call(res);

        }
    )
    .catch(error => {
        alert("estoy aquí, en el error de postUserCourse " + arrayEndpoints.userCourse);
        let res = new getResponse(0, error.message, false);
        call(res);
    });
}