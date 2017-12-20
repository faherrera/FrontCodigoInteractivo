import React from 'react';

//UI 
    //Material-ui
    import { MenuItem, Drawer, RaisedButton, FlatButton } from 'material-ui';
    import FontIcon from 'material-ui/FontIcon';
    import Dialog from 'material-ui/Dialog';    //Modal
    //Materialize
    import {SideNav,SideNavItem,Button} from 'react-materialize'

//Assets
    import './nav.css';

//Own Components
    import Auth from './auth/';

export default class Nav extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            openMenu: false,
        }

        this.handleMenu = this.handleMenu.bind(this);
    }

    handleMenu = () => {
        this.setState({
            openMenu: !this.state.openMenu
        });
    }

   
    render() {      
        return (

            <nav className="nav-principal">

                <div className="container">

                    <div className="nav-wrapper">
                        
                        <a href="/" className="logo--principal">Codigo Interactivo</a>
                            
                        <Auth />

                    </div>
                </div>
                
            </nav>
        );
    }
}