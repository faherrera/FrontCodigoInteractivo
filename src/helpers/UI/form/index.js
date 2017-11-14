import React, { Component } from 'react';

//Assets 
import './styles.css';

let isEmpty = (value) => {  //Saher si está vacio.

    if (value !== '' && value !== undefined) {
        if (value.trim().length > 0) {
            return true;
        }
    }
    return false;
}

let validationEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
} 

let validationNumber = (numberString) => {
    var re = /[1-9]/;
    console.log("------");
    console.log(numberString);
    console.log(re.test(numberString));
    console.log("------");
    return re.test(numberString);

}

const inputValidate = {
    boxSizing: 'border-box',
    borderBottom: '2px solid green'
}

const inputInvalidate = {
    boxSizing: 'border-box',
    borderBottom: '2px solid red'
}


export function Response (status = false,value = '' ,message = ''){
    this.status = status;
    this.value = value;
    this.message = message;
}

export class InputText extends Component {

    constructor(props){
        super(props);


        this.state = {
            placeholder : this.props.placeholder != null ? this.props.placeholder : 'Ejemplo: Place',
            id : this.props.id != null ? this.props.id : 'first_name',
            label : this.props.label != null ? this.props.label : 'Label Text',
            value : this.props.value != null ? this.props.value : '',
            disabled: this.props.disabled != null ? this.props.disabled ? true : false : false,
            isValidate: false,
            style: {},
            required : this.props.required != null ? (this.props.required) ? '(**)' : '' : '',
            status: this.props.required != null ? ((this.props.required) ? false : true) : false
        }
    }

    handleBlur(e){

        if(this.state.required){
            if (isEmpty(e.target.value)) {
                    this.setState({
                        isValidate: true,
                        style: inputValidate,
                        status: true
                    })
            }
            else{
                this.setState({
                    isValidate: false,
                    style: inputInvalidate,
                    status: false
                })
    
            }
        }else{
            if (e.target.value.trim().length === 0) {
                this.setState({
                    isValidate: true,
                    style: {},
                    status: true
                })
            }
            if (e.target.value.trim().length > 0) {
                this.setState({
                    isValidate: true,
                    style: inputValidate,
                    status: true
                })
            }
        }

    }

    getValue(){
      
        let _response = new Response(); //Instancio una respuesta.


        if (this.state.status) { //Si es correcto enviarlo.
            _response.status = true;
            _response.value = this.state.value;
            _response.message = "OK"

            return _response;   //Devuelvo el dato valido.
        }

        _response.message = "No valido el "+ this.state.label;

      return _response;

    }
    handleChangeValue(e){
        this.setState({
            value: e.target.value
        });
    }
    render () {
        return (
            <div className="input-field">
                <input autoFocus ref="pepe" style={this.state.style} placeholder={this.state.placeholder} id={this.state.id} type="text"  value={this.state.value} onChange={this.handleChangeValue.bind(this)} onBlur={this.handleBlur.bind(this)}/>
                <label htmlFor={this.state.id}>{this.state.label} {this.state.required} </label>
            </div>
        );
    }
}

export class InputEmail extends Component{
    
        constructor(props){
            super(props);
    
    
            this.state = {
                placeholder : this.props.placeholder != null ? this.props.placeholder : 'Ejemplo: codigointeractivo@gmail.com',
                id : this.props.id != null ? this.props.id : 'email',
                label : this.props.label != null ? this.props.label : 'Email',
                value : this.props.value != null ? this.props.value : '',
                isValidate: false,
                style: {},
                required : this.props.required != null ? (this.props.required) ? '(**)' : '' : '',
                status: this.props.required != null ? (this.props.required) ? false : true : false
            }
        }
    
        handleBlur(e){
    
            if(this.state.required){
                if (isEmpty(e.target.value)) {
                    if (validationEmail(e.target.value)) {
                        this.setState({
                            isValidate: true,
                            style: inputValidate,
                            status: true
                        })
                    } else {
                        this.setState({
                            isValidate: false,
                            style: inputInvalidate,
                            status: false
                        })

                    }
                }
                else{
                    this.setState({
                        isValidate: false,
                        style: inputInvalidate,
                        status: false
                    })
        
                }
            }else{
                if (e.target.value.trim().length === 0) {
                    this.setState({
                        isValidate: true,
                        style: {},
                        status: true
                    })
                }
                if (e.target.value.trim().length > 0) {
                    this.setState({
                        isValidate: true,
                        style: inputValidate,
                        status: true
                    })
                }
            }
    
        }
        
        getValue() {

            let _response = new Response(); //Instancio una respuesta.


            if (this.state.status) { //Si es correcto enviarlo.
                _response.status = true;
                _response.value = this.state.value;
                _response.message = "OK"
                return _response;   //Devuelvo el dato valido.
            }

            _response.message = "No valido el " + this.state.label;

            return _response;

        }
        handleChangeValue(e){
            this.setState({
                value: e.target.value
            });
        }
        render () {
            return (
                <div className="input-field" data-name={this.props.dataName} data-validation={this.state.status} >
                    <input style={this.state.style} placeholder={this.state.placeholder} id={this.state.id} type="email"  value={this.state.value} onChange={this.handleChangeValue.bind(this)} onBlur={this.handleBlur.bind(this)}/>
                    <label htmlFor={this.state.id}
                        data-error="Email no valido" data-success="Correctamente validado"
                    >{this.state.label} {this.state.required} 
                    </label>
                </div>
            );
        }

} 

export class InputNumber extends Component {

    constructor(props) {
        super(props);


        this.state = {
            placeholder: this.props.placeholder != null ? this.props.placeholder : '555',
            id: this.props.id != null ? this.props.id : 'number',
            label: this.props.label != null ? this.props.label : 'Number input',
            value: this.props.value != null ? this.props.value : '',
            isValidate: false,
            style: {},
            required: this.props.required != null ? (this.props.required) ? '(**)' : '' : '',
            status: this.props.required != null ? (this.props.required) ? false : true : false
        }

        this.handleChangeValue = this.handleChangeValue.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleBlur(e) {

        if (this.state.required) {
            if (isEmpty(e.target.value)) {
                if (validationNumber(e.target.value)) {
                    this.setState({
                        isValidate: true,
                        style: inputValidate,
                        status: true
                    })
                } else {
                    this.setState({
                        isValidate: false,
                        style: inputInvalidate,
                        status: false
                    })

                }
            }
            else {
                this.setState({
                    isValidate: false,
                    style: inputInvalidate,
                    status: false
                })

            }
        } else {
            if (e.target.value.trim().length === 0) {
                this.setState({
                    isValidate: true,
                    style: {},
                    status: true
                })
            }
            if (e.target.value.trim().length > 0) {
                this.setState({
                    isValidate: true,
                    style: inputValidate,
                    status: true
                })
            }
        }

    }

    handleChangeValue(e) {
        if(this.numberValidate(e.target.value))
        {

            this.setState({
                value: e.target.value
            });
        }            
    }

    numberValidate(string) {
        var patron = /^\d*$/;


        return (!string.search(patron)) ? true : false;    //Retorna true si es solo numerico.
    }

    getValue() {

        let _response = new Response(); //Instancio una respuesta.


        if (this.state.status || this.state.value !== '') { //Si es correcto enviarlo.
            _response.status = true;
            _response.value = this.state.value;

            return _response;   //Devuelvo el dato valido.
        }


        _response.message = "No valido el " + this.state.label;

        return _response;

    }
    render() {
        return (
            <div 
                className="input-field"
                >
                
                <input style={this.state.style} placeholder={this.state.placeholder} id={this.state.id} type="text" value={this.state.value} onChange={this.handleChangeValue} onBlur={this.handleBlur} />
                <label 
                    htmlFor={this.state.id}
                >
                {this.state.label} {this.state.required}
                </label>
            </div>
        );
    }

} 
export class TextArea extends Component {

    constructor(props) {
        super(props);


        this.state = {
            limitChar: this.props.limitChar != null ? this.props.limitChar : 200, 
            id: this.props.id != null ? this.props.id : 'textareaCourse',
            label: this.props.label != null ? this.props.label : 'Label Text',
            value: this.props.value != null ? this.props.value : '',
            isValidate: false,
            style: {},
            required: this.props.required != null ? (this.props.required) ? true : false : false,
            status: this.props.required != null ? (this.props.required) ? false : true : false
        }
    }

    handleChangeValue(e) {
        if (this.isValidate(e.target.value)) {
            console.log('====================================');
            console.log(e.target.value);
            console.log('====================================');
            return this.setState({
                value: e.target.value,
                isValidate: true,
                status: true
            });
        }else{
            return this.setState({
                isValidate: false,
                status: false,
            });

        }

        
    }

    isValidate(string){

        if (string.length <= this.state.limitChar) {
            return (this.state.required) ? ((string.length > 0 ) ? true : false) : true;
        }        
        return false;
    }

    getValue(){
            let _response = new Response();

            if (this.state.status) {

                _response.status = true;
                _response.message = "OK";
                _response.value = this.state.value;

            }else{
                _response.message = "NO VALIDO";

            }
            return _response;

    }

    render() {

        return (
            <div className="input-field" data-name={this.props.dataName}>
                <textarea 
                    className="materialize-textarea textarea-400"
                    id={this.state.id}
                    type="text"
                    onChange={this.handleChangeValue.bind(this)}
                    value={this.state.value} />

                    <label htmlFor={this.state.id}>{this.state.label}
                    {this.state.required ? '(**)' : null}</label>

                    <div className="chip right">
                        {this.state.value.length} / {this.state.limitChar}
                        <i className="material-icons verticalAlign">info</i>
                    </div>

            </div>
        );
    }
}


export class ImageField extends Component {

    constructor(props) {
        super(props);

        this.state = {
            empty: true,
            uploadedImage: false,
            imageLoading: false,
            base64: '',
            nameImg:'',
            status: true,   //Siempre status true
            idImageB64: this.props.idImageB64 != null ? this.props.idImageB64 : 'imgItem',
            idinputImage: this.props.idinputImage != null ? this.props.idinputImage : 'inputImage',
        }

        this.handleUpload = this.handleUpload.bind(this);
        this.handleShowImage = this.handleShowImage.bind(this);

    }
    handleUpload(e) {
        const imgItem = document.getElementById(this.state.idImageB64);
        
        let nameImg = '';   //Inicializo el name img, donde guardaré el nombre de la img.

        const file = document.getElementById(this.state.idinputImage).files[0];    //File del input. Imagen cargada.

        let reader = new FileReader();  //Instanciando un File Reader.
        
        reader.onprogress = () => { //Mientras está cargando
            this.setState({
                imageLoading: true
            })
            
        }

        reader.onloadend = () => {  //Se ejecuta cuando se terminó el proceso.

            setTimeout(function () {
                imgItem.src = reader.result;
                nameImg = document.getElementById('inputText').value;

                this.setState({
                    imageLoading: false,
                    base64: imgItem.src,
                    nameImg
                })
                console.log('====================================');
                console.log(this.state.base64);
                console.log(imgItem.src);
                console.log('====================================');
            }.bind(this), 1000 * 2);

        }


        if (file) { //Si hay un archivo.

            reader.readAsDataURL(file); //Lo leo desde URL. 
            this.setState({
                uploadedImage: true,
                status:true,
                
            })


        }


    }

    getValue(){
        let _response = new Response();
        let ImageObject = {};

        ImageObject.nameImg = this.state.nameImg;
        ImageObject.base64 = this.state.base64;
        
        _response.value = ImageObject;
        _response.status = true;
        _response.message = "OK";

        return _response;
    }

    handleShowImage(e){ //Saber si muestro o no el controlador para subir imagenes.

        if (e.target.id === 'showImagen') {
            
            this.setState({
                empty: false
            });
        }

        if (e.target.id === 'hideImage') {
            
            var img = document.getElementById(this.state.idImageB64);
            var inputText = document.getElementById('inputText');

            if (img !== null || img !== undefined) {
                img.src = '';
                console.log(inputText);
                inputText.value = '';
            }

            this.setState({
                empty: true
            });
        }
    }

    render() {

        const styles = {
            btnStyles:{
                width:'100%',
                margin: '1rem auto'
            },
            imgStyles:{
                maxWidth: '400px',
                maxHeight: '400px'
            }
        }

        return (
            <div className="input-field" data-name={this.props.dataName} data-validation={this.state.status} >

                    <div className={!this.state.empty ? 'input-field center' : 'hide'}>

                    <div className={this.state.imageLoading ? "preloader-wrapper big active" : 'hide'}>
                            <div className="spinner-layer spinner-blue-only">
                                <div className="circle-clipper left">
                                    <div className="circle"></div>
                                </div><div className="gap-patch">
                                    <div className="circle"></div>
                                </div><div className="circle-clipper right">
                                    <div className="circle"></div>
                                </div>
                            </div>
                        </div>

                        <div className={(this.state.uploadedImage) ? "card center" : 'hide'} id="imagePreviewContainer" >
                            <img src="" alt="Imagen preview ..." id={this.state.idImageB64} style={styles.imgStyles}/>
                        </div>

                        <div className="file-field input-field">

                            <div className="btn">
                                <span>Imagen</span>
                                <input
                                    type="file"
                                    id={this.state.idinputImage}
                                    accept="image/jpeg"
                                    onChange={this.handleUpload} />
                            </div>

                            <div className="file-path-wrapper">

                                <input
                                    className="file-path validate"
                                type="text" id="inputText"/>

                            </div>
                        </div>
                    </div>

                    <div className="center">

                        <a

                                style={styles.btnStyles}
                                className={(!this.state.empty) ? 'hide' : `btn yellow darken-3 `}
                                id="showImagen"
                                width="100%"
                                onClick={this.handleShowImage}>
                                Cargar imagen
                        </a>

                        <a
                                style={styles.btnStyles}
                                className={(!this.state.empty) ? `btn red darken-3` : 'hide'}
                                id="hideImage"
                                onClick={this.handleShowImage}>
                                Sin imagen
                        </a>

                    </div>
            </div>
        );
    }
}
