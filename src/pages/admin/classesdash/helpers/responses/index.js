// Petición.
// Class_CourseID	1
// CodeClass	222
// TitleClass	"Conociendo el entorno"
// PathVideo	null
// Description	null
// CourseID	1

export function ClassResponse(code, title, description, video_preview, course) {
    let _response = {
        status: false,
        class: {},
        messageError: []
    }


    if (code.status && title.status && description.status && video_preview.status && course.status) {

        _response.class.codeClass = code.value;
        _response.class.titleClass = title.value;
        _response.class.PathVideo = video_preview.value;
        _response.class.description = description.value;
        _response.class.courseid = course.value;
    } else {
        _response.messageError.push(code.message);
        _response.messageError.push(title.message);
        _response.messageError.push(video_preview.message);
        _response.messageError.push(description.message);
        _response.messageError.push(course.message);
    }



    if (_response.messageError.length > 0) {
        return _response
    } else {
        _response.status = true;
        return _response;
    }
}