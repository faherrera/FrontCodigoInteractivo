import React from 'react';
import { List, ListItem } from 'material-ui/List';

export default class Listing extends React.Component {

    //Poblando Listado.
    populateList() {
        return (
            this.props.Classes.map((item,index) => {
                return (
                    <ListItem
                        key={item.CodeClass}
                        hoverColor="#b2dfdb">
                        <a href="#!" className="">{index + 1} - {item.TitleClass}</a>
                    </ListItem>)
            })
        )
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