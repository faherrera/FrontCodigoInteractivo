import React, { Component } from 'react';

//UI
    //Materialize
    import { SideNav, SideNavItem, Button } from 'react-materialize'
    //OWN 
    import SignUp from './SignUp/';
    import Login from './Login/';

export default class MenuUser extends Component {
    render() {
        return (
            <SideNav
                trigger={<a href="#!" onClick={this.handleMenu} ><i className="large material-icons" >menu</i></a>}
                options={{ closeOnClick: true }}
            >
                <Login />
                <SignUp />
                <SideNavItem divider />
                <SideNavItem subheader>Codigo Interactivo</SideNavItem>
                <SideNavItem waves href='#!third'>Nuestros cursos</SideNavItem>
                <SideNavItem waves href='#!third'>¿Quienes somos?</SideNavItem>
                <SideNavItem waves href='#!third'>Contacto</SideNavItem>
            </SideNav>

        );
    }
}