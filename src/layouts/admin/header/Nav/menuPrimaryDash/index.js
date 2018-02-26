import React from 'react';

//Component UI
    import { MenuItem, List, ListItem } from 'material-ui';
    import Subheader from 'material-ui/Subheader';
    import Divider from 'material-ui/Divider';
    import ContentInbox from 'material-ui/svg-icons/content/inbox';
    import FontIcon from 'material-ui/FontIcon';
//Compnent Materialize
import { Icon, Collection, CollectionItem} from 'react-materialize';
//Routes
    import { arrayRoutesDash, urlAppDashboard } from './../../../../../helpers/routesConfig'
import { closeSession } from '../../../../../helpers/requests/AuthRequest';


const styles = {
    iconStyle : {
        // verticalAlign:'baseline',
        margin:0,
    }
}

export default class MenuPrimaryDash extends React.Component {
    
    handleCloseSession(){
        closeSession();
    }

    render() {

        return (
                <List>

                    <Subheader >Dashboard {window.localStorage.Username}</Subheader>

                <ListItem
                        leftIcon={<FontIcon className="material-icons">star</FontIcon>} 
                        href={urlAppDashboard}
                        style={{ fontSize: '1.3rem', fontWeight: 'bolder',}}
                        primaryText="Ir a Panel" 
                         />
                <Divider />
                <ListItem
                    leftIcon={<FontIcon className="material-icons">view_module</FontIcon>} 
                        href={arrayRoutesDash.courses}
                        primaryText="Cursos" 
                         />
                <ListItem
                    leftIcon={<FontIcon className="material-icons">account_circle</FontIcon>} 
                        href={arrayRoutesDash.users}
                        primaryText="Usuarios" 
                         
                    />
                <ListItem
                    leftIcon={<FontIcon className="material-icons">description</FontIcon>} 
                        href={arrayRoutesDash.resources}
                        primaryText="Recursos" 
                         
                    />
                <ListItem
                    leftIcon={<FontIcon className="material-icons">class</FontIcon>} 
                        href={arrayRoutesDash.class}
                        primaryText="Clases" 
                         
                    />
                <ListItem
                    leftIcon={<FontIcon className="material-icons">favorite_border</FontIcon>} 
                        href={arrayRoutesDash.enrollment}
                        primaryText="Inscripciones" 
                         
                    />
                <ListItem
                    leftIcon={<FontIcon className="material-icons">exit_to_app</FontIcon>}
                    primaryText="Cerrar sesion"
                    style={{fontSize: '1.2rem',}}
                    onClick={this.handleCloseSession.bind(this)}
                />

                </List>
        );
    }
}