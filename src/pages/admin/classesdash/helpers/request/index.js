import axios from 'axios';

//Url
import {urlApi} from './../../../../../helpers/routesConfig'

export function postClass(ClassCourse, successCall, errorCall) {
    console.log('Entrando en request');
    axios
        ({
            method: 'post',
            url: `${urlApi}ClassesCourse`,
            data: ClassCourse
        }).then((response) => {

            successCall(response.data);
            

        }).catch((error) => {
            console.log(error);
            errorCall(error.message);

        });
}
