import React from 'react';

//UI
//MATERIAL UI
import { Dialog, FlatButton } from 'material-ui';

//MATERIALIZE
import { SideNavItem } from 'react-materialize'

//OWN
//Form
import { InputText } from './../../../../../../../../helpers/UI/form/input/InputText'
import { InputEmail } from './../../../../../../../../helpers/UI/form/input/inputEmail'
import { InputPassword } from './../../../../../../../../helpers/UI/form/input/inputPassword'
import { InputNumber } from './../../../../../../../../helpers/UI/form/input/inputNumber'
//Messages
import { FormMessage } from './../../../../../../../../helpers/UI/messages/FormMessage/index';
//Progress loading
import { ProgressCircle } from './../../../../../../../../helpers/UI/misc/index';


//Responses
import { SignUpResponse } from './../../../../../../../../helpers/responses/FormResponse/FormResponseSignUp';
//Requesst
import { postSignUp } from './../../../../../../../../helpers/requests/SignUpRequest';
import { storeDataInLocalStorage } from '../../../../../../../../helpers/requests/AuthRequest';
import { arrayRoutesGeneral } from '../../../../../../../../helpers/routesConfig';

export default class SignUpDialog extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            openDialogSign: props.open,
            messageError: [],
            loading: false
        }

        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);



    }

    handleClose = () => this.setState({ openDialogSign: false });

    handleSubmit() {
        // setTimeout(()=> {
        //     this.setState({
        //         loading: true,
        //         messageError: []
        //     });
        // },1000)
        

        let name = this.refs.nameSign.getValue();
        let user = this.refs.userSign.getValue();
        let email = this.refs.emailSign.getValue();
        let password = this.refs.passwordSign.getValue();
        let dni = this.refs.dniSign.getValue();

        let formResponse = new SignUpResponse(name, user, email, password, dni);

        if (formResponse.status) {
            this.setState({
                loading: !this.state.loading,
                messageError: []
            });
            
            postSignUp(formResponse.data, (res) => {
                if (res.status) {
                    this.setState({
                        loading: !this.state.loading,
                    })

                    storeDataInLocalStorage(res.data);
                    return window.location.href = arrayRoutesGeneral.usuario;
                }

                return this.setState({
                    messageError: [...[res.message]],
                    loading: !this.state.loading,
                })

            });
        }
        this.setState({
            messageError: [...formResponse.message],
            // loading: false,
        })
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            openDialogSign:nextProps.open
        });
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
            return <Dialog
                title="Registrate!"
                style={{ textAlign: 'center' }}
                actions={(this.state.loading) ? null : actions}
                modal={false}
                open={this.state.openDialogSign}
                onRequestClose={this.handleClose}
            >
                <ProgressCircle active={this.state.loading} size={250} />

            </Dialog>
        }
        return (
                    <Dialog
                    title="Registrate!"
                    style={{ textAlign: 'center' }}
                    actions={(this.state.loading) ? null : actions}
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

                    <InputNumber
                        label="DNI"
                        placeholder="DNI: 37657099"
                        required={true}
                        min={8}
                        max={9}
                        ref="dniSign"
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

        )
    }
}