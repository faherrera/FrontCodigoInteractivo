import React from 'react';

import AsideMenu from './asideMenu';

import MenuPrimaryDash from './../header/Nav/menuPrimaryDash';

export default class Content extends React.Component {

    render() {
        return (
            <section className="content-admin">
                <AsideMenu />
                {this.props.children}
            </section>
        );
    }
}