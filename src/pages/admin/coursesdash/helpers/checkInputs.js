export var determinateRadioChecked = (radioName) => {
    var value = 0;

    for(var i = 0; i <= radioName.lenght; i ++){

        if (radioName[i].checked) {
            console.log('el radio checkeado es' + radioName[i]);
            return value = radioName[i].value;
        }
    }
    
}