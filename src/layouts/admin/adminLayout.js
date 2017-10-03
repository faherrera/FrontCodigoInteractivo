import React from 'react';

//UI LAYOUT 
    import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
    import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
    import getMuiTheme from 'material-ui/styles/getMuiTheme';

    //Components 
    import Header from './header/header';
    import Footer from './footer/footer';
    import Content from './content/content';

//Assets
import './styles.css';

export default class AdminLayout extends React.Component {

    render() {
        const colorBackground = '#455A64';
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <main>
                    <Header background={colorBackground}/>
                    <Content children={this.props.children}/>
                    {/*<Footer background={colorBackground} />*/}
                </main>
            </MuiThemeProvider>
        );
    }
}