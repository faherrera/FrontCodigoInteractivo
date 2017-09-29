import React from 'react';


export default class Content extends React.Component {

    render() {
        return (
            <section className="content-admin">
                {this.props.children}
            </section>
        );
    }
}