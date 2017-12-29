import _ from 'lodash';

//Request
import {getAllClasses } from "./../requests/ClassesRequest";
import { getResponse } from '../responses/index';

export let filterFromCourseCode = (code) => {
    let response = getResponse(0,"Problemas con la petición",false,null);
    console.log("El codigo del curso es el siguiente :-> "+code);
    getAllClasses((res)=>{

        if (res.status) {
            response = getResponse(1,res.messsage,res.status,res.data);

        }

        console.log("///////////////////InicioDEBUG === FilterFromCourseCode////////////////");
                console.log(response)
        console.log("*******************FinalizacionDEBUG === FilterFromCourseCode**************");
        

    });

};