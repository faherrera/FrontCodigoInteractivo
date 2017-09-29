import React from 'react';

//UI
import { MenuItem, Drawer, RaisedButton, FlatButton } from 'material-ui';
import FontIcon from 'material-ui/FontIcon';
import Dialog from 'material-ui/Dialog';    //Modal

import NoAccess from './noaccess';
//Assets
    import './nav.css';

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
        const styles = {
            button:{
                background: 'none',
                boxShadow: 'none',
                marginLeft: '5px'
            }
        }

      
        return (

            <nav className="nav-principal">

                <div className="container">

                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo">Codigo Interactivo</a>

                        <ul className="left" onClick={this.handleMenu}>
                            <a href="#!"><i className="large material-icons" >menu</i></a>
                        </ul>

                        <ul className="right hide-on-med-and-down" >

                            <NoAccess 
                                deviceLoginStyle="waves-effect btn-flat white-text"
                                deviceSignStyle="waves-effect teal btn"
                            />

                        </ul>

                    </div>
                </div>

                <Drawer
                    open={this.state.openMenu}
                    docked={false}
                    width={200}
                    onRequestChange={(openMenu, swipe) => this.setState({ openMenu })}
                >
                    <MenuItem onClick={this.handleMenu}>Menu Item</MenuItem>
                    <MenuItem onClick={this.handleMenu}>Menu Item 2</MenuItem>

                    <ul className="right hide-on-large-only" >

                        <NoAccess
                            deviceLoginStyle="waves-effect btn blue-grey "
                            deviceSignStyle="waves-effect teal btn"
                        />
                    
                    </ul>
                </Drawer>


                
            </nav >
        );
    }
}