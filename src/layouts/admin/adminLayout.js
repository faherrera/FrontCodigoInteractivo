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
import { HaveAccessDashboard } from '../../helpers/requests/AuthRequest';
import { arrayRoutesDash, arrayRoutesGeneral } from '../../helpers/routesConfig';
import { ProgressBar,Row,Col } from 'react-materialize';
import { ProgressCircle, Progressing} from '../../helpers/UI/misc/index';

export default class AdminLayout extends React.Component {

    state={
        loading:true,
    }

    componentWillMount() {
        HaveAccessDashboard((res)=> {

            if (!res || res.status > 200) {
                alert("No está autorizado, será redirgido")
                return window.location.href = "/";
            }
            
            if (res.status === 200) {
                return this.setState({
                    loading:false
                });
                
            }

            return window.location.reload();
            
        });
    }

   
    render() {
        const colorBackground = '#455A64';
        
        if (this.state.loading) {
            return <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <main>
                    
                    <Content>
                        {<Progressing size={310} />}
                    </Content>
                   
                </main>
            </MuiThemeProvider>
          
        }
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