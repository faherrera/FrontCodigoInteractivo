import React, { Component } from 'react';
import { Container } from 'react-materialize';
import PropTypes from 'prop-types';

export default class NoNav extends Component {
    
    render() {
        return (
            <main >
                <Container>
                    {this.props.children}
                </Container>
            </main>
        );
    }
}

NoNav.PropTypes = {
    children: PropTypes.any.isRequired,
}