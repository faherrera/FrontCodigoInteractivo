import axios from 'axios';

import _ from 'lodash';

//URL REQUEST
import { urlApi, endPointClass, routeCourse} from './../requestConfig';

//REQUEST Courses
import{getAllCourses} from './CoursesRequest';


//Gets
export const getClass = (code,successCall)=>{

    let endpoint =  endPointClass + code;

    axios.get(endpoint)
            .then(
            response => {
                if (response.data._status) {
                    let _class = (response.data._class != null) ? response.data._class : [];

                    successCall(_class);

                    return console.log('Excelente!');
                }
                return alert('No entrámos.');

            })
            .catch(error => alert(error.message));
}
 
//Delete
export const deleteClass = (code,successCall) =>{
    axios({
        method: 'DELETE',
        url: endPointClass+code,
    }).then(response => {
        alert('correctamente eliminado');
        return window.location.href = routeCourse;
    }).catch(error => {
        alert('Error '+error);

    });
}


















//##Filters
/**######
 * Code is a integer that has to match with COURSEID of ClassesCourse.
 * SuccessCall is a Async function, this function will update the state.
 * @param {int} code 
 * @param {function} successCall 
 **/
export const filterClassesByCourseCode = (code,successCall) => {

    let arreglo = [];

    axios.get(endPointClass)
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