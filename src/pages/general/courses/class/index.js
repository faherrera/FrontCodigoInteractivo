//References
import React, { Component } from 'react';

//Assets
import css from './style.css';
//Component
import ClassHeader from './classHeader/';
import ClassContent from './classContent/';

class Class extends Component {
    render() {
        return (
            <div className="page-class">
                <ClassHeader
                    videoURL="https://www.youtube.com/embed/90G20Z1n7ag"
                />
                <ClassContent />

            </div>
        )
    }
}

export default Class;
