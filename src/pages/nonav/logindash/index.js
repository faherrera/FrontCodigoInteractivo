import React, { Component } from 'react';

//UI 
    import { LogoPrincipal } from '../../../helpers/UI/text/logo/index';
    //Messages
    import { FormMessage } from '../../../helpers/UI/messages/FormMessage/index';
    //Progress loading
    import { ProgressCircle } from '../../../helpers/UI/misc/index';
    
    //Materialize
        import { Container, Button, Icon } from 'react-materialize';

//Assets
    import './styles.css';

//Request
    import { processLogin } from '../../../helpers/requests/LoginRequest';
    import { storeDataInLocalStorage } from '../../../helpers/requests/AuthRequest';
import { arrayRoutesGeneral, arrayRoutesDash, urlAppDashboard } from '../../../helpers/routesConfig';


export default class LoginDash extends Component {

    constructor(){
        super();

        this.state = {
            messageError: [],
        }
    }
   

    handleOnSubmit(event){
        console.clear();
        this.setState({loading:true,messageError:[]});
        event.preventDefault();
        // window.confirm("¿Todo ok?");

        let form =new FormData(this.refs.form);
        
        let data = {
            Username: form.get("Username"),
            Password: form.get("Password")
        }    

       
        processLogin(data, (res) => {
            if (!res) {
                console.log("///////////////////InicioDEBUG === entrando en!res////////////////");
                
                return this.setState({

                    messageError: ["Sin conexion al servidor o al motor de BD."],
                    loading: false,
                });
            }

            if (res.status === 200) {
                
                storeDataInLocalStorage(res.data);

                return window.location.href = urlAppDashboard;
            }

            if (res.status === 401) {
                return this.setState({
                    messageError: ["Sus credenciales no tienen el rol con autorizacion pertinente"],
                    loading: false,
                })
            }
            return this.setState({
                messageError: [res.data],
                loading: false,
            })

        },"Administrador");
        
        
        
    }
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return (
            <section className="nonav-section">

                    <div className="box-square">
                        <FormMessage messages={this.state.messageError} />

                        <a href="/" className="logo truncate blue-text text-accent-3">Codigo Interactivo</a>

                        <h5> Iniciar sesion como administrador </h5>
                        <form id="form" ref="form" action="Post" onSubmit={this.handleOnSubmit.bind(this)}>
                            
                            <label> Nombre de usuario : </label>
                            <input required name="Username" placeholder="Nombre de usuario"/>
                            
                            <label> Password : </label>
                            <input required type="Password" name="Password"/>

                            <Button waves='light'  large className="green darken-3 right">Enviar<Icon left>send</Icon></Button>

                        </form>

                    </div>


            </section>
        );
    }
}