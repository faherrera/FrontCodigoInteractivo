import React, { Component } from 'react';

//Assets
import './style.css';
//UI
    //UI MATERIALIZE
            import {
            Card,
            CardTitle,
            Collection,
            CollectionItem,
            Row,
            Col,
            Button,
            Icon
        } from 'react-materialize';

    //UI CODIGO INTERACTIVO
        import {
        ProgressCircle
    } from './../../../../helpers/UI/misc';
        import { ButtonShowCard } from './../../../../helpers/UI/form/button/ButtonShowCard';
        import OwnCourses from './OwnCourses/';
//Assets
    import noUserImage from './../../../../assets/img/noUserImage.jpg'

//Request
        import {getUser,deleteUser} from '../../../../helpers/requests/UserRequest';

//Routes
    import { arrayRoutesDash, arrayUpload } from './../../../../helpers/routesConfig';

//Components
    import Edit from './../Edit/';

export default class Show extends Component {
    constructor(props) {
        super(props);

        this.state = {
            code: props.id,
            user: {},
            loading: true,
            message: '',
            editing: false
        }

        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount() {
        this.populateShow();
    }

    populateShow() {
        this.setState({
            loading:true,
        });
        let code = this.state.code;
        getUser(code, (res) => {

            if (res.status) {
                return this.setState({
                    user: res.data,
                    loading: false
                });
            }

            return this.setState({
                loading: false,
                message: res.message
            });

        });

    }

    handleEdit() {
        this.setState({
            editing: true,
        });
    }

    handleDelete() {
        deleteUser(this.state.code);
    }


    render() {
        let data = this.state.user;
        if (this.state.loading) {
            return <ProgressCircle active={this.state.loading} />
        }

        if (this.state.message) {
            return <h1>Error en la petición -> {this.state.message}</h1>
        }

        if (this.state.editing) {
            return <Edit  user={this.state.user} />
        }
        

        let  PathProfileImage  = data.PathProfileImage; //Busco la ruta de la imagen
        
        //Si la ruta es null es debo darle una generica.

        let imageUser = PathProfileImage ? arrayUpload.users + PathProfileImage : noUserImage; 

        return (           
            <Card
                className="card-detail--user-dashboard"
                header={<CardTitle image={imageUser}></CardTitle>}
                actions={[<ButtonShowCard key={1} title={data.Username} handleEdit={this.handleEdit} handleDelete={this.handleDelete} />]}>
                <Collection header='Información del Usuario'>
                    <CollectionItem>
                        <strong>ID del usuario: </strong>
                        <span>{data.UserID}</span>
                    </CollectionItem>

                    <CollectionItem>
                        <strong>DNI : </strong>
                        <span>{data.DNI || "No ingresó aún su DNI"}</span>
                    </CollectionItem>
                    <CollectionItem>
                        <strong>Nombre : </strong>
                        <span>{data.Name}</span>
                    </CollectionItem>
                    <CollectionItem>
                        <strong>Username: </strong>
                        <span>{data.Username}</span>
                    </CollectionItem>
                    <CollectionItem>
                        <strong>Rol: </strong>
                        <span>{data.Role}</span>
                    </CollectionItem>
                </Collection>

                <OwnCourses
                    Courses={data.Courses}
                    Username={data.Username}
                    populateShow={this.populateShow.bind(this)}
                />

            </Card>
        );
    }
}