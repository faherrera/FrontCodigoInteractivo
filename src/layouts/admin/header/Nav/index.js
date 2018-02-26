import React from 'react';

//Components UI
import {AppBar,MenuItem,Drawer} from 'material-ui';
import FontIcon from 'material-ui/FontIcon';

//Assets 
import './styles.css';

//MENUES
import MenuPrimaryDash from './menuPrimaryDash'; 

const styles = {
    iconStyle:{
        cursor: 'pointer'
    }
}


export default class Nav extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            openPrimary:false,
            openSecondary:false
        }

        this.handleMenuPrimary = this.handleMenuPrimary.bind(this);
        this.handleMenuSecondary = this.handleMenuSecondary.bind(this);
        this.handleClosePrimary = this.handleClosePrimary.bind(this);
        this.handleCloseSecondary = this.handleCloseSecondary.bind(this);
    }

    handleMenuPrimary = () =>{
        this.setState({
            openPrimary : !this.state.openPrimary,
        });
    }

    handleMenuSecondary = () =>{
        this.setState({
            openSecondary : !this.state.openSecondary,
        });
    }

    handleClosePrimary = () => this.setState({ openPrimary: false });

    handleCloseSecondary = () => this.setState({ openSecondary: false });

    render(){
        return(

            <nav className="nav-admin-principal">
                
                <div className="nav-wrapper containerAdmin">

                    <i className="material-icons left " style={styles.iconStyle} onClick={this.handleMenuPrimary}>menu</i>

                    <a href="#!" className="brand-logo center truncate">

                        Codigo Interactivo Dashboard

                    </a>


                </div>


                <Drawer
                    docked={false}
                    width={300}
                    open={this.state.openPrimary}
                    onRequestChange={(openPrimary) => this.setState({ openPrimary })}
                >

                    <MenuPrimaryDash />
                
                </Drawer>

               

            </nav>
        );
    }
}