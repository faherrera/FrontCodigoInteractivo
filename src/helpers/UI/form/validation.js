
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
export let validationDecimal = (value) => {
    let rex = /^\d+(\.\d{0,9})?$/;

    console.log("-----Decimal----");
    console.log(value);
    console.log(rex.test(value));
    
    console.log("-----Decimal----");
    
    return rex.test(value);
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
