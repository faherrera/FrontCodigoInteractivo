import React, { Component } from 'react';

export default class ImageUpload extends Component {

    constructor(props){
        super(props);

        this.state = {
            imageLoading: false

        }

        this.handleUpload = this.handleUpload.bind(this);

    }
    handleUpload(e) {
        const imagePreviewContainer = document.getElementById('imagePreviewContainer');

        if (imagePreviewContainer.hasChildNodes()) {

            imagePreviewContainer.removeChild(imagePreviewContainer.firstElementChild);
        }

        if (e.target.files && e.target.files[0]) {


            var reader = new FileReader();

            reader.onload = (e) => {
                var imagePreviewItem = new Image();

                imagePreviewItem.id = 'imagePreviewItem';

                imagePreviewItem.src = e.target.result;

                console.log('====================================');
                console.log(imagePreviewItem);
                console.log(imagePreviewItem.width);
                console.log(imagePreviewItem.height);

                console.log(e.target.result);   //imprimo por consola. 
                console.log('====================================');

                this.setState({
                    imageLoading: true
                })

                imagePreviewContainer.appendChild(imagePreviewItem);

                this.setState({
                    imageLoading: false
                })

            }

            reader.readAsDataURL(e.target.files[0]);


        }
    }

    
    render () {
        return (
            <div className="input-field col s12">
                <div className={this.state.imageLoading ? 'progress' : 'hide'}>
                    <div className="indeterminate"></div>
                </div>
                <div className="card center" id="imagePreviewContainer">

                </div>

                <div className="file-field input-field">
                    <div className="btn">
                        <span>Imagen</span>
                        <input type="file" id="inputImage" accept="image/*" onChange={this.handleUpload} />
                    </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate"
                            type="text" />
                    </div>
                </div>

            </div>
        );
    }
}