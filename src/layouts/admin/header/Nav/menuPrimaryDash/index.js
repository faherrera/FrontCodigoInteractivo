import React from 'react';

//Component UI
import { MenuItem, List, ListItem } from 'material-ui';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

const styles = {
    iconStyle : {
        margin: 0
    }
}
export default class MenuPrimaryDash extends React.Component {
    render() {
        return (
                <List>

                    <Subheader>Dashboard</Subheader>
                    <ListItem
                        primaryText="Usuarios"
                        leftIcon={<i className="material-icons verticalAlign" style={styles.iconStyle}>group</i>}
                        initiallyOpen={false}
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
                    <Divider />
                    <ListItem
                        primaryText="Cursos"
                        leftIcon={<i className="material-icons verticalAlign" style={styles.iconStyle}>school</i>}
                        initiallyOpen={false}
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
                    <Divider />
                    <ListItem
                        primaryText="Pagos"
                    leftIcon={<i className="material-icons verticalAlign" style={styles.iconStyle}>attach_money</i>}
                        initiallyOpen={false}
                        primaryTogglesNestedList={true}
                        nestedItems={[
                            <ListItem
                                key={2}
                            >
                                <a href="#" className="white-text center-align"> Listado </a>
                            </ListItem>,
                        ]}
                    />
                    <Divider />
                </List>
        );
    }
}