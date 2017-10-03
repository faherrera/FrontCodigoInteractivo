import React from 'react';

//Component UI
import {MenuItem,List,ListItem} from 'material-ui';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import Subheader from 'material-ui/Subheader';


export default class AsideMenu extends React.Component{
    render(){
        return(
            <ul className="blue-grey darken-2 white-text">
                <List>
                    
                    <Subheader>Dashboard</Subheader>
                    <ListItem
                        primaryText="Cursos"
                        leftIcon={<i className="material-icons">school</i>}
                        initiallyOpen={true}
                        primaryTogglesNestedList={true}
                        nestedItems={[
                            <ListItem
                                key={1}
                            >
                                <a href="#" className="white-text center-align"> Crear curso </a>
                            </ListItem>,
                            <ListItem
                                key={2}
                            >
                                <a href="#" className="white-text center-align"> Listado </a>
                            </ListItem>,
                        ]}
                    />
                </List>
            </ul>
        );
    }
}