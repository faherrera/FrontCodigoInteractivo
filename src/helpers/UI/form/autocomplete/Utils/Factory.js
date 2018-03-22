
/**
 * Factory de Course, entran todos los cursos con sus datos, y sale un array de objetos 
 * estandarizados
 * @param {*} list
 * @returns Array. Si => list : null =>  [] || Si => list : [{..},{..}] => Array Factory.
 *   
 */
export const CourseFactoryAutocomplete = (list = []) => {

    if (list.length <= 0) {
        return [];
    }

    let newList = [];

    for (let item of list) { //Itero sobre el array de datos traidos.
        let objeto = new Object();  //Creo un objeto para asignarle los valores.

        objeto.title = item.Name;
        objeto.value = item.Code;

        newList.push(objeto);
    }

    console.log(newList);
    // alert('Está cargando el nuevo listado');

    return newList;
}
/**
 * Factory de Classes, entran todas las clases con sus datos, y sale un array de objetos 
 * estandarizados
 * @param {*} list
 * @returns Array. Si => list : null =>  [] || Si => list : [{..},{..}] => Array Factory.
 *   
 */
export const ClassesFactoryAutocomplete = (list = []) => {

    if (list.length <= 0) {
        return [];
    }

    let newList = [];

    for (let item of list) { //Itero sobre el array de datos traidos.
        let objeto = new Object();  //Creo un objeto para asignarle los valores.

        objeto.title = item.TitleClass;
        objeto.value = item.CodeClass;

        newList.push(objeto);
    }

    console.log(newList);
    // alert('Está cargando el nuevo listado');

    return newList;
}
