// Petición.
// Class_CourseID	1
// CodeClass	222
// TitleClass	"Conociendo el entorno"
// PathVideo	null
// Description	null
// CourseID	1

import { formResponse } from "./../../../../../helpers/responses/FormResponse";

export function ClassResponse(code, title, description, video_preview, course) {
   
    if (code.status && title.status && description.status && video_preview.status && course.status) {

        formResponse.class.codeClass = code.value;
        formResponse.class.titleClass = title.value;
        formResponse.class.PathVideo = video_preview.value;
        formResponse.class.description = description.value;
        formResponse.class.courseid = course.value;
    } else {
        formResponse.messageError.push(code.message, title.message, video_preview.message, description.message, course.message);
    }



    if (formResponse.messageError.length > 0) {
        return formResponse
    } else {
        formResponse.status = true;
        return formResponse;
    }
}