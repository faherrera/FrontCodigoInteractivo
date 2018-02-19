//Configs
export const urlUpload = 'http://localhost:17082/Uploads/'; 
export const urlApi = 'http://localhost:17082/api/';
export const urlApp = 'http://localhost:3000/';

export const urlAppDashboard = urlApp +"dashboard/";

/**
 * ##ENDPOINTS
 * Los endpoints son las URI a los servicios
 */

export const endPointCourse = urlApi +'Courses/'
export const endPointClass = urlApi +'ClassesCourse/'
export const endPointResources = urlApi +'ResClass/'


/**
 * ##ROUTES
 * Las rutas son las URL a los componentes.
 */

export const routeCourse = urlAppDashboard +'courses/';
export const routeClass = urlAppDashboard +'classes/';

//Array de Routes para el Dashboard.
export const arrayRoutesDash = {
    'courses': urlAppDashboard + 'courses/',
    'class': urlAppDashboard + 'classes/',
    'resources': urlAppDashboard + 'resources/',
    'users': urlAppDashboard + 'users/',
    'enrollment': urlAppDashboard + 'enrollment/'
}

//Array de Routes Layout General.
export const arrayRoutesGeneral = {
    'courses': urlApp + 'cursos/',
    'classes': urlApp + 'clases/',
    'usuario': urlApp + 'usuario/',
}


//##Array Endpoint
export const arrayEndpoints = {
    'courses': urlApi + 'courses/',
    'class': urlApi + 'ClassesCourse/',
    'resources': urlApi + 'ResClass/',
    'signup': urlApi + 'Signup/',
    'login': urlApi + 'Login/',
    'users': urlApi + 'UserRegister/',
    'userCourse': urlApi +'UserCourse/',
}


/**
 * Array de rutas para UPLOAD.
 */

 export const arrayUpload ={
     'courses': urlUpload+'Courses/',
     'users': urlUpload+'Users/'
     
 }

 /**
  * Array de rutas en los menú 
  */

export const routesMenu = {
    allow: {
        mycourses: `${arrayRoutesGeneral.usuario}miscursos`,
        pending: `${arrayRoutesGeneral.usuario}pendientes`,
        account: `${arrayRoutesGeneral.usuario}account`,
        
    },
    denied: {

    },
    general: {
        nuestrosCursos: `${urlApp}cursos`,
    }
}