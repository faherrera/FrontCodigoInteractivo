import React from 'react';

import Nav from './Nav';

export default class Header extends React.Component{
    render(){
        return(
            <header className="header-admin">                
                
                <Nav />
                
            </header>
        );
    }
}