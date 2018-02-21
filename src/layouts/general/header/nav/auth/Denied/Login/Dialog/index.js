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
import { LoginResponse } from './../../../../../../../../helpers/responses/FormResponse/FormResponseLogin';
//Requesst
import { processLogin } from './../../../../../../../../helpers/requests/LoginRequest';
import { storeDataInLocalStorage } from './../../../../../../../../helpers/requests/AuthRequest';

export default class LoginDialog extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            openDialog: props.open,
            messageError: [],
            loading: false
        }

        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);



    }

    handleClose = () => this.setState({ openDialog: false });

    handleSubmit() {
        // setTimeout(()=> {
        //     this.setState({
        //         loading: true,
        //         messageError: []
        //     });
        // },1000)


        let user = this.refs.userLogin.getValue();
        let password = this.refs.passwordLogin.getValue();

        let formResponse = new LoginResponse(user,password);

        if (formResponse.status) {
            this.setState({
                loading: !this.state.loading,
                messageError: []
            });

            processLogin(formResponse.data, (res) => {
                if (res.status === 200) {
                    this.setState({
                        loading: !this.state.loading,
                    })
                    storeDataInLocalStorage(res.data);

                    return window.location.reload();
                }
                    
                if (res.status === 401) {
                    return this.setState({
                        messageError: [...["No está autorizado para acceder"]],
                        loading: !this.state.loading,
                    })
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

    componentWillReceiveProps(nextProps) {
        this.setState({
            openDialog: nextProps.open
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
                title="Login"
                style={{ textAlign: 'center' }}
                actions={(this.state.loading) ? null : actions}
                modal={false}
                open={this.state.openDialog}
                onRequestClose={this.handleClose}
            >
                <ProgressCircle active={this.state.loading} size={250} />

            </Dialog>
        }
        return (
            <Dialog
                title="Login"
                style={{ textAlign: 'center' }}
                actions={(this.state.loading) ? null : actions}
                modal={false}
                open={this.state.openDialog}
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

        )
    }
}