
export let isEmpty = (value) => {  //Saher si está vacio.

    if (value !== '' && value !== undefined) {
        if (value.trim().length > 0) {
            return true;
        }
    }
    return false;
}

export let validationEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

export let validationNumber = (numberString) => {
    var re = /[1-9]/;
    console.log("------");
    console.log(numberString);
    console.log(re.test(numberString));
    console.log("------");
    return re.test(numberString);

}

//Styles Validation.

export const inputValidate = {
    boxSizing: 'border-box',
    borderBottom: '2px solid green'
}

export const inputInvalidate = {
    boxSizing: 'border-box',
    borderBottom: '2px solid red'
}
