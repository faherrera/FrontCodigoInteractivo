import axios from 'axios';

//Responses
import { getResponse} from './../../../../../helpers/responses';
import { arrayRoutes} from './../../../../../helpers/requestConfig';

const endpoint = arrayRoutes.courses;

export function postCourse (course,successCall,errorCall) {
    console.log('Entrando en request');
    axios
    ({
        method: 'post',
        url: endpoint,
        data: course
    }).then((response) => {
        console.log(response);
        //Callback

        successCall();
        
        alert('excelente!');
    }).catch((error) => {
        console.log(error.message);
        errorCall(error.message);
        
    });
}

export function putCourse(course, successCall, errorCall) {
    console.log('Entrando en Put Request');
    axios
        ({
            method: 'put',
            url: endpoint + course.code,
            data: course
        }).then((response) => {
            // console.log(response);
            //Callback

            successCall();

            // alert('excelente!');
        }).catch((error) => {
            console.log(error.message);
            errorCall(error.message);

        });
}
