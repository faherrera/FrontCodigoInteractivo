/**
 * Response que tendràn todos los componentes de Form para poder ser manejables.
 * @param {*} status 
 * @param {*} value 
 * @param {*} message 
 */

export function Response(status = false, value = undefined, message = 'Error en la carga, por favor consultar.') {
    this.status = status;
    this.value = value;
    this.message = message;
}