import _ from 'lodash';

//Instance Classes
import { formResponse } from "./../index";

export function ClassResponse(code, title, description, video_preview, course) {
    let response = new formResponse();

    if (code.status && title.status && description.status && video_preview.status && course.status) {

        response.data.codeClass = code.value;
        response.data.titleClass = title.value;
        response.data.PathVideo = video_preview.value;
        response.data.description = description.value;
        response.data.courseid = course.value;
    } else {
        response.message.push(code.message, title.message, video_preview.message, description.message, course.message);
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