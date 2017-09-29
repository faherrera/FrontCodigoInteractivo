import React from 'react';

//Components UI

    import {
        indigoA100
    } from 'material-ui/styles/colors.js';

export default class Footer extends React.Component {

    constructor(props){
        super(props);
        console.log(props.background);
    }
    render() {

        const styled = {
            background: this.props.background
        }

        return (
            <footer  
                className="footer-admin center"
                style={styled}
            >
                <h1> Footer Admin </h1>
            </footer>
        );
    }
}