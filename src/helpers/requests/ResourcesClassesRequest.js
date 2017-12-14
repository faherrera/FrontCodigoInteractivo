import axios from 'axios';

// import _ from 'lodash';

//URL REQUEST
import { arrayEndpoints, arrayRoutes } from './../requestConfig';

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
        return window.location.href = arrayRoutes.resources;
    }).catch(error => {
        alert('Error en delete de resource' + error);
    });
}
