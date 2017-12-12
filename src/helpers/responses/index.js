
export function formResponse(message = [],status = false,data = {}){
    this.message = message || [];
    this.status = status || false;
    this.data = data || {};
}
/**
 * 
 * Esta funcion constructora será la respuesta que daremos cuando se recibe el Response. 
 * La utilizaré para indicar que se debe realizár en caso de que status sea false o true.
 * 
 * @param {bool} status => Este me indica si el estado es valido o no. De aquí partiran las op.
 * @param {int} codeState => Trae el codigo de estado. [0,1,2,4]
 * @param {object} data => Este traerá el dato de respuesta en forma de Objeto JSON.
 * @param {string} message  => Trae el mensaje que me da el server. 
 */
export function getResponse(codeState = 0, message = 'mensaje de error', status = false, data = {}){
    this.codeState = codeState || 0;
    this.message = message || "Error -> por defecto";
    this.status = status || false;
    this.data = data || {};

}