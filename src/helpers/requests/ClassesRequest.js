import axios from 'axios';

import _ from 'lodash';

//URL REQUEST
import { urlApi, endPointClass, routeCourse, arrayEndpoints} from './../routesConfig';

//REQUEST Courses
import{getAllCourses} from './CoursesRequest';

//RESPONSE
import { getResponse } from "./../responses/";

//GETTERS

/**
 *  Traigo todas las clases que tengo. recibo un callback para saber que hacer despues, por lo general seteo una propiedad del state.
 * @param {function} call 
 * @returns getResponse(codigo,mensaje,status,data)
 */
export const getAllClasses  = (call) => {

    let endpoint = arrayEndpoints.class;

    axios.get(endpoint)
        .then(
        response =>{
            let data = response.data;
            let res = new getResponse(data._codeState, data._message, data._status, data._classes);
             call(res);
        })
        .catch(error => {
            console.log("HUBO UN ERROR EN GETaLLcLASSES ->"+error.message);
            console.log(error);
            let res = new getResponse(0, error.message, false, null);
             call(res);
        });
}

/**
 * Trayendo la clase indicada via parametro code.
 * @param {*} code 
 * @param {*} call 
 */
export const getClass = (code,call)=>{

    let res;
    let endpoint = arrayEndpoints.class + code;
    console.log("El codig es ->  "+code);
    axios.get(endpoint)
            .then(
            response => {
                let data = response.data;
                
                res = new getResponse(data._codeState,data._message,data._status,data._class);

                
                call(res);

            })
            .catch((error) => {
                console.log("< ==================<##DEBUG=>GETCLASS========================");
                console.log(error.message);
                // alert("estoy aquí, en el error de getClass " + endpoint);
                            
                console.log("====================##DEBUG///GETCLASS====================== />");
                res = new getResponse(0,error.message);
                call(res);

            });
}
 
export const putClass = (code,data,call) => {
    console.log('Estoy intentando actualizár una clase.');
    let res;
    axios({
            method: 'PUT',
            url: arrayEndpoints.class+code,
            data
        })
        .then(
        response => {
            let responseData = response.data;
            res = new getResponse(responseData._codeState, responseData._message, responseData._status, responseData._class);
            console.log("< ==================<##DEBUG=>RESPONSE PUT CLASS========================");
                        console.log(res);
            console.log("====================##DEBUG====================== />");
            call(res);
        })
        .catch(error => {
            alert("estoy aquí, en el error de putClass " + arrayEndpoints.class + code);
            res = new getResponse(0, error.message,false);
            call(res);

        });
}
export const postClass = (data,call) => {
    console.log('Estoy intentando crear una clase.');
    let res;
    axios({
            method: 'POST',
            url: arrayEndpoints.class,
            data
        })
        .then(
        response => {
            let responseData = response.data;
            res = new getResponse(responseData._codeState, responseData._message, responseData._status, responseData._class);
            console.log("< ==================<##DEBUG=>RESPONSE POST CLASS========================");
            console.log(res);
            console.log("< ==================<##DEBUG=>RESPONSE POST CLASS========================");
            call(res);
        })
        .catch(error => {
            alert("estoy aquí, en el error de postclass " + arrayEndpoints.class);
            res = new getResponse(0, error.message,false);
            call(res);

        });
}

/**
 * Eliminando Clase indicada via code.
 * @param {*} code 
 * @param {*} call 
 */
export const deleteClass = (code,call) =>{
    axios({
        method: 'DELETE',
        url: arrayEndpoints.class+code,
    }).then(response => {
        alert('correctamente eliminado');
        return window.location.href = routeCourse;
    }).catch(error => {
        alert('Error '+error);

    });
}


















//##Filters
/**######
 * Code is a integer that has to match with COURSEID of ClassesCourse.
 * SuccessCall is a Async function, this function will update the state.
 * @param {int} code 
 * @param {function} successCall 
 **/
export const filterClassesByCourseCode = (code,successCall) => {

    let arreglo = [];

    axios.get(endPointClass)
        .then(response => {
            let arregloFromService = response.data._classes;
            // return console.log(_.takeRightWhile(arregloFromService, (o) => o.CourseID == code));
            successCall(_.takeRightWhile(arregloFromService, (o) => o.CourseID == code));
        })
        .catch(
        error => {
            alert(error);
        });
};



/**
 * Metodo para filtrar de manera nativa
 */
// export const filterClassesByCourseCode = (code,successCall) => {
//     let arreglo = [];
//     axios.get(url)
//     .then(
//         response => {
//             let arregloClases = response.data._classes; 
//             arregloClases.map( (item,i) =>  //Itero sobre cada clase del arreglo
//             {
//                 if (item.hasOwnProperty("CourseID")) {  //Consulto si existe el CourseID (x seguridad) //                     if (item.CourseID == code) { //Si coinciden el codigo que recibo por parametro con alguno del array => 
//                         arreglo.push(item); //Guardo el item en el arreglo.
//                     }
//                 }
//             }
//             );
//             successCall(arreglo);
//         }
//     )
//     .catch(
//         error =>{
//             alert(error);
//         }
//     );

// }