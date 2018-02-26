import React from 'react';

//Assets
import './general.css';

//UI LAYOUT 
    import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//Components 
    import Header from './header/header';
    import FooterGeneral from './footer/footer';
    import Content from './content/content';

export default class ClientLayout extends React.Component {

    render() {
        return (
            <MuiThemeProvider>
                <main className="layout-general">
                    <div className="onlystructure">
                        <Header />
                            <Content children={this.props.children}/>
                    </div>
                    <FooterGeneral/>
                </main>
            </MuiThemeProvider>
        );
    }
}