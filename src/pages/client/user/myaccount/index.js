import React, { Component } from 'react';

//UI
    //Materialize
        import {Input,Button,Icon,Row} from 'react-materialize';
    //OWn
        import {
            ProgressCircle
        } from './../../../../helpers/UI/misc';
//Request
import { getUser,putUser} from '../../../../helpers/requests/UserRequest';
import { validationNumber } from '../../../../helpers/UI/form/validation';

export default class MyAccount extends Component {

    state = {
        loading:true,
        user: {},
        dni:""
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
        this.setState({
            loading:true,
        });
        e.preventDefault();

        let target = e.target;

        let user = {
            User:{
                UserID: this.state.user.UserID,
                Name: target[0].value,
                DNI: target[1].value,
                Password: target[2].value,
                Email: target[3].value,
            }
        }
        
        console.log(user);
        this.UpdateUser(user.User.UserID,user);
    }

    UpdateUser(ID,user){
        putUser(ID,user,(res) => {
          

            if (res.status) {
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
                             <Input name="Name" s={12} placeholder="Nombre completo"  defaultValue={this.state.user.Name || "Aqui va el nombre"} label="First Name" />
                            
                             <Input s={12} name="DNI" label="DNI" type="tel" value={this.state.dni} placeholder="Aquí va el DNI [Solo numeros]"  
                             />

                             <Input s={12} name="Password" type="password" label="password" />
                             
                             <Input s={12} type="email" name="Email" label="Email" defaultValue={this.state.user.Email || "Aqui va el Email"}/>                        
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