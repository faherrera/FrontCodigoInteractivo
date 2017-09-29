import React from 'react';
import { Dialog, FlatButton } from 'material-ui';
import TextField from 'material-ui/TextField';


export default class SignUp extends React.Component {


    constructor() {
        super();

        this.state = {
            open: false
        }

        this.handleModal = this.handleModal.bind(this);
        this.handleClose = this.handleClose.bind(this);



    }

    handleModal = () => this.setState({ openDialogLogin: true });
    handleClose = () => this.setState({ openDialogLogin: false });



    render() {
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


        return (

            <a className={this.props.deviceSignStyle} onClick={this.handleModal}>Registrate

                    <Dialog
                    title="Registrarte"
                    style={{textAlign:'center'}}
                    actions={actions}
                    modal={false}
                    open={this.state.openDialogLogin}
                    onRequestClose={this.handleClose}
                    >

                    <TextField
                        hintText="Nombre"
                        id="name"
                        fullWidth={true}

                    />
                    

                    <TextField
                        hintText="Email"
                        id="email"
                        type="email"
                        fullWidth={true}

                    />
                
                
                    <TextField
                        hintText="Password"
                        type="password"
                        floatingLabelText="floatin text"
                        fullWidth={true}
                    />
                        

                    

                   

                 
                    </Dialog>

            </a>

        )
    }
}