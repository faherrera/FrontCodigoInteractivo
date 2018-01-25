import _ from 'lodash';

//Instance Classes
import { formResponse } from "./../index";

export function UserResponse (name, dni, username,email, password , role, image ) {
    let response = new formResponse();


    if (name.status && dni.status && username.status && email.status && password.status&&image.status ) {
        let user = {};
        user.name = name.value;
        user.dni = dni.value;
        user.username = username.value;
        user.email = email.value;
        user.password = password.value;
        user.roleid = role.value;
        response.data.User = user;
        response.data.thumbnail = image.value.nameImg;
        response.data.imageBase64 = image.value.base64;

    } else {

        response.message.push(name.message, dni.message, email.message, password.message, role.message, image.message);
    }


    if (response.message.length > 0) {
        console.log("///////////////////InicioDEBUG === UserFormResponse////////////////");
                console.log(response)
        console.log("*******************FinalizacionDEBUG === UserFormResponse**************");
        
        return response
    } else {
        response.status = true;
        return response;
    }
}