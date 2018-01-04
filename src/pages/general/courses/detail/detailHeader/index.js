import React, { Component } from 'react';

//Assets
    import './styles.css';
    import noImage from './../../../../../assets/img/noimage.jpg';

//Routes
    import {arrayUpload} from './../../../../../helpers/routesConfig';

class DetailHeader extends Component {
    
    renderVideoOrImage = () => {
        let { course } = this.props; 
        
        let Thumbnail = course.Thumbnail ? arrayUpload.courses+course.Thumbnail : noImage;

        if (!course.Video_preview) {
            return (
                <div className="video-preview card-panel col s12 l8 ">
                    <img src={Thumbnail} alt="Imagen del curso" srcset=""/>
                </div>
            );
        }
        
        return(
            <div className="video-preview card-panel col s12 l8 ">
                <iframe src={course.Video_preview}></iframe>
            </div>
        );

    }
    render() {
        let {course} = this.props; 
        //En caso de que video_preview sea nulo, doy un video por defecto.

        let classes = course.Classes.length ? `${course.Classes.length} Clases` : "Subida en progreso" ;         
        return (
            <div className="detail-course__header">
                <div className="container">
                    <div className="detail-course__title">
                        <div className="detail-logo">
                            <i className="large material-icons">developer_mode</i>
                        </div>
                        <h3> {course.Name} </h3>
                    </div>

                    <div className="detail-course__preview-container">
                        <div className="row">
                            
                            {this.renderVideoOrImage()}
                            <ul className=" menu-preview col s12 l4">
                                <li>
                                    <i className=" medium material-icons">stars</i>
                                    <span > {course.Mode} </span>
                                </li>

                                <li >
                                    <i className=" medium material-icons">sentiment_very_satisfied</i>
                                    <span> {classes} </span>
                                </li>

                                <li >
                                    <i className=" medium material-icons">date_range</i>
                                    <span> 12/03/17 - 13/04/17 </span>
                                </li>

                                <li >
                                    <i className=" medium material-icons">{course.Level == 2 ? 'public' : "computer"}</i>
                                    <span> {course.Level} </span>
                                </li>

                            </ul>

                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default DetailHeader;
