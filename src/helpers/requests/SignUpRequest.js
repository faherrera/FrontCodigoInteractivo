import axios from 'axios';

// import _ from 'lodash';

//URL REQUEST
import { arrayEndpoints, arrayRoutes } from './../routesConfig';

//Response.
import { getResponse } from "./../responses/";

export const postSignUp = (data,call) => {
    console.log('Estoy intentando registrarme.');
    let res;
    axios({
        method: 'POST',
        url: arrayEndpoints.signup,
        data
    }).then(
        response => {
            let responseData = response.data;
            res = new getResponse(responseData.codeState, responseData.message, responseData.status, responseData.data);
            console.log("< ==================<##DEBUG=>RESPONSE POST SignUp========================");
            console.log(res);
            console.log("< ==================<##DEBUG=>RESPONSE POST SignUp========================");
            call(res);
        })
        .catch(error => {
            alert("estoy aquí, en el error de SignUp " + arrayEndpoints.signup);
            res = new getResponse(0, error.message, false);
            call(res);

        });
}