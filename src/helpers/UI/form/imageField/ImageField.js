import React, { Component } from 'react';

//Validations.
import { isEmpty, inputValidate, inputInvalidate } from "./../validation";

//Config.
import { Response } from "./../config";


export class ImageField extends Component {

    constructor(props) {
        super(props);

        this.state = {
            empty: !props.pathImage ? true : false , //Si traigo un Path de imagen significa que debo mostrar
            pathImage: props.pathImage || null,
            pathRoute:  props.pathRoute || null,   //Ruta del acceso a la imagen
            uploadedImage: props.pathImage ? true : false, //Si traigo un Path de imagen significa que debo mostrar
            imageLoading: false,
            base64: '',
            nameImg: '',
            status: true,   //Siempre status true
            idImageB64: props.idImageB64 || 'imgItem',
            idinputImage: props.idinputImage || 'inputImage',
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
                status: true,

            })


        }


    }

    getValue() {
        let _response = new Response();
        let ImageObject = {};

        ImageObject.nameImg = this.state.nameImg;
        ImageObject.base64 = this.state.base64;

        _response.value = ImageObject;
        _response.status = true;
        _response.message = "OK";

        return _response;
    }

    handleShowImage(e) { //Saber si muestro o no el controlador para subir imagenes.

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
            btnStyles: {
                width: '100%',
                margin: '1rem auto'
            },
            imgStyles: {
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
                        <img src={this.state.pathRoute+this.state.pathImage} alt="Imagen preview ..." id={this.state.idImageB64} style={styles.imgStyles} />
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
                                type="text" id="inputText" />

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
