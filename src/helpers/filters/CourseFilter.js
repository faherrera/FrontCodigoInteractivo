import _ from 'lodash';

/**
 * Usando Lodash para filtrar los datos. Devuelvo el objeto matcheado. De ahí puedo extraer los datos que solicite.
 * @param {*} code  =>> Codigo por el cual voy a buscar. Si es null u otro valor de error retornaré OBJ 
 * default. 
 * @param {*} list =>> Listado de donde voy a buscar el codigo para extraer el nombre.Si es null u otro 
 * valor de error retornaré 'UNDEFINED'.
 */
export const filterCourseByHisCode = (code, list) => {

    if (list.length <= 0) {
        let obj;
        alert('Listado es menor que cero, retornaré nulo.');
        return obj = [{
            title: ''
        }]
    }

    let takeLodash = _.find(list, (o) => o.value === code);

    console.log("< ==================<##DEBUG=>>Lodash========================");
    console.log(takeLodash);
    console.log("====================##DEBUG/>====================== />");

    return takeLodash;



}