import React, { Component } from 'react';

class ClassHeader extends Component {
    render() {
        return (
            <header className="class-header">
                <div className="container">

                    <div className="class-header__title white-text">
                        <i className="medium material-icons">stay_primary_portrait</i>
                        <h4>  Curso Desarollo Nativo Android </h4>
                    </div>

                    <div className="class-video__container col s12">
                        <div className="class-video__title white-text">
                            <span className="pull-left">1. Inicio Curso </span>
                        </div>

                        <iframe src={this.props.videoURL} className="class-video__preview"></iframe>
                    </div>

                </div>
            </header>
        )
    }
}

export default ClassHeader;
