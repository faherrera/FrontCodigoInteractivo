import axios from 'axios';

// import _ from 'lodash';

//URL REQUEST
import { arrayEndpoints, arrayRoutesDash } from './../routesConfig';

//Response.
import { getResponse } from "./../responses/";

export const processLogin = (data, call) => {
    console.log('Estoy intentando Loguearme.');
    let res;
    axios({
        method: 'POST',
        url: arrayEndpoints.login,
        data
    }).then(
        response => {
            let responseData = response.data;
            res = new getResponse(responseData.codeState, responseData.message, responseData.status, responseData.data);
            console.log("< ==================<##DEBUG=>RESPONSE POST Login========================");
            console.log(res);
            console.log("< ==================<##DEBUG=>RESPONSE POST Login========================");
            call(res);
        })
        .catch(error => {
            // alert("estoy aquí, en el error de Login " + arrayEndpoints.signup);
            res = new getResponse(0, error.message, false);
            call(res);

        });
}