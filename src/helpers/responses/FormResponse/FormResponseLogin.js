// import _ from 'lodash';

//Instance Classes
import { formResponse } from "./../index";

export function LoginResponse(user,password) {
    let response = new formResponse();

    if (user.status && password.status) {

        response.data.Username = user.value;
        response.data.Password = password.value;

    } else {
        response.message.push(user.message, password.message);
    }


    if (response.message.length > 0) {
        console.log("< ==================<##DEBUG=>FormResponse if========================");

        // let lodasheado =  _.remove(response.message, (msg) => msg.);
        console.log('-Abajo form message común // Arriba lodasheado-');
        console.log(response.message);
        console.log("====================##DEBUG====================== />");

        return response
    } else {
        response.status = true;
        return response;
    }
}