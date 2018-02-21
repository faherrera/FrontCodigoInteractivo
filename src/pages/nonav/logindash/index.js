import React, { Component } from 'react';
import { Container, Button, Icon } from 'react-materialize';

//Assets
    import './styles.css';
import { LogoPrincipal } from '../../../helpers/UI/text/logo/index';
import { processLogin } from '../../../helpers/requests/LoginRequest';

export default class LoginDash extends Component {

    handleOnSubmit(event){
        console.clear();
        event.preventDefault();
        // window.confirm("¿Todo ok?");

        let form =new FormData(this.refs.form);
        
        let data = {
            Username: form.get("Username"),
            Password: form.get("Password")
        }    

       
        processLogin(data,(res)=>{
            console.log(res);
        },"Admin");
        
        console.log(data);
        
        
    }
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return (
            <section>
                    <div className="box-square">
                        <a href="/" className="logo truncate blue-text text-accent-3">Codigo Interactivo</a>

                        <h5> Iniciar sesion como administrador </h5>
                        <form id="form" ref="form" action="Post" onSubmit={this.handleOnSubmit.bind(this)}>
                            
                            <label> Nombre de usuario : </label>
                            <input name="Username" placeholder="Nombre de usuario"/>
                            
                            <label> Password : </label>
                            <input type="Password" name="Password"/>

                            <Button waves='light'  large className="green darken-3 right">Enviar<Icon left>send</Icon></Button>

                        </form>

                    </div>


            </section>
        );
    }
}