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

//Array de Routes.
export const arrayRoutes = {
    'courses': urlAppDashboard + 'courses/',
    'class': urlAppDashboard + 'classes/',
    'resources': urlAppDashboard + 'resources/',
}


//##Array Endpoint
export const arrayEndpoints = {
    'courses': urlApi + 'courses/',
    'class': urlApi + 'ClassesCourse/',
    'resources': urlApi + 'ResClass/',
}


/**
 * Array de rutas para UPLOAD.
 */

 export const arrayUpload ={
     'courses': urlUpload+'Courses/',
     
 }