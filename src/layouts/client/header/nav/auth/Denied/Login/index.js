import React from 'react';

//UI
//MATERIAL UI

//MATERIALIZE
import { SideNavItem } from 'react-materialize'
//OWN COMPONENTS
import LoginDialog from './Dialog';

//Requesst
import { postSignUp } from './../../../../../../../helpers/requests/SignUpRequest';

export default class Login extends React.Component {


    constructor() {
        super();

        this.state = {
            openDialog: false,
        }

        this.handleModal = this.handleModal.bind(this);
        this.handleClose = this.handleClose.bind(this);



    }

    handleModal = () => this.setState({ openDialog: true });
    handleClose = () => this.setState({ openDialog: false });


    render() {

        return (
            <SideNavItem href='#!icon' icon='account_circle' onClick={this.handleModal}>Login

                <LoginDialog open={this.state.openDialog} />

            </SideNavItem>

        )
    }
}