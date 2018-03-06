import React, { Component } from 'react';

//UI MATERIALIZE
import { Table, Button, Icon, CollectionItem,Collection, Container} from 'react-materialize';

//UI MATERIAL-UI
import { FontIcon } from 'material-ui'

//Requests getAllResources
import { getAllEnrollment, UpdateBool, DeleteEnrollment} from "./../../../../helpers/requests/UserCourseRequest";



//UI CodigoInteractivo
//Progress
import { ProgressCircle } from "./../../../../helpers/UI/misc/index";
//Alerts 
import { ServerMessageBox } from "./../../../../helpers/UI/messages/ServerMessageBox/";

//Routes
import { arrayRoutesDash } from './../../../../helpers/routesConfig'

export  class ListAccess extends Component {

    constructor(props) {
        super(props);
            
        
        this.state = {
            loading: true,
            enrollment: [],
            message: '',
            error: false,
            messageServer: '',
            access: props.access,
            type: props.access ? "Efectuado" : "Pendiente",

        }

        // this.HandleDeleteEnrollment = this.HandleDeleteEnrollment.bind(this);
    }
    HandleDeleteEnrollment(id){
        this.setState({
            loading: true,
        });

        DeleteEnrollment((res)=>{

            if (res.status !== 200) {
                return this.setState({
                    loading: false,
                    error: true,
                    messageServer: res.message || "Ocurrio un error, reintentar por favor",
                });
            }

            return this.setState({
                loading: false,
            }, this.populateList());

      

        },id);
    }

    HandleBtnAccess(codeCourse,username) {
        this.setState({
            loading:true,
        });

        let Username = username;

        UpdateBool(codeCourse, Username, "Access", () => 
        {
             this.populateList() 
               this.setState({
                    loading: false,
                })
        });

    }

    HandleBtnProfessor(codeCourse,username) {
        this.setState({
            loading: true,
        });

        this.populateList();

        let Username = username;

        UpdateBool(codeCourse, Username, "Professor", () => 
        {
             this.populateList() 
               this.setState({
                    loading: false,
                })
        });


    }
    componentDidMount() {
        this.populateList();
    }

    populateList() {


        getAllEnrollment((res) => {
            if (res.status == 200) {
                return this.setState({
                    enrollment: res.data,
                    loading: false
                });
            }

            if (res.status === 500) {
                return this.setState({
                    loading: false,
                    error: true,
                    messageServer: res.message,
                });
            }

            return this.setState({
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

    handleEnrollment(){

        if (this.state.access) {
            return this.state.enrollment.filter(item => {
                if (item.Access) {
                    return item;
                }
            }).map(item => item);
        }

        return this.state.enrollment.filter(item => {
            if (!item.Access) {
                return item;
            }
        }).map(item => item);
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

        //Filter y map, para retornar un array solo sin acceso


        let Enrollment = this.handleEnrollment();

        if (!Enrollment.length) {
            return(
                <Container>
                    <Collection header={"Inscripciones con pago " +this.state.type}>

                        <CollectionItem active>
                            <strong> No hay cursos pendientes aún </strong> <Icon right >sentiment_neutral</Icon>
                        </CollectionItem>

                    </Collection>
                </Container>

            ); 

        }
        return (
            <Container>
                <Collection header={"Inscripciones con pago " + this.state.type}>
                    <section>
                        <Table responsive bordered hoverable centered>
                            <thead>
                                <tr>
                                    <th data-field="ID">ID</th>
                                    <th data-field="UserName">Username</th>
                                    <th data-field="CourseName">Nombre del curso</th>
                                    <th data-field="Access">Tiene acceso</th>
                                    <th data-field="IsInstructor">Es Instructor / Profesor</th>
                                    <th data-field="options">Opciones</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    Enrollment.map((item, index) => {
                                        
                                            return <tr key={index}>
                                                <td>{item.UserCourseID}</td>
                                                <td>{item.Username}</td>
                                                <td>{item.CourseName}</td>
                                                <td>
                                                    {(!item.Access)
                                                        ? <Button
                                                            waves='light'
                                                            className="red accent-1"
                                                            onClick={this.HandleBtnAccess.bind(this, item.CourseCode, item.Username)}
                                                        >
                                                            Sin acceso

                                                </Button>
                                                        : (item.IsInstructor)
                                                            ? <Button
                                                                waves='light'
                                                                className="green darken-3"
                                                                disabled
                                                            >
                                                                Con acceso
                                                    <Icon right>
                                                                    done
                                                    </Icon>
                                                            </Button>
                                                            : <Button
                                                                waves='light'
                                                                className="green darken-3"
                                                                onClick={this.HandleBtnAccess.bind(this, item.CourseCode, item.Username)}
                                                            >
                                                                Con acceso
                                                <Icon right>
                                                                    done
                                                </Icon>
                                                            </Button>}
                                                </td>
                                                <td>
                                                    {
                                                        (!item.IsInstructor)
                                                            ? <Button onClick={this.HandleBtnProfessor.bind(this, item.CourseCode, item.Username)} waves='light' className="red accent-1">No es Profesor </Button>
                                                            : <Button onClick={this.HandleBtnProfessor.bind(this, item.CourseCode, item.Username)} waves='light' className="green darken-3">Profesor <Icon right>done</Icon></Button>
                                                    }
                                                </td>
                                                <td>
                                                    <Button 
                                                        waves='red' 
                                                        className="red darken-3"
                                                        onClick={this.HandleDeleteEnrollment.bind(this,item.UserCourseID)}
                                                        >Eliminar Registro<Icon right>remove</Icon></Button>
                                                </td>
                                            </tr>
                                        }
                                    
                                    )
                                    
                                

                                }
                            </tbody>
                        </Table>
                    </section>
                </Collection>   
            </Container>
        );
    }
}

export class ListNoAccess extends Component {

    constructor(props) {
        super(props);


        this.state = {
            loading: true,
            enrollment: [],
            message: '',
            error: false,
            messageServer: '',
            access: props.access,
            type: props.access ? "Efectuado" : "Pendiente",

        }

        // this.HandleDeleteEnrollment = this.HandleDeleteEnrollment.bind(this);
    }
    HandleDeleteEnrollment(id) {
        this.setState({
            loading: true,
        });

        DeleteEnrollment((res) => {

            if (res.status !== 200) {
                return this.setState({
                    loading: false,
                    error: true,
                    messageServer: res.message || "Ocurrio un error, reintentar por favor",
                });
            }

            return this.setState({
                loading: false,
            }, this.populateList());



        }, id);
    }

    HandleBtnAccess(codeCourse, username) {
        this.setState({
            loading: true,
        });

        let Username = username;

        UpdateBool(codeCourse, Username, "Access", () => {
            this.populateList()
            this.setState({
                loading: false,
            })
        });

    }

    HandleBtnProfessor(codeCourse, username) {
        this.setState({
            loading: true,
        });

        this.populateList();

        let Username = username;

        UpdateBool(codeCourse, Username, "Professor", () => {
            this.populateList()
            this.setState({
                loading: false,
            })
        });


    }
    componentDidMount() {
        this.populateList();
    }

    populateList() {


        getAllEnrollment((res) => {
            if (res.status == 200) {
                return this.setState({
                    enrollment: res.data,
                    loading: false
                });
            }

            if (res.status === 500) {
                return this.setState({
                    loading: false,
                    error: true,
                    messageServer: res.message,
                });
            }

            return this.setState({
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

    handleEnrollment() {

        if (this.state.access) {
            return this.state.enrollment.filter(item => {
                if (item.Access) {
                    return item;
                }
            }).map(item => item);
        }

        return this.state.enrollment.filter(item => {
            if (!item.Access) {
                return item;
            }
        }).map(item => item);
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

        //Filter y map, para retornar un array solo sin acceso


        let Enrollment = this.handleEnrollment();

        if (!Enrollment.length) {
            return (
                <Container>
                    <Collection header={"Inscripciones con pago " + this.state.type}>

                        <CollectionItem active>
                            <strong> No hay cursos pendientes aún </strong> <Icon right >sentiment_neutral</Icon>
                        </CollectionItem>

                    </Collection>
                </Container>

            );

        }
        return (
            <Container>
                <Collection header={"Inscripciones con pago " + this.state.type}>
                    <section>
                        <Table responsive bordered hoverable centered>
                            <thead>
                                <tr>
                                    <th data-field="ID">ID</th>
                                    <th data-field="UserName">Username</th>
                                    <th data-field="CourseName">Nombre del curso</th>
                                    <th data-field="Access">Tiene acceso</th>
                                    <th data-field="IsInstructor">Es Instructor / Profesor</th>
                                    <th data-field="options">Opciones</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    Enrollment.map((item, index) => {

                                        return <tr key={index}>
                                            <td>{item.UserCourseID}</td>
                                            <td>{item.Username}</td>
                                            <td>{item.CourseName}</td>
                                            <td>
                                                {(!item.Access)
                                                    ? <Button
                                                        waves='light'
                                                        className="red accent-1"
                                                        onClick={this.HandleBtnAccess.bind(this, item.CourseCode, item.Username)}
                                                    >
                                                        Sin acceso

                                                </Button>
                                                    : (item.IsInstructor)
                                                        ? <Button
                                                            waves='light'
                                                            className="green darken-3"
                                                            disabled
                                                        >
                                                            Con acceso
                                                    <Icon right>
                                                                done
                                                    </Icon>
                                                        </Button>
                                                        : <Button
                                                            waves='light'
                                                            className="green darken-3"
                                                            onClick={this.HandleBtnAccess.bind(this, item.CourseCode, item.Username)}
                                                        >
                                                            Con acceso
                                                <Icon right>
                                                                done
                                                </Icon>
                                                        </Button>}
                                            </td>
                                            <td>
                                                {
                                                    (!item.IsInstructor)
                                                        ? <Button onClick={this.HandleBtnProfessor.bind(this, item.CourseCode, item.Username)} waves='light' className="red accent-1">No es Profesor </Button>
                                                        : <Button onClick={this.HandleBtnProfessor.bind(this, item.CourseCode, item.Username)} waves='light' className="green darken-3">Profesor <Icon right>done</Icon></Button>
                                                }
                                            </td>
                                            <td>
                                                <Button
                                                    waves='red'
                                                    className="red darken-3"
                                                    onClick={this.HandleDeleteEnrollment.bind(this, item.UserCourseID)}
                                                >Eliminar Registro<Icon right>remove</Icon></Button>
                                            </td>
                                        </tr>
                                    }

                                    )



                                }
                            </tbody>
                        </Table>
                    </section>
                </Collection>
            </Container>
        );
    }
}