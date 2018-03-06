import axios from 'axios';

import { arrayEndpoints } from './../routesConfig';

import {
    getResponse
} from './../responses/';


/**
 *  Traigo el listado de todos los pedidos de registro o adhesion
 * @param {function} call => Callback que representa la operacion. 
 */
export const getAllEnrollment = ( call) => {
    let url = arrayEndpoints.userCourse;

    axios.get(url)
    .then(
        response => {
            console.log("///////////////////InicioDEBUG === GetAllEnrollment////////////////");
                    console.log(response)
            console.log("*******************FinalizacionDEBUG === GetAllEnrollment**************");
            
            return call(response);
        }
    )
    .catch(
        err => {
            console.log("///////////////////InicioDEBUG === Error GetAllEnrollment////////////////");
            console.log(err.response)
            console.log("*******************FinalizacionDEBUG === Error GetAllEnrollment**************");

            return call(err.response);


        }
    );

}

/**
 *  Traigo todos los cursos del usuario solicitado. 
 *  Recibo un callback para saber que hacer despues, por lo general seteo una propiedad del state.
 * @param {function} call 
 * @returns getResponse(codigo,mensaje,status,data)
 */
export const getAllCoursesOfUser = (username,call) => {

    let url = arrayEndpoints.userCourse +"?username="+ username;

    axios.get(url).then(
        response => {
            let responseData = response.data;
            console.log("///////////////////InicioDEBUG === ResponseData////////////////");
                    console.log(responseData)
            console.log("*******************FinalizacionDEBUG === ResponseData**************");
            
            let res = new getResponse(responseData.codeState, responseData.message, responseData.status, responseData.data);
            call(res);
        })
        .catch(error => {
            console.log(error);
            console.log("HUBO UN ERROR EN GetCoursesOFuSER ->" + error.message);
            let res = new getResponse(0, error.message, false, null);
            call(res);
        });
};

/**
 * Busco todos los cursos a los que está inscripto un usuario pero traidos según filtro.
 * @param {*} username => Username de quien hace la petición
 * @param {*} filter  => filtro al que llamaré
 * @param {*} valueFilter  => valor del filtro
 * @param {*} call  => Call que se ejecutará .
 */
export const getAllCoursesOfUserWithFilters = (username,filter = 'access',valueFilter=true,call) => {


    let url = `${arrayEndpoints.userCourse}?username=${username}&filter=${filter}&valueFilter=${valueFilter}`

    console.log("///////////////////InicioDEBUG === URL de GETWITHFILTER////////////////");
            console.log(url)
    console.log("*******************FinalizacionDEBUG === URL de GETWITHFILTER**************");
    
    axios.get(url).then(
        response => {
            let responseData = response.data;

            let res = new getResponse(responseData.codeState, responseData.message, responseData.status, responseData.data);
            call(res);
        })
        .catch(error => {
            console.log(error);
            console.log("HUBO UN ERROR EN GetCoursesOFuSER ->" + error.message);
            let res = new getResponse(0, error.message, false, null);
            call(res);
        });
};

/**
 * Linkear el user course, estará como pendiente por el momento (access false)
 * @param {*} data 
 * @param {*} call 
 */
export const postUserCourse = (data,call) => {

    axios({
        method:"POST",
        url: arrayEndpoints.userCourse,
        data
    })
    .then(
        response => {
            let responseData = response.data;
            console.log("///////////////////InicioDEBUG === PostLinkUscor////////////////");
                    console.log(responseData)
            console.log("*******************FinalizacionDEBUG === PostLinkUscor**************");
            
            let res = new getResponse(responseData.codeState, responseData.message, responseData.status, responseData.data);

            call(res);

        }
    )
    .catch(error => {
        alert("estoy aquí, en el error de postUserCourse " + arrayEndpoints.userCourse);
        let res = new getResponse(0, error.message, false);
        call(res);
    });
}


///## Cambio de estados booleanos ##///

export const UpdateAccess = (code, username) => {
    axios({
        method: "POST",
        url: arrayEndpoints.userCourse + `?courseCode=${code}&username=${username}`
    }).then(
        response => {
            let responseData = response.data;

            console.log("///////////////////InicioDEBUG === UpdateAccess////////////////");
                    console.log(responseData)
            console.log("*******************FinalizacionDEBUG === UpdateAccess**************");


        }
    ).catch(error => console.log(error));
}

/**
 * Actualizacion al campo booleano de UserCourse.
 * @param {*} code => Codigo del curso 
 * @param {*} username => Username al que estoy pegando 
 * @param {*} put => a actualizar [access,professor]
 */
export const UpdateBool = (code, username,put,call) => {
    const URL = arrayEndpoints.userCourse + `PutBool/?courseCode=${code}&username=${username}&put=${put}`;

    axios({
        method: "PUT",
        url: URL,
    }).then(
        response => {
            let responseData = response.data;

            console.log("///////////////////InicioDEBUG === UpdateProfessor////////////////");
            console.log(response,URL)
            console.log("*******************FinalizacionDEBUG === UpdateProfessor**************");
            call();

        }
        ).catch(error => console.log(error));
}


export const DeleteEnrollment = (call,id) => {
    let url = arrayEndpoints.userCourse+id;

    axios.delete(url)
        .then(
        response => {
            console.log("///////////////////InicioDEBUG === DELETEEnrollment////////////////");
            console.log(response)
            console.log("*******************FinalizacionDEBUG === DELETEEnrollment**************");

            return call(response);
        }
        )
        .catch(
        err => {
            console.log("///////////////////InicioDEBUG === Error DELETEEnrollment////////////////");
            console.log(err.response)
            console.log("*******************FinalizacionDEBUG === Error DELETEEnrollment**************");

            return call(err.response);


        }
        );
}

/**
 * Saber si está habilitado para ver la clase.
 * @param {*} call 
 * @param {*} CourseID 
 */
export const GetEnrollment = (call, ClassCode) => {

    axios({
        method: 'POST',
        url: arrayEndpoints.userCourse + "BelongToEnrollment/",
        params:{
            ClassCode: ClassCode 
        },
        headers: { "Token": window.localStorage.getItem("Token") },


    })
    .then(
        response => call(response)
    )
    .catch(
        error => call(error.response)
    )
}

export const UnsubscribeEnrollment = (CourseCode,call) => {

    let url = arrayEndpoints.userAccount +"Unsubscribe/?id="+CourseCode;

    axios({
        url,
        headers: { "Token": window.localStorage.getItem("Token") },
        method: 'POST'
    })
    .then(
        res => call(res)
    )
    .catch(
        err => call(err.response)
    );
} 