import _ from 'lodash';

//Instance Classes
import { formResponse } from "./../index";

export function FormResponseResources(code, title, externalLink, classe) {
    let response = new formResponse();

    if (code.status && title.status && externalLink.status && classe.status) {

        response.data.CodeResource = code.value;
        response.data.TitleResource = title.value;
        response.data.ExternalLink = externalLink.value;
        response.data.Class_CourseID = classe.value;
    } else {
        response.message.push(code.message, title.message, externalLink.message, classe.message);
    }


    if (response.message.length > 0) {
        console.log("< ==================<##DEBUG=>FormResponseResource if========================");
        
        console.log(response.message);
        console.log("< ==================<##DEBUG=>FormResponseResource if========================");

        return response
    } else {
        response.status = true;
        return response;
    }
}