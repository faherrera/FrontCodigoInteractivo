import React from 'react';
 
//UI
    //Material UI
    import { List, ListItem } from 'material-ui/List';

//Routes
import {  arrayRoutesGeneral } from './../../../../../../helpers/routesConfig'

export default class Listing extends React.Component {

    //Poblando Listado.
    populateList() {
        if(this.props.Classes.length > 0)
        {return (
            this.props.Classes.map((item,index) => {
                let ClassCode = item.CodeClass;
                
                return (
                    <ListItem
                        key={item.CodeClass}
                        hoverColor="#b2dfdb">
                        <a href={arrayRoutesGeneral.classes+ClassCode} >{index + 1} - {item.TitleClass}</a>
                    </ListItem>)
            })
        )}
        return <ListItem
            hoverColor="#b2dfdb"
            >
            <strong> Aún sin clases, pronto las subiremos =) </strong>
        </ListItem>


    }
    render() {
        return (
            <div className="tab-item collection">
                <List>

                    {this.populateList()}


                </List>
            </div>
        );
    }
}