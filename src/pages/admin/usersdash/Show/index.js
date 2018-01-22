import React, { Component } from 'react';

//UI
//UI MATERIALIZE
    import {
    Card,
    CardTitle,
    Collection,
    CollectionItem
} from 'react-materialize';

//UI CODIGO INTERACTIVO
    import {
    ProgressCircle
} from './../../../../helpers/UI/misc';
    import { ButtonShowCard } from './../../../../helpers/UI/form/button/ButtonShowCard';


//Assets
    import cover from './../../../../assets/img/resourcePortada.jpg'

//Request
        import {getUser} from '../../../../helpers/requests/UserRequest';

//Routes
    import { arrayRoutesDash } from './../../../../helpers/routesConfig';

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
        alert("Clickee en handle Delete");
        // deleteResource(this.state.code);
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
            return <Edit id={this.state.code} resource={this.state.user} />
        }

        return (
            <Card
                className='card-show--classes'
                header={<CardTitle image={cover}></CardTitle>}
                actions={[<ButtonShowCard key={1} title={data.Username} handleEdit={this.handleEdit} handleDelete={this.handleDelete} />]}>
                <Collection header='Información del Usuario'>
                    <CollectionItem>
                        <strong>ID del usuario: </strong>
                        <span>{data.UserID}</span>
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

            </Card>
        );
    }
}