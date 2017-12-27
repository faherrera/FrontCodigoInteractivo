import axios from 'axios';

// import _ from 'lodash';

//URL REQUEST
import { arrayEndpoints, arrayRoutesDash } from './../routesConfig';

//Response.
import { getResponse } from "./../responses/";


export const getAllResources = (call) => {
    let res;

    axios(({
        method: 'GET',
        url: arrayEndpoints.resources,

    })).then(
        (response) => {
            // console.clear();
            let dataResponse = response.data;
            
            res = new getResponse(dataResponse.codeState, dataResponse.message, dataResponse.status, dataResponse.data);
            
            return call(res);
        }       
    ).catch(
        error => {
            console.clear();
            console.log(error);
            res = new getResponse(0, error.message);
            return call(res);
        }
    );
}

/**
 * Trayendo el recurso indicado via parametro code.
 * @param {*} code 
 * @param {*} call 
 */
export const getResource = (code, call) => {

    let res;
    let endpoint = arrayEndpoints.resources + code;

    axios.get(endpoint)
        .then(
        response => {
            let data = response.data;
            res = new getResponse(data.codeState, data.message, data.status, data.data);
            call(res);
        })
        .catch(error => {
            console.log("< ==================<##DEBUG=>Resource========================");
            console.log(error.message);
            // alert("estoy aquí, en el error de getClass " + endpoint);

            console.log("====================##DEBUG///Resource====================== />");
            res = new getResponse(0, error.message);
            call(res);

        });
}


/**
 * Metodo para crear un nuevo registro.
 * @param {obj} data 
 * @param {function} call 
 */
export const postResource = (data, call) => {
    console.log('Estoy intentando crear un recurso.');
    let res;
    axios({
        method: 'POST',
        url: arrayEndpoints.resources,
        data
    })
        .then(
        response => {
            let responseData = response.data;
            res = new getResponse(responseData.codeState, responseData.message, responseData.status, responseData.data);
            console.log("< ==================<##DEBUG=>RESPONSE POST Resource========================");
            console.log(res);
            console.log("< ==================<##DEBUG=>RESPONSE POST Resource========================");
            call(res);
        })
        .catch(error => {
            alert("estoy aquí, en el error de postResource " + arrayEndpoints.resources);
            res = new getResponse(0, error.message, false);
            call(res);

        });
}


/**
 * Metodo para modificar un registro en base a un codigo pasado como parametro.
 * @param {int} code 
 * @param {obj} data 
 * @param {function} call 
 */
export const putResource = (code, data, call) => {
    console.log('Estoy intentando actualizár un recurso.');
    let res;
    axios({
        method: 'PUT',
        url: arrayEndpoints.resources + code,
        data
    })
        .then(
        response => {
            let responseData = response.data;
            res = new getResponse(responseData.codeState, responseData.message, responseData.status, responseData.data);
            console.log("< ==================<##DEBUG=>RESPONSE PUT RESOURCE========================");
            console.log(res);
            console.log("====================##DEBUG====================== />");
            call(res);
        })
        .catch(error => {
            alert("estoy aquí, en el error de putrESOURCE " + arrayEndpoints.resources + code);
            res = new getResponse(0, error.message, false);
            call(res);

        });
}

/**
 * Eliminando el recurso indicado via code.
 * @param {*} code 
 * @param {*} call 
 */
export const deleteResource = (code, call) => {
    axios({
        method: 'DELETE',
        url: arrayEndpoints.resources + code,
    }).then(response => {
        alert('correctamente eliminado');
        return window.location.href = arrayRoutesDash.resources;
    }).catch(error => {
        alert('Error en delete de resource' + error);
    });
}
