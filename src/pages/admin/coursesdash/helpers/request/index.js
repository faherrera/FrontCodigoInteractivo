import axios from 'axios';

//Responses
import { _listResponse, _getResponse} from './../../../../../helpers/responses';

const urlCourses = 'http://localhost:17082/api/Courses/';

export function postCourse (course,successCall,errorCall) {
    console.log('Entrando en request');
    axios
    ({
        method: 'post',
        url: 'http://localhost:17082/api/Courses/',
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

export var getCourses = new Promise(
    
    (resolve,reject)=>{

        let _lr = new _listResponse();

        resolve(
            axios.get(urlCourses)
            .then(response => {
                _lr._codeState = response.data.codeState;
                _lr._list = response.data.data;
                _lr._message = response.data.message;
                _lr._status = response.data.status;

                return _lr;
            })
            .catch(error => {
                _lr._message = error.message;

                return _lr;
            })

        );
    }
);
    

export function putCourse(course, successCall, errorCall) {
    console.log('Entrando en Put Request');
    axios
        ({
            method: 'put',
            url: urlCourses + course.code,
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
