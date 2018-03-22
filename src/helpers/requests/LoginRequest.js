import axios from 'axios';

// import _ from 'lodash';

//URL REQUEST
import { arrayEndpoints, arrayRoutesDash } from './../routesConfig';

//Response.
import { getResponse } from "./../responses/";

export const processLogin = (data, call,route = "Estudiante") => {
    console.log('Estoy intentando Loguearme.');
    let res;
    axios({
        method: 'POST',
        url:  route == "Estudiante" ? arrayEndpoints.login : arrayEndpoints.admin+"LoginAdmin",
        data
    }).then(
        response => {
            console.log(response);

            if (response.status == 200) {
                response.data.Image = response.data.Image || "undefined";
            }

            call(response);
        })
        .catch(error => {
            // alert("estoy aquí, en el error de Login ");
            console.log(error);
            call(error.response);

        });
}