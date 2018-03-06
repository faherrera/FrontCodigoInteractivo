import React, { Component } from 'react';

//Assets
    import noUserImage from "./../../../../../../assets/img/noUserImage.jpg";
    import backnav from "./../../../../../../assets/img/backnav.jpg";
//UI
    //Materialize
    import { SideNav, SideNavItem, Button } from 'react-materialize'

//Request
    import { closeSession } from './../../../../../../helpers/requests/AuthRequest';
//Routes
    import {arrayRoutesGeneral, routesMenu,arrayUpload} from './../../../../../../helpers/routesConfig';

export default class MenuUser extends Component {
    constructor(props){
        super(props);

        this.handleSignOut = this.handleSignOut.bind(this);
    }
    
    handleSignOut(){
        //Cerrando sesion.
        closeSession();
    }
    render() {
        let {Username,
                Email,
                Token,
                Name,
                Image } = this.props.dataUser;
    
                console.log("///////////////////InicioDEBUG === DataLocalStorage////////////////");
                        console.log(this.props.dataUser)
                console.log("*******************FinalizacionDEBUG === DataLocalStorage**************");
                
        Image = Image !== "undefined" ? arrayUpload.users + Image : noUserImage;

        
        return (
            <SideNav
                trigger={<a href="#!" onClick={this.handleMenu} ><i className="large material-icons" >menu</i></a>}
                options={{ closeOnClick: true }}
            >
                <SideNavItem userView
                    user={{
                        background: backnav,
                        image: Image,
                        name: Name,
                        email: Email
                    }}
                />
                <SideNavItem href={routesMenu.general.nuestrosCursos} icon="developer_board" >Oferta de cursos </SideNavItem>

                <SideNavItem divider />
                <SideNavItem subheader>Mi cuenta</SideNavItem>
                <SideNavItem href={routesMenu.allow.mycourses} icon="view_module" >Mis cursos</SideNavItem>
                <SideNavItem href={routesMenu.allow.pending} icon="access_time" >Pendientes de confirmación</SideNavItem>
                {
                    //## Configuraciones propias de cada usuario.
                <SideNavItem href={routesMenu.allow.account} icon='account_circle'>Configuraciónes</SideNavItem>

                }
                <SideNavItem waves href='#!third' icon='arrow_back' onClick={this.handleSignOut}>Cerrar sesión</SideNavItem>
            </SideNav>

        );
    }
}