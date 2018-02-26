import React from 'react';

//Assets
import './../client/general.css';

//UI LAYOUT 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//Components 
import Header from './../client/header/header';
import FooterGeneral from './../client/footer/footer';
import Content from './../client/content/content';

export default class ClientLayout extends React.Component {

    render() {
        return (
            <MuiThemeProvider>
                <main className="layout-general">
                    <div className="onlystructure">
                        <Header />
                        <Content children={this.props.children} />
                    </div>
                    <FooterGeneral />
                </main>
            </MuiThemeProvider>
        );
    }
}