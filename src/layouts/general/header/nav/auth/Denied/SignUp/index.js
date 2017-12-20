import React from 'react';

//UI
    //MATERIAL UI
    import { Dialog, FlatButton } from 'material-ui';
    import TextField from 'material-ui/TextField';

    //MATERIALIZE
    import { SideNavItem } from 'react-materialize'

    //OWN
        //Form
        import {InputText} from './../../../../../../../helpers/UI/form/input/InputText'
        import {InputEmail} from './../../../../../../../helpers/UI/form/input/inputEmail'
        import {InputPassword} from './../../../../../../../helpers/UI/form/input/inputPassword'
        //Messages
        import { FormMessage } from '../../../../../../../helpers/UI/messages/FormMessage/index';
        //Progress loading
        import { ProgressCircle } from '../../../../../../../helpers/UI/misc/index';
        

//Responses
import { SignUpResponse} from './../../../../../../../helpers/responses/FormResponse/FormResponseSignUp';

export default class SignUp extends React.Component {


    constructor() {
        super();

        this.state = {
            openDialogSign: false,
            messageError: [],
            loading: false
        }

        this.handleModal = this.handleModal.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);



    }

    handleModal = () => this.setState({ openDialogSign: true });
    handleClose = () => this.setState({ openDialogSign: false });

    handleSubmit(){
        this.setState({
            loading:true,
            messageError:[]
        });
        let name = this.refs.nameSign.getValue();
        let user = this.refs.userSign.getValue();
        let email = this.refs.emailSign.getValue();
        let password = this.refs.passwordSign.getValue();
        
        let formResponse = new SignUpResponse(name,user,email,password);

        if (formResponse.status) {
            this.setState({
                loading: false
            });

            return console.log(name,user,email,password);
        }
        console.log("< ==================<##DEBUG=>FORMRESPONSE========================");
        console.log(name,user,email,password);
        console.log(formResponse);
        console.log("====================##DEBUG====================== />");
        
        setTimeout(() => {
            this.setState({
                messageError: [...formResponse.message],
                loading: false,
            })
        }, 2000);
    }   

    render() {
        const actions = [
            <FlatButton
                label="Cancelar"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Ingresar"
                primary={true}
                // keyboardFocused={true}
                onClick={this.handleSubmit}
            />,
        ];

        if (this.state.loading) {
            return (

                <SideNavItem href='#!icon' icon='face' onClick={this.handleModal}>Sign Up

                    <Dialog
                        title="Registrate!"
                        modal={false}
                        open={this.state.openDialogSign}
                        onRequestClose={this.handleClose}
                    >
                        <ProgressCircle active={this.state.loading} size={250} />

                    </Dialog>

                </SideNavItem>

            )
        }
        return (
            <SideNavItem href='#!icon' icon='face'  onClick={this.handleModal}>Sign Up

                    <Dialog
                    title="Registrate!"
                    style={{textAlign:'center'}}
                    actions={actions}
                    modal={false}
                    open={this.state.openDialogSign}
                    onRequestClose={this.handleClose}
                    >

                    <FormMessage messages={this.state.messageError} />

                    <InputText
                        label="Nombre completo"
                        placeholder="Example: Cristian Daud"
                        required={true}
                        ref="nameSign"
                        // value={this.state.resource.TitleResource}
                    />

                    <InputText
                        label="Usuario"
                        placeholder="Example: CDaud"
                        required={true}
                        ref="userSign"
                        // value={this.state.resource.TitleResource}
                    />

                    <InputEmail
                        label="Email"
                        placeholder="Example: cdaud777@gmail.com"
                        required={true}
                        ref="emailSign"
                        // value={this.state.resource.TitleResource}
                    />
                    
                    <InputPassword 
                        required={true}
                        ref="passwordSign"
                    />
                    </Dialog>

            </SideNavItem>

        )
    }
}