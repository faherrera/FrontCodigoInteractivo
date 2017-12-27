import React, { Component } from 'react';

//Assets
import './styles.css';

class DetailHeader extends Component {
    
    render() {
        let {course} = this.props; 
        //En caso de que video_preview sea nulo, doy un video por defecto.
        let pathVideoDefault = "https://www.youtube.com/embed/e11AiawcDUY"; 

        let classes = course.Classes; 
        console.log(course.Level);
        return (
            <div className="detail-course__header">
                <div className="container">
                    <div className="detail-course__title">
                        <div className="detail-logo">
                            <i className="large material-icons">stay_primary_portrait</i>
                        </div>
                        <h3> {course.Name} </h3>
                    </div>

                    <div className="detail-course__preview-container">
                        <div className="row">
                            <div className="video-preview card-panel col s12 l8 ">
                                <iframe src={course.Video_preview || pathVideoDefault}></iframe>
                            </div>

                            <ul className=" menu-preview col s12 l4">
                                <li>
                                    <i className=" medium material-icons">stars</i>
                                    <span > {course.modeArray[course.Mode]} </span>
                                </li>

                                <li >
                                    <i className=" medium material-icons">alarm</i>
                                    <span> {`${classes.length} Clases`} </span>
                                </li>

                                <li >
                                    <i className=" medium material-icons">date_range</i>
                                    <span> 12/03/17 - 13/04/17 </span>
                                </li>

                                <li >
                                    <i className=" medium material-icons">computer</i>
                                    <span> {course.levelArray[course.Level]} </span>
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
