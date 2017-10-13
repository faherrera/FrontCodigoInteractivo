import React, { Component } from 'react';
export default class ErrorMessage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messageError: [],
            showErrors: false,
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.listing.length > 0) {
            this.setState({
                messageError: nextProps.listing,
                showErrors: true,
            });
            
        } else {
            this.setState({
                messageError: [],
                showErrors: false,
            });
        }

    }

    render() {
        return (
            <ul className={this.state.showErrors ? "Collection red lighten-3" : 'hide'}>
                {this.state.messageError.map((obj, index) => {
                    return <li key={index}>{obj}</li>;
                })}
            </ul>
        );
    }
}