import React, { Component } from 'react';

export default class ImageUpload extends Component {

    constructor(props){
        super(props);

        this.state = {
            uploadedImage: false,
            imageLoading: false,
            imgBase64: ''

        }

        this.handleUpload = this.handleUpload.bind(this);

    }
    handleUpload(e) {
        const imgItem = document.getElementById('imgItem');

        const file = document.getElementById('inputImage').files[0];    //File del input. Imagen cargada.

        let reader = new FileReader();  //Instanciando un File Reader.

        reader.onloadend = () => {  //Se ejecuta cuando se terminó el proceso.
            
            setTimeout(function(){
                imgItem.src = reader.result;
                this.setState({
                    imageLoading: false,
                    imgBase64: imgItem.src
                })
            }.bind(this), 1000 * 2);

        }
        
        reader.onprogress = () => {
            this.setState({
                imageLoading: true
            })
            console.log('cargando');

        }

        if (file) { //Si hay un archivo.

            reader.readAsDataURL(file); //Lo leo desde URL. 
            this.setState({
                uploadedImage:true
            })
        }


    }

    
    render () {
        return (
            <div className="input-field col s12">
                <div className={this.state.imageLoading ? 'progress' : 'hide'}>
                    <div className="indeterminate"></div>
                </div>
                <div className={ (this.state.uploadedImage) ? "card center" : 'hide'} id="imagePreviewContainer">
                    <img src="" alt="Imagen preview ..." id="imgItem"/>
                </div>

                <div className="file-field input-field">
                    
                    <div className="btn">
                        <span>Imagen</span>
                        <input 
                            type="file" 
                            id="inputImage" 
                            accept="image/*"
                            onChange={this.handleUpload}/>
                    </div>

                    <div className="file-path-wrapper">
                        
                        <input 
                            className="file-path validate"
                            type="text" />

                    </div>
                </div>

            </div>
        );
    }
}