import axios from 'axios';

// import _ from 'lodash';

//URL REQUEST
import { arrayEndpoints, arrayRoutesDash } from './../routesConfig';

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
            
            console.log("///////////////////InicioDEBUG === response////////////////");
                    console.log(response)
            console.log("*******************FinalizacionDEBUG === response**************");
            
            if (response.status == 200) {
                responseData.data.Image = "undefined";
            }

            res = new getResponse(responseData.codeState, responseData.message, responseData.status, responseData.data);
            call(res);
        })
        .catch(error => {
            alert("estoy aquí, en el error de SignUp " + arrayEndpoints.signup);
            res = new getResponse(0, error.message, false);
            call(res);

        });
}