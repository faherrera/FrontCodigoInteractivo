import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.
 */

 /**
  * props = handleDelete.
  * Esta prop será la que indicará la petición async para eliminar los datos.
  */
export default class AlertRemove extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.handleDelete = this.handleDelete.bind(this);

    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleDelete() {
        this.handleClose();
        this.props.handleDelete();
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancelar"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Eliminar"
                primary={true}
                onClick={this.handleDelete}
            />,
        ];

        return (
            <div>
                <a onClick={this.handleOpen} key={2} className="red ligthen-3 btn"><i className="material-icons">delete</i></a>
                <Dialog
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    ¿Está seguro de eliminar <strong> <em> {this.props.name} </em> </strong> ?
                </Dialog>
            </div>
        );
    }
}