import React, { Component } from 'react';

//UI
    //Materialize
    import { SideNav, SideNavItem, Button } from 'react-materialize'
export default class MenuUser extends Component {
    render() {
        return (
            <SideNav
                trigger={<a href="#!" onClick={this.handleMenu} ><i className="large material-icons" >menu</i></a>}
                options={{ closeOnClick: true }}
            >
                <SideNavItem userView
                    user={{
                        background: 'https://static.bhphoto.com/images/images500x500/Rosco_RS6811_68_Filter_Sky_1158010036000_44470.jpg',
                        image: 'http://next.materializecss.com/images/yuna.jpg',
                        name: 'John Doe',
                        email: 'jdandturk@gmail.com'
                    }}
                />
                <SideNavItem href='#!second' icon="view_module" >Mis cursos</SideNavItem>
                <SideNavItem divider />
                <SideNavItem subheader>Configuraciones</SideNavItem>
                <SideNavItem href='#!icon' icon='account_circle'>Mi cuenta</SideNavItem>
                <SideNavItem waves href='#!third' icon='arrow_back'>Cerrar sesión</SideNavItem>
            </SideNav>

        );
    }
}