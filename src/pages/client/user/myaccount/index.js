import React, { Component } from 'react';

//UI
    //Materialize
        import {Input,Button,Icon,Row} from 'react-materialize';
    //OWn
        import {
            ProgressCircle
        } from './../../../../helpers/UI/misc';
//Request
import { getUser,putUser, PutMyAccount} from '../../../../helpers/requests/UserRequest';
import { validationNumber } from '../../../../helpers/UI/form/validation';
import { ImageField } from '../../../../helpers/UI/form/imageField/ImageField';
import { arrayUpload } from '../../../../helpers/routesConfig';
import { InputNumber } from '../../../../helpers/UI/form/input/inputNumber';
import { storeDataInLocalStorage } from '../../../../helpers/requests/AuthRequest';

export default class MyAccount extends Component {

    state = {
        loading:true,
        user: {},
    }

    componentDidMount() {
        this.populateAccount();
    }

    populateAccount() {
       
        let code = window.localStorage.UserID;

        getUser(code, (res) => {

            if (res.status) {
                return this.setState({
                    user: res.data,
                    loading: false,
                    dni: res.data.DNI
                });
            }

            return this.setState({
                loading: false,
                message: res.message
            });

        });

    }

    handleOnSubmit(e){
        e.preventDefault();

        this.setState({
            loading:true,
        });

        let target = e.target;

        let ImageRequest = this.refs.imageUser.getValue().value || "";
        let DNI = this.refs.dniUser.getValue().status ? this.refs.dniUser.getValue().value : "";


        let user =
            {
                UserID: this.state.user.UserID,
                Name: target[2].value,
                Password: target[3].value,
                DNI,
                Email: target.Email.value,

                ImageRequest: {
                    Baase64Code: ImageRequest.base64 || "",
                    PathProfileImage: ImageRequest.nameImg || "",
                }
            }


        // console.log(user, ImageRequest,DNI,target);
        this.UpdateUser(user);

        
    }

    UpdateUser(user){
        PutMyAccount(user,(res) => {
          

            if (res.status === 200) {
                this.setState({
                    loading:false,
                });
                storeDataInLocalStorage(res.data);
                console.log(res);
                return window.location.reload();    
            }

            this.setState({
                loading: false,
                message: res.message || "No tiene mensaje pero el estatus no es correcto",

            });
        });
    }
    render() {
        if (!this.state.user || this.state.loading) {
            return <ProgressCircle active={this.state.loading} />

        }
        
             return (
                 <Row>
                     <form onSubmit={this.handleOnSubmit.bind(this)}>

                            <ImageField
                             pathImage={this.state.user.PathProfileImage}
                                pathRoute={arrayUpload.users}
                                ref="imageUser"
                            />

                             <Input name="Name" s={12} placeholder="Nombre completo"  defaultValue={this.state.user.Name || ""} label="First Name" required/>

                             <Input name="Password" s={12} placeholder="Contraseña"  label="Contraseña nueva [Dejar en blanco si no quiere cambiar]" type="password"
                             />
                            
                            <div className="col s12">
                                <InputNumber
                                    label="Dni"
                                    placeholder="Example: 37589788"
                                    min={8}
                                    max={9}
                                    ref="dniUser"
                                    value={this.state.user.DNI || ""}
                                />
                            </div>

                             <Input s={12} type="email" name="Email" label="Email" defaultValue={this.state.user.Email || ""}/>                        
                             <Button 
                                 waves='green'
                             >
                             <strong>Enviar</strong><Icon right>send</Icon>
                             </Button>
     
                             
                     </form>
                 </Row>
             );

    }
}