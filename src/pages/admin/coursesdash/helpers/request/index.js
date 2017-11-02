import axios from 'axios';

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

export function getCourses(){
    
}