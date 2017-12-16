/**
 * Response que tendràn todos los componentes de Form para poder ser manejables.
 * @param {*} status 
 * @param {*} value 
 * @param {*} message 
 */

export function Response(status = false, value = undefined, message = "") {
    this.status = status;
    this.value = value;
    this.message = message;
}