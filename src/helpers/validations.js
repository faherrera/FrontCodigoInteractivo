

export const getSelectedValue = (id) => {
    console.log('entré')
  
    console.log(document.getElementById(id).value);

}


// Validaciones.


export let validationInputText = 
    (id,
    nameMessageError = id   //Nombre por defecto del campo identificado, en caso de no tener se usará el ID.
    ) =>
{
    
    let objectValidation = {  //Creo un objeto vacio con sus datos. Es para devolverlo
        status: false,
        messageError: '',   //Aquí indico el mensaje de error en caso de tener.
    };

    let element = document.getElementById(id);
    
    if (element.value != '' ) {
        objectValidation.status = true;
    }else{
        objectValidation.messageError = `El campo ${nameMessageError} está vacio`;
    }

    return objectValidation;
};

export const validationRadio = (name, nameMessageError = name  ) => {    //Le doy un valor por default

    let objectValidation = {  //Creo un objeto vacio con sus datos. Es para devolverlo
        status: false,
        messageError: '',   //Aquí indico el mensaje de error en caso de tener.
    };

    let arrayNodeList = [...document.querySelectorAll(`input[name=${name}]`)];

    if (!arrayNodeList.length > 0 ) {
        objectValidation.status = false;
        objectValidation.messageError = `El nodo ${nameMessageError} no dispone de datos`;
        return objectValidation;
    }

    let value = 0;
    arrayNodeList.map((node) => { //Mapeo el nodo
        (node.checked) ? (value = node.value) : 0;   //En caso de que sea el checkeado lo retorno
    });

    if (value != 0) {
        objectValidation.status = true;
        return objectValidation;        
    }
}
