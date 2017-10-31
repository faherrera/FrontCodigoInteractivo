import axios from 'axios';

export function postCourse (course) {
    axios
    ({
        method: 'post',
        url: 'http://localhost:17082/api/Courses/',
        data: course
    }).then((response) => {
        console.log(response);
        //Callback
        alert('excelente!');
    }).catch((error) => {
        console.log(error.message);
        
    });
}