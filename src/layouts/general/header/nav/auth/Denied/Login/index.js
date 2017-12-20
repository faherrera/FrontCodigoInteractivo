import React from 'react';
import { Dialog, FlatButton } from 'material-ui';

//UI
    //MATERIALIZE
    import { SideNavItem } from 'react-materialize'
    //OWN
        //Form
        import { InputText } from './../../../../../../../helpers/UI/form/input/InputText'
        import { InputEmail } from './../../../../../../../helpers/UI/form/input/inputEmail'
        import { InputPassword } from './../../../../../../../helpers/UI/form/input/inputPassword'
        //Messages
        import { FormMessage } from '../../../../../../../helpers/UI/messages/FormMessage/index';
        //Misc
        import { ProgressCircle } from '../../../../../../../helpers/UI/misc/index';

//Responses
import { LoginResponse } from './../../../../../../../helpers/responses/FormResponse/FormResponseLogin';
export default class Login extends React.Component{


    constructor(){
        super();

        this.state = {
            openDialogLogin:false,
            loading:false,
            messageError:[]
        }

        this.handleModal = this.handleModal.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        

    }

    handleModal = () => this.setState({ openDialogLogin: true });
    handleClose = () => this.setState({ openDialogLogin: false });

    handleSubmit(){
        this.setState({
            loading: true,
            messageError: []
        });

        let user = this.refs.userLogin.getValue();
        let password = this.refs.passwordLogin.getValue();

        let formResponse = new LoginResponse(user,password);
        
        if (formResponse.status) {
            alert("Status ok");
        }

        setTimeout(() => {
            this.setState({
                messageError: [...formResponse.message],
                loading: false,
            })}, 2000);
    }

    render(){
        const actions = [
            <FlatButton
                label="Cancelar"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Ingresar"
                primary={true}
                onClick={this.handleSubmit}
            />,
        ];

        if (this.state.loading) {
            return (

                <SideNavItem href='#!second' icon='account_circle' onClick={this.handleModal}>Login

                    <Dialog
                        title="Iniciar Sesión"
                        modal={false}
                        open={this.state.openDialogLogin}
                        onRequestClose={this.handleClose}
                    >
                        <ProgressCircle active={this.state.loading} size={250}/>

                    </Dialog>

                </SideNavItem>

            )
        }
        return(

            <SideNavItem href='#!second' icon='account_circle' onClick={this.handleModal}>Login

                    <Dialog
                            title="Iniciar Sesión"
                            actions={actions}
                            modal={false}
                            open={this.state.openDialogLogin}
                            onRequestClose={this.handleClose}
                        >
                            <FormMessage messages={this.state.messageError} />

                            <InputText
                                label="Usuario"
                                placeholder="Example: CDaud"
                                required={true}
                                ref="userLogin"
                            // value={this.state.resource.TitleResource}
                            />

                            <InputPassword
                                required={true}
                                ref="passwordLogin"
                            />
                    </Dialog>

            </SideNavItem>

        )
    }
}