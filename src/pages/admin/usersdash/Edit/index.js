import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Components
    import Form from './../partials/Form/';
export default class Edit extends Component {
    render() {
        return (
            <Form
                type="edit"
                user={this.props.user}
            />
        );
    }
}

Edit.propTypes  = {
    user : PropTypes.object.isRequired,    //Objeto que se va a editar.
}