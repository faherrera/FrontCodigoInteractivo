import React, { Component } from 'react';

//##UI
    //MATERIALIZE
    import {  NavItem,Icon} from "react-materialize";
    //MATERIAL UI
    import Badge from 'material-ui/Badge';
    import IconButton from 'material-ui/IconButton';
    import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

//Assets
import './style.css';

export default class Access extends Component {
    render() {
        return (
            <div className="access-menu">
                
                <IconButton tooltip="Notifications">
                    <NotificationsIcon />
                </IconButton>
                <IconButton tooltip="Mi cuenta">
                    <i className="material-icons">user</i>
                </IconButton>
            </div>
        );
    }
}