export const getInputText = (id) => {

    const element = document.getElementById(id);
    return element.value;

};

export const getRadioValue = (name, def = 1) => {    //Le doy un valor por default

    let arrayNodeList = [...document.querySelectorAll(`input[name=${name}]`)];

    let value = 0;
    arrayNodeList.map((node) => { //Mapeo el nodo
        (node.checked) ? (value = node.value) : null;   //En caso de que sea el checkeado lo retorno
    });

    return value; //Si es diferente a 0 entonces ret value, sino el def.
}


export const getBase64Image = (id) => {
    const image = document.getElementById(id);
    return image.src;
}