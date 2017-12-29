import React, { Component } from 'react';

//Assets
    import noVideo from './../../../../assets/img/noVideo.jpg';

//Routes
import {arrayRoutesGeneral} from './../../../../helpers/routesConfig'
class ClassHeader extends Component {

    renderVideoOrImage(){
        let {PathVideo} = this.props;

        if (PathVideo) {
            return <iframe src={PathVideo} className="class-video__preview"></iframe>;
        }

        return <img src={noVideo} alt="Imagen de la clase que no tiene video."/>
    }

    render() {
        let { Title, PathVideo,NameCourse,CourseID} = this.props;        
        return (
            <header className="class-header">
                <div className="container">

                    <div className="class-header__title ">
                        <i className="medium material-icons">stay_primary_portrait</i>
                        <h4> <a href={arrayRoutesGeneral.courses+CourseID}> {NameCourse} </a> </h4>
                    </div>

                    <div className="class-video__container col s12">
                        <div className="class-video__title white-text">
                            <span className="pull-left">{Title} {!PathVideo ? "- (Clase sin video)" : null} </span>
                            {this.renderVideoOrImage()}
                        </div>

                    </div>

                </div>
            </header>
        )
    }
}

export default ClassHeader;
