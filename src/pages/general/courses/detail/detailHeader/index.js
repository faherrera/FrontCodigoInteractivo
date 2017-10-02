import React, { Component } from 'react';

//Assets
import './styles.css';

class DetailHeader extends Component {
    render() {
        return (
            <div className="detail-course__header">
                <div className="container">
                    <div className="detail-course__title">
                        <div className="detail-logo">
                            <i className="large material-icons">stay_primary_portrait</i>
                        </div>
                        <h3> Desarollo Nativo Android </h3>
                    </div>

                    <div className="detail-course__preview-container">
                        <div className="row">
                            <div className="video-preview card-panel col s12 l8 ">
                                <iframe src="https://player.vimeo.com/video/99125930?title=0&byline=0&portrait=0"></iframe>
                            </div>

                            <ul className=" menu-preview col s12 l4">
                                <li>
                                    <i className=" medium material-icons">stars</i>
                                    <span > Principiante </span>
                                </li>

                                <li >
                                    <i className=" medium material-icons">alarm</i>
                                    <span> 24 Clases </span>
                                </li>

                                <li >
                                    <i className=" medium material-icons">play_circle_filled</i>
                                    <span> 12 Videos </span>
                                </li>

                                <li >
                                    <i className=" medium material-icons">computer</i>
                                    <span> Presencial </span>
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
