// import _ from 'lodash';

//Instance Classes
import { formResponse } from "./../index";

export function SignUpResponse(name, user, email, password) {
    let response = new formResponse();

    if (name.status && user.status && email.status && password.status) {

        response.data.Name = name.value;
        response.data.Username = user.value;
        response.data.Email = email.value;
        response.data.Password = password.value;
        
    } else {
        response.message.push(name.message, user.message, email.message, password.message);
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