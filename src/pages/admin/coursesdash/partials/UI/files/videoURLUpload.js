import React, { Component } from 'react';

const styles = {
    iframeStyle: {
        width: '100%',
        height: '300px',
        marginTop: '.5rem',
        border: 'none'
    }
}
export default class VideoURLUpload extends Component {
    constructor(props){
        super(props);

        this.state = {
            videoUrl: '',
            videoPreview: false,

        }

        this.handleVideoPreview = this.handleVideoPreview.bind(this);
    }

    handleVideoPreview(e) {

        let elementVideoPreview = document.getElementById('videoInput');

        if (e.target.id == 'watchPreview') {

            this.setState({
                videoPreview: true
            })
        }

        if (e.target.id == 'unWatchPreview') {
            elementVideoPreview.value = '';

            this.setState({
                videoUrl: '',
                videoPreview: false
            });
        }


    }

    render () {
        return (
            <div className="input-field col s12" >
                <a href="#!" id="watchPreview" className={!this.state.videoPreview ? 'btn-large yellow darken-3 col s12 ' : 'hide'} onClick={this.handleVideoPreview}> Colocar video preview </a>



                <div className={this.state.videoPreview ? "input-field col s12 " : 'hide'} >
                    <a href="#!" id="unWatchPreview" className={this.state.videoPreview ? 'btn-large red darken-3 col s12' : 'hide'} onClick={this.handleVideoPreview}> Sin preview </a>

                    <iframe style={styles.iframeStyle} className={this.state.videoPreview ? '' : 'hide'} id="videoPreview" src={this.state.videoUrl} allowFullScreen></iframe>

                    <input id="videoInput" type="text" className="validate" tabIndex="0" placeholder="Http://www.vimeo.com" onChange={() => this.setState({ videoUrl: document.getElementById('videoInput').value })} />
                    <label >Video Preview</label>
                </div>

            </div>
        );
    }
}