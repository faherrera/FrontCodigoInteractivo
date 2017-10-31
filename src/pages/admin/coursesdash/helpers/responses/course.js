

export function CourseResponse(code, name, description, duration, typecourse, mode, level, video_preview, image, professorId) {
    let _response = {
        status: false,
        course: {},
        messageError: []
    }


    this.code = code;
    this.name = name;
    this.description = description;
    this.duration = duration;
    this.typecourse = typecourse;
    this.mode = mode;
    this.level = level;
    this.video_preview = video_preview;
    this.image = image;
    this.professorId = professorId;

    if (code.status && name.status && description.status && duration.status && typecourse.status && mode.status && level.status && video_preview.status && image.status && professorId.status ) {
        
        _response.course.code = code.value;
        _response.course.name = name.value;
        _response.course.description = description.value;
        _response.course.duration = duration.value;
        _response.course.typecourse = typecourse.value;
        _response.course.mode = mode.value;
        _response.course.level = level.value;
        _response.course.video_preview = video_preview.value;
        _response.course.thumbnail = image.value.nameImg;
        _response.course.imageBase64 = image.value.base64;
        _response.course.professorId = professorId.value;

    }else{
        _response.messageError.push(code.message);    
        _response.messageError.push(name.message);    
        _response.messageError.push(description.message);    
        _response.messageError.push(duration.message);    
        _response.messageError.push(typecourse.message);    
        _response.messageError.push(mode.message);    
        _response.messageError.push(level.message);    
        _response.messageError.push(video_preview.message);    
        _response.messageError.push(image.message);    
        _response.messageError.push(professorId.message);    

    }
    


    if(_response.messageError.length > 0 ){
        return _response
    }else{
        _response.status = true;
        return _response;
    }
}