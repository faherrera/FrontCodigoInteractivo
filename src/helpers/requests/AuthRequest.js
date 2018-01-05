
/**
 * StorageDataInLocalStorage => Guardo los datos traidos del serivdor en el local storage, en el futuro se manejará la sesion desde aquí.
 * 
 * @param {*} data => Data que viene del servidor. 
 */
export const storeDataInLocalStorage = (data) => {
    let {Username,Token,Email,Name,Thumbnail} = data;

    localStorage.setItem("Username",Username);
    localStorage.setItem("Token",Token);
    localStorage.setItem("Email",Email);
    localStorage.setItem("Name",Name);
    localStorage.setItem("Image", Thumbnail);

    console.log(localStorage);
}

/**
 * ConsultSession => Metodo el cual consultará si el LocalStorage posee datos, en caso de hacerlo lo guardaremos en un response que será analizado desde la clase que sea llamada. 
 */
export const consultSession = () => {
    let response = {
        status : false,
        data : {},
    }
    
    if (window.localStorage.length >= 3 && window.localStorage.getItem('Token') ) {
        response.data = localStorage;
        response.status = true;
        return response;
    }

    // console.log(response,localStorage);
    return response;
}

/**
 * CloseSession => Metodo para cerrar la sesion, borrará todo lo que esté en el LocalStorage.
 */
export const closeSession = () => {
    window.localStorage.clear();
    return window.location.reload();
}