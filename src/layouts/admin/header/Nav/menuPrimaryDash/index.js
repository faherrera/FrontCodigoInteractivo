import React from 'react';

//Component UI
    import { MenuItem, List, ListItem } from 'material-ui';
    import Subheader from 'material-ui/Subheader';
    import Divider from 'material-ui/Divider';
    import ContentInbox from 'material-ui/svg-icons/content/inbox';

//Routes
    import { arrayRoutesDash } from './../../../../../helpers/routesConfig'


const styles = {
    iconStyle : {
        // verticalAlign:'baseline',
        margin:0,
    }
}

export default class MenuPrimaryDash extends React.Component {
    render() {
        return (
                <List>

                    <Subheader>Dashboard {window.localStorage.Username}</Subheader>

                <ListItem 
                        href={arrayRoutesDash.courses}
                        primaryText="Cursos" 
                        leftIcon={<ContentInbox />} />
                <ListItem 
                        href={arrayRoutesDash.users}
                        primaryText="Usuarios" 
                        leftIcon={<ContentInbox />} 
                    />
                <ListItem 
                        href={arrayRoutesDash.resources}
                        primaryText="Recursos" 
                        leftIcon={<ContentInbox />} 
                    />
                <ListItem 
                        href={arrayRoutesDash.class}
                        primaryText="Clases" 
                        leftIcon={<ContentInbox />} 
                    />
                <ListItem 
                        href={arrayRoutesDash.courses}
                        primaryText="Inscripciones" 
                        leftIcon={<ContentInbox />} 
                    />

                </List>
        );
    }
}