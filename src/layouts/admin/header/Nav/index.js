import React from 'react';

import {MenuItem,Drawer} from 'material-ui';

export default class Nav extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            open:false
        }

        this.handleMenu = this.handleMenu.bind(this);
    }

    handleMenu = () =>{
        this.setState({
            open : !this.state.open
        });
    }

    render(){
        return(

        <nav >
            
            <div className="container">

                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Logo</a>
                    
                    <ul id="nav-mobile" className="right" onClick={this.handleMenu}>
                            <a href="#!"><i className="large material-icons" >menu</i></a>
                    </ul>

                </div>
            </div>

                <Drawer
                    open={this.state.open}
                    docked={false}
                    width={200}
                    onRequestChange={(open, swipe) => this.setState({ open })}
                >
                    <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
                    <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
                </Drawer>

        </nav >
        );
    }
}