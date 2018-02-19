import React, { Component } from 'react';

//assets
import './style.css';

//UI
    //materialize
        import { Col, Collection, CollectionItem,Button,Icon} from "react-materialize";
    //OWN
        import SimpleCourseCard from './../../../../helpers/UI/cards/course/'
        import {ProgressCircle} from './../../../../helpers/UI/misc/'

//Request
import { getAllCoursesOfUserWithFilters } from "./../../../../helpers/requests/UserCourseRequest";
//Routes
    import { arrayRoutesGeneral } from "./../../../../helpers/routesConfig";
export default class MyCourses extends Component {

    state = {
        loading:true,
        courses:[],
        message:"",
    }


    componentDidMount() {
        this.requestForMyCourses();
    }

    requestForMyCourses(){
        let{filter,valueFilter} = this.props;

        let username = window.localStorage.Username;

        if(!username) return this.setState({message:'No hay usuario cargado.',loading:'false'});

        getAllCoursesOfUserWithFilters(username,filter,valueFilter,(res)=>{
            if (res.status) {
                return this.setState({
                    loading:false,
                    courses: res.data
                });
            }

            return this.setState({
                loading:false,
                message: res.message
            });
        });
    }

    handleBtnAccess = (access) => {
        
        if (access) return <Button key="btnAccess" className="green accent-3" style={{cursor:'auto'}} >Con acceso<Icon right>lock_open</Icon></Button>
        return <Button key="btnAccess" className="red accent-3" style={{cursor:'auto'}}>Pendiente<Icon right>lock</Icon></Button>
        
    }
    mapMyCourses = () =>{

        if (!this.state.courses.length) return <Collection><CollectionItem  active >No tiene cursos asociados aún </CollectionItem></Collection>

        return this.state.courses.map((item,index) => (
            
            <Col s={12} m={6} l={4}  key={index}>
                <SimpleCourseCard
                    title={item.Course.Name}
                    image={item.Course.Thumbnail}
                    description={item.Course.Description}
                    level={item.Course.Level}
                    mode={item.Course.Mode}
                    actions={
                        
                        [
                            <Button
                                key="seeMore"
                                waves="green"
                                node='a'
                                href={arrayRoutesGeneral.courses + item.Course.Code}
                                className="grey lighten-5 black-text"
                            >
                                Detalles

                            </Button>,
                             this.handleBtnAccess(item.Access)
                        ]}
                />
            </Col>
        ));
    }

    render() {
        if(this.state.loading) return <ProgressCircle active size={150}/>
        if (this.state.message) return <Collection><CollectionItem  active >{(this.state.message == "Network Error") ? "Problema de conexion con el servidor, probablemente esté fuera de servicio" : this.state.message} </CollectionItem></Collection>
        return (
            <div className="row">
                {this.mapMyCourses()}
            </div>
        );
    }
}