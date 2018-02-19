import React from 'react';

//Component UI
    import { MenuItem, List, ListItem } from 'material-ui';
    import Subheader from 'material-ui/Subheader';
    import Divider from 'material-ui/Divider';

//Compnent Materialize
import { Icon, Collection, CollectionItem} from 'react-materialize';
//Routes
    import { arrayRoutesDash } from './../../../../../helpers/routesConfig'
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

                    <Subheader>Dashboard {window.localStorage.Username}</Subheader>

                <ListItem 
                        className=""
                        href={arrayRoutesDash.courses}
                        primaryText="Cursos" 
                         />
                <ListItem 
                        className=""
                        href={arrayRoutesDash.users}
                        primaryText="Usuarios" 
                         
                    />
                <ListItem 
                        className=""
                        href={arrayRoutesDash.resources}
                        primaryText="Recursos" 
                         
                    />
                <ListItem 
                        className=""
                        href={arrayRoutesDash.class}
                        primaryText="Clases" 
                         
                    />
                <ListItem 
                        href={arrayRoutesDash.enrollment}
                        primaryText="Inscripciones" 
                         
                    />
                <ListItem
                    primaryText="Cerrar sesion"
                    onClick={this.handleCloseSession.bind(this)}
                />

                </List>
        );
    }
}