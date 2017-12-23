import React from 'react';

//UI
    //MATERIAL UI

    //MATERIALIZE
    import { SideNavItem } from 'react-materialize'
    //OWN COMPONENTS
    import SignUpDialog from './Dialog';
//Responses
    import { SignUpResponse} from './../../../../../../../helpers/responses/FormResponse/FormResponseSignUp';
//Requesst
    import { postSignUp } from './../../../../../../../helpers/requests/SignUpRequest';

export default class SignUp extends React.Component {


    constructor() {
        super();

        this.state = {
            openDialogSign: false,
        }

        this.handleModal = this.handleModal.bind(this);
        this.handleClose = this.handleClose.bind(this);



    }

    handleModal = () => this.setState({ openDialogSign: true });
    handleClose = () => this.setState({ openDialogSign: false });


    render() {
        
        return (
            <SideNavItem href='#!icon' icon='face'  onClick={this.handleModal}>Sign Up

                <SignUpDialog open={this.state.openDialogSign}/>
                 
            </SideNavItem>

        )
    }
}