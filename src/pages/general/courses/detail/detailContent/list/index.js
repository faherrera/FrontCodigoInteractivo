import React from 'react';
import { List, ListItem } from 'material-ui/List';

export default class Listing extends React.Component{

    render(){
        return(
            <div className="tab-item collection">
                <List>

                    <ListItem
                        hoverColor="#b2dfdb">
                        <a href="#!" className="">1. Instalacion del IDE</a>
                    </ListItem>
                        
                    <ListItem>
                        <a href="#!">2. Conociendo el entorno</a>
                    </ListItem>
                    

                    <ListItem>
                        <a href="#!">3. Fundamentos del desarollo</a>
                    </ListItem>
                    

                    <ListItem>
                        <a href="#!">4. Primer Hola Mundo</a>
                    </ListItem>
                    

                </List>
            </div>
        );
    }
}