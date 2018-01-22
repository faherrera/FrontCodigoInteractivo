import React, { Component } from 'react';

//UI MATERIALIZE
    import { Table } from 'react-materialize';

//UI MATERIAL-UI
    import { FontIcon } from 'material-ui'

//Requests getAllResources
   import { getAllUsers } from "./../../../../helpers/requests/UserRequest";



//UI CodigoInteractivo
//Progress
    import { ProgressCircle } from "./../../../../helpers/UI/misc/index";
//Alerts 
    import { ServerMessageBox } from "./../../../../helpers/UI/messages/ServerMessageBox/";

//Routes
    import { arrayRoutesDash } from './../../../../helpers/routesConfig'

export default class List extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            resources: [],
            message: '',
            error: false,
            messageServer: '',
        }
    }

    componentDidMount() {
        this.populateList();
    }

    populateList() {

        
        getAllUsers((res) => {
            if (res.status) {
                return this.setState({
                    resources: res.data,
                    loading: false
                });
            }

            if (res.codeState === 0) {
                return this.setState({
                    loading: false,
                    error: true,
                    messageServer: res.message,
                });
            }

            return this.setState({
                message: res.message,
                loading: false,
            });
        });
    }

    handleReload() {
        this.setState({
            loading: true,
            message: '',
            error: false,
            messageServer: '',
        });
        this.populateList();
    }
    render() {

        if (this.state.loading) {
            return <ProgressCircle active={this.state.loading} />
        }
        if (this.state.messageServer && this.state.error) {
            return <ServerMessageBox
                message={this.state.messageServer}
                onClick={this.handleReload.bind(this)}
            />
        }
        if (this.state.message) {
            return <h1> El mensaje es  {this.state.message}</h1>
        }
        return (
            <Table responsive bordered hoverable centered>
                <thead>
                    <tr>
                        <th data-field="ID">ID</th>
                        <th data-field="Name">Nombre</th>
                        <th data-field="Email">Email</th>
                        <th data-field="PathProfile">Imagen de perfil</th>
                        <th data-field="Rol">Rol al que pertenece</th>
                        <th data-field="options">Opciones</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        this.state.resources.map((user, index) => {

                            return <tr key={index}>
                                <td>{user.UserID}</td>
                                <td>{user.Name}</td>
                                <td>{user.Email}</td>
                                <td>{user.PathProfileImage || "Sin imagen por el momento" }</td>
                                <td>{user.Role}</td>
                                <td>
                                    <a href={`./${user.UserID}`} className="btn blue accent-3">
                                        <FontIcon className="blue accent-3 material-icons">forward</FontIcon>
                                    </a>
                                </td>
                            </tr>
                        })


                    }
                </tbody>
            </Table>
        );
    }
}