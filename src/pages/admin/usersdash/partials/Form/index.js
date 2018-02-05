//Components
import React, { Component } from 'react';
import axios from 'axios';

//Routes
import { arrayRoutesDash, arrayUpload } from './../../../../../helpers/routesConfig';

//UI
//UI CODIGO INTERACTIVO.
    import { InputNumber } from '../../../../../helpers/UI/form/input/inputNumber';
    import { InputText } from '../../../../../helpers/UI/form/input/InputText';
    import { InputEmail } from '../../../../../helpers/UI/form/input/inputEmail';
    import { InputPassword } from '../../../../../helpers/UI/form/input/inputPassword';
    import { ButtonForm } from '../../../../../helpers/UI/form/button/ButtonForm';
    import { ImageField } from '../../../../../helpers/UI/form/imageField/ImageField';

    import { ProgressCircle } from '../../../../../helpers/UI/misc';

    import { ListMessage } from './../../../../../helpers/UI/messages/ListError';
    import { FormMessage } from '../../../../../helpers/UI/messages/FormMessage';

    import AutocompleteRoles  from './../../../../../helpers/UI/form/autocomplete/AutocompleteRoles/';

//Request
    import { postUser, putUser } from '../../../../../helpers/requests/UserRequest';

//Response.
    import { UserResponse } from './../../../../../helpers/responses/FormResponse/FormResponseUser';

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            messageError: [],
            user: props.user || {},
            type: props.type || "create",

        }
    }
    
    componentDidMount() {
        
        this.setState({
            messageError: []
        })

    }

    handleClickButton(e) {
        this.setState({
            loading: true,
        });

        let name = this.refs.nameUser.getValue();
        let dni = this.refs.dniUser.getValue();
        let username = this.refs.usernameUser.getValue();
        let email = this.refs.emailUser.getValue();
        let password = this.refs.passwordUser.getValue();
        let imageUser = this.refs.imageUser.getValue();
        let role = this.refs.roleUser.getValue();

        /**
         * Aquí deposito el estado de los inputs del form.
         */

        let responseUser = new UserResponse(name,dni,username,email,password,role,imageUser);

        if (e.target.id === 'btnCreate') {

            if (responseUser.status) {
                console.log("///////////////////InicioDEBUG === ResponseUser////////////////");
                        console.log(responseUser)
                console.log("*******************FinalizacionDEBUG === ResponseUser**************");
                
                //Aquì va la peticiòn create que recibe un callback.
                postUser(responseUser.data, (res) => {
                    if (res.status) {
                        let route = arrayRoutesDash.users;
                        return window.location = route;

                    }

                    return this.setState({
                        messageError: [...responseUser.message],
                        loading: false
                    });
                });
            }

            return this.setState({
                messageError: [...responseUser.message],
                loading: false
            });

        }

        if (e.target.id === 'btnEdit') {



            if (responseUser.status) {
                
                let userID = this.state.user.UserID;
                console.log("Lo tengo al USERID -> "+userID);
                //Aquì va la peticiòn Put que recibe un callback.
                putUser(userID, responseUser.data, (res) => {
                    if (res.status) {
                        let route = arrayRoutesDash.Users + userID;
                        console.log(route);
                        return window.location = route;

                    }

                    return this.setState({
                        messageError: [...responseUser.message],
                        loading: false
                    });
                });
            }

            return this.setState({
                messageError: [...responseUser.message],
                loading: false
            });
        }
    }
    render() {

        if (this.state.loading) {
            return <ProgressCircle active={this.state.loading} />
        }

        let user = this.state.user;
        return (
            <form className="form">
                <FormMessage messages={this.state.messageError} />

                <ImageField 
                    pathImage={user.PathProfileImage} 
                    pathRoute={arrayUpload.users}
                    ref="imageUser"
                />

                <InputNumber
                    label="Dni"
                    placeholder="Example: 37589788"
                    min={8}
                    max={9}
                    ref="dniUser"
                    value={user.DNI}

                />
                <InputText
                    label="Nombre completo"
                    placeholder="Example: Cristian Daud"
                    required={true}
                    ref="nameUser"
                    value={user.Name}
                />

                <InputText
                    label="Username"
                    placeholder="Example: cdaud"
                    required={true}
                    ref="usernameUser"
                    value={user.Username}
                />
                
                <InputPassword
                    required={this.state.type == "create" ? true : false}
                    ref="passwordUser"
                />

                <InputEmail
                    label="Email"
                    placeholder="Example: cdaud777@gmail.com"
                    ref="emailUser"
                    value={user.Email}
                />

                <AutocompleteRoles 
                    value={user.RoleID || 1}
                    ref="roleUser"
                />
               

                <ButtonForm
                    type={this.state.type}
                    onClick={this.handleClickButton.bind(this)}
                />
            </form>
        );
    }
}