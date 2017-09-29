import React from 'react';
import { Dialog, FlatButton } from 'material-ui';

export default class Login extends React.Component{


    constructor(){
        super();

        this.state = {
            open:false
        }

        this.handleModal = this.handleModal.bind(this);
        this.handleClose = this.handleClose.bind(this);

        

    }

    handleModal = () => this.setState({ openDialogLogin: true });
    handleClose = () => this.setState({ openDialogLogin: false });



    render(){
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />,
        ];


        return(

                <a className={this.props.deviceLoginStyle} onClick={this.handleModal}>Ingresar

                    <Dialog
                            title="Dialog With Actions"
                            actions={actions}
                            modal={false}
                            open={this.state.openDialogLogin}
                            onRequestClose={this.handleClose}
                        >
                            The actions in this window were passed in as an array of React objects.
                    </Dialog>

                </a>

        )
    }
}