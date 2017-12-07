import axios from 'axios';

import { urlApi } from './../requestConfig';


const url = urlApi+'Courses/';

export const getAllCourses = (successCall) => {

    axios.get(url)
    .then(
        response =>{
            successCall(response.data.data);
        }
    )
    .catch(error => {
        console.log(error);
        alert(error);
    });
}

export const getCourse = (code,successCall) =>{

    let urlGet = url+code;  //URL DE LA API + EL CODIGO DEL CURSO.
    
    axios.get(urlGet)
        .then(
        response => {
            successCall(response.data.data);
        }
        )
        .catch(error => {
            console.log(error);
            alert(error);
        });
}