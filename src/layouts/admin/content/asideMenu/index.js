import React from 'react';

//Component UI
import MenuPrimaryDash from './../../header/Nav/menuPrimaryDash';

import './styles.css';

export default class AsideMenu extends React.Component{
    render(){
        return(
            <div className="blue-grey darken-2 white-text AsideMenu hide-on-med-and-down">
                <MenuPrimaryDash/>
            </div>
        );
    }
}