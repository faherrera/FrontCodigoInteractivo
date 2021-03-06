import _ from 'lodash';

//Instance Classes
import { formResponse } from "./../index";

export function CourseResponse(code, name, description, duration, typecourse, mode, level, video_preview, image, startDate, price, temary) {
    let response = new formResponse();


    if (code.status && name.status && description.status && duration.status && typecourse.status && mode.status && level.status && video_preview.status && image.status && startDate.status && price.status && temary.status ) {

        response.data.code = code.value;
        response.data.name = name.value;
        response.data.description = description.value;
        response.data.duration = duration.value;
        response.data.typecourse = typecourse.value;
        response.data.mode = mode.value;
        response.data.level = level.value;
        response.data.video_preview = video_preview.value;
        response.data.thumbnail = image.value.nameImg;
        response.data.imageBase64 = image.value.base64;
        response.data.startDate = startDate.value;
        response.data.price = price.value;
        response.data.temary = temary.value;


    }  else {

        response.message.push(code.message, name.message, description.message, duration.message, typecourse.message, mode.message, level.message, video_preview.message, image.message,
            startDate.message, price.message, temary.message);
    }


    if (response.message.length > 0) {
        console.log("< ==================<##DEBUG=>FormResponse COURSE if========================");

        // let lodasheado =  _.remove(response.message, (msg) => msg.);
        console.log(response);
        console.log("====================##DEBUG====================== />");

        return response
    } else {
        response.status = true;
        return response;
    }
}