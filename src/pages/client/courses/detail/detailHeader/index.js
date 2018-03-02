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
                <div className="video-preview ">
                    <img src={Thumbnail} alt="Imagen del curso" srcset=""/>
                </div>
            );
        }
        
        return(
            <div className="video-preview ">
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
                            {this.renderVideoOrImage()}
                            <div className="menu-preview">
                                <ul >
                                    <li>
                                        <i className=" material-icons">mouse</i>
                                        <span > {course.Level} </span>
                                    </li>

                                    <li >
                                        <i className=" material-icons">sentiment_very_satisfied</i>
                                        <span> {classes} </span>
                                    </li>

                                    <li >
                                        <i className=" material-icons">date_range</i>
                                        <span> {new Date(course.StartDate).toLocaleDateString()} - {course.Duration} </span>
                                    </li>

                                    <li >
                                    
                                    <i className=" material-icons">attach_money</i>
                                        <span > {course.Price || "No definido por el momento"} </span>

                                    </li>

                                    <li >
                                        <i className=" material-icons">{course.Mode == "presencial" || course.Mode == "Presencial" ? 'location_city' : "headset_mic"}</i>
                                        <span> {course.Mode} </span>
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
