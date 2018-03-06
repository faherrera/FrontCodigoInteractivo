import axios from 'axios';

// import _ from 'lodash';

//URL REQUEST
import {arrayEndpoints ,arrayRoutesDash} from './../routesConfig';

//REQUEST 

//RESPONSE
import { getResponse } from "./../responses/";

//GETTERS

/**
 *  Traigo todas las clases que tengo. recibo un callback para saber que hacer despues, por lo general seteo una propiedad del state.
 * @param {function} call 
 * @returns getResponse(codigo,mensaje,status,data)
 */
export const getAllUsers = (call) => {

    let endpoint = arrayEndpoints.users;

    axios.get(endpoint)
        .then(
        response => {
            let responseData = response.data;
            let res = new getResponse(responseData.codeState, responseData.message, responseData.status, responseData.users);
            call(res);
        })
        .catch(error => {
            console.log("HUBO UN ERROR EN GetAllUsers ->" + error.message);
            console.log(error);
            let res = new getResponse(0, error.message, false, null);
            call(res);
        });
}

/**
 * Trayendo el usuario indicada via parametro code.
 * @param {*} code 
 * @param {*} call 
 */
export const getUser = (code, call) => {

    let res;
    let endpoint = arrayEndpoints.users + code;

    axios.get(endpoint)
        .then(
        response => {
          
            let responseData = response.data;
            
            res = new getResponse(responseData.codeState, responseData.message, responseData.status, responseData.data);
            console.log("///////////////////InicioDEBUG === Response////////////////");
            console.log(res)
            console.log("*******************FinalizacionDEBUG === Response**************");

            call(res);
        })
        .catch(error => {
            console.log("< ==================<##DEBUG=>GETUser========================");
            console.log(error.message);
            // alert("estoy aquí, en el error de getUser " + endpoint);

            console.log("====================##DEBUG///GETUser====================== />");
            res = new getResponse(0, error.message);
            call(res);

        });
}

/**
 * Actualizar el usuario segun el codigo.
 * @param {*} code 
 * @param {*} data 
 * @param {*} call 
 */
export const putUser = (code, data, call) => {
    console.log('Estoy intentando actualizár un usuario.');
    let res;
    axios({
        method: 'PUT',
        url: arrayEndpoints.users + code,
        data
    })
        .then(
        response => {
            let responseData = response.data;
            res = new getResponse(responseData.codeState, responseData.message, responseData.status, responseData.data);
            console.log("< ==================<##DEBUG=>RESPONSE PUT User========================");
            console.log(res);
            console.log("====================##DEBUG====================== />");
            call(res);
        })
        .catch(error => {
            alert("estoy aquí, en el error de putUser " + arrayEndpoints.class + code);
            res = new getResponse(0, error.message, false);
            call(res);

        });
}

/**
 * Crear un nuevo usuario según la data que se envie
 * @param {*} data 
 * @param {*} call 
 */
export const postUser = (data, call) => {
    console.log('Estoy intentando crear una USERn.');
    let res;
    axios({
        method: 'POST',
        url: arrayEndpoints.users,
        data
    })
        .then(
        response => {
            let responseData = response.data;
            res = new getResponse(responseData.codeState, responseData.message, responseData.status, responseData.data);
            console.log("< ==================<##DEBUG=>RESPONSE POST Usr========================");
            console.log(res);
            console.log("< ==================<##DEBUG=>RESPONSE POST Usr========================");
            call(res);
        })
        .catch(error => {
            alert("estoy aquí, en el error de postUser " + arrayEndpoints.users);
            res = new getResponse(0, error.message, false);
            call(res);

        });
}

/**
 * Eliminando Usuario indicada via code.
 * @param {*} code 
 * @param {*} call 
 */
export const deleteUser = (code, call) => {
    axios({
        method: 'DELETE',
        url: arrayEndpoints.users + code,
    }).then(response => {
        alert('correctamente eliminado');

         window.location.href = arrayRoutesDash.users;
         return response;
    }).catch(error => {
        alert('Error ' + error);
        return error.response;
    });
}

/**
 * Cambiar la disponibilidad del usuario.
 * @param {*} code 
 * @param {*} call 
 */
export const changeAvailability = (code, call) => {
    axios({
        method: 'POST',
        url: arrayEndpoints.users + "Availability/",
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
            alert("estoy aquí, en el error de Change Visibility " + arrayEndpoints.users);
            let res = new getResponse(0, error.message, false);
            call(res);

        });
}


export const PutMyAccount = (data,call) => {

    axios({
        url: arrayEndpoints.userAccount +"PutAccount/",
        method:"PUT",
        data,
        headers: { "Token": window.localStorage.getItem("Token") }
    })
    .then(res => call(res))
    .catch(err => call(err));

}

















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