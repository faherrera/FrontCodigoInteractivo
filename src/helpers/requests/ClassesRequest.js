import axios from 'axios';

import _ from 'lodash';

//URL REQUEST
import {urlApi} from './../requestConfig';

//REQUEST Courses
import{getAllCourses} from './CoursesRequest';


const url = `${urlApi}ClassesCourse/`;

/**
 * Code is a integer that has to match with COURSEID of ClassesCourse.
 * SuccessCall is a Async function, this function will update the state.
 * @param {int} code 
 * @param {function} successCall 
 */
export const filterClassesByCourseCode = (code,successCall) => {

    let arreglo = [];

    axios.get(url)
        .then(response => {
            let arregloFromService = response.data._classes;
            // return console.log(_.takeRightWhile(arregloFromService, (o) => o.CourseID == code));
            successCall(_.takeRightWhile(arregloFromService, (o) => o.CourseID == code));
        })
        .catch(
        error => {
            alert(error);
        });
};



/**
 * Metodo para filtrar de manera nativa
 */
// export const filterClassesByCourseCode = (code,successCall) => {
//     let arreglo = [];
//     axios.get(url)
//     .then(
//         response => {
//             let arregloClases = response.data._classes; 
//             arregloClases.map( (item,i) =>  //Itero sobre cada clase del arreglo
//             {
//                 if (item.hasOwnProperty("CourseID")) {  //Consulto si existe el CourseID (x seguridad) //                     if (item.CourseID == code) { //Si coinciden el codigo que recibo por parametro con alguno del array => 
//                         arreglo.push(item); //Guardo el item en el arreglo.
//                     }
//                 }
//             }
//             );
//             successCall(arreglo);
//         }
//     )
//     .catch(
//         error =>{
//             alert(error);
//         }
//     );

// }