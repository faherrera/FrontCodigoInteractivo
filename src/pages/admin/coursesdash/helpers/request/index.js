import axios from 'axios';

export function postCourse (course,callback) {
    axios
    ({
        method: 'post',
        url: 'http://localhost:17082/api/Courses/',
        data: course
    }).then((response) => {
        console.log(response);
        //Callback

        callback();
        
        alert('excelente!');
    }).catch((error) => {
        console.log(error.message);
        callback();
        
    });
}