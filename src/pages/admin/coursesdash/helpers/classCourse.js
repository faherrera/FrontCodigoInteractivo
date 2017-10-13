import {
    validationRadio,
    validationInputText,
} from './../../../../helpers/validations';
import {
    getInputText,
    getRadioValue,
    getBase64Image
} from './../../../../helpers/getData';


export let Course = (code, name, description, duration, typecourse, mode, level, video_preview, nameImage,imageBase64, professorId) => {
        let request = null;
        request = {

            Course:{},
            status:false,
            messageError: []
        }
        
        if (!validationInputText(code).status) {

            request.messageError.push(validationInputText(code,"CodigoCurso").messageError);
        }
        if (!validationInputText(name).status) {
            request.messageError.push(validationInputText(name).messageError);
        }
        if (!validationInputText(description).status) {
            request.messageError.push(validationInputText(description).messageError);
        }
        if (!validationInputText(duration).status) {
            request.messageError.push(validationInputText(duration).messageError);
        }
        
        if (!validationRadio(typecourse).status) {
            request.messageError.push(validationInputText(typecourse).messageError);
        }
        
        if (!validationRadio(mode).status) {
            request.messageError.push(validationInputText(mode).messageError);
        }
        if (!validationRadio(level).status) {
            request.messageError.push(validationInputText(level).messageError);
        }

      
        if (request.messageError.length == 0) {
            const Course = {
                code: getInputText(code),
                name: getInputText(name),
                description: getInputText(description),
                duration: getInputText(duration),
                typecourse: getRadioValue(typecourse),
                mode: getRadioValue(mode),
                level: getRadioValue(level),
                video_preview: getInputText(video_preview),
                thumbnail: getInputText(nameImage),
                imageBase64: getBase64Image(imageBase64),
                professorId: 1
            }
    
            request.Course = Course;
    
            request.status = true;
    
        }
        
        return request;

}
