import React from 'react';


export default class Content extends React.Component {

    render() {
       
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}