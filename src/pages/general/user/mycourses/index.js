import React, { Component } from 'react';

//assets
import './style.css';

//UI
    //materialize
        import { Col, Collection, CollectionItem} from "react-materialize";
    //OWN
        import SimpleCourseCard from './../../../../helpers/UI/cards/course/'
        import {ProgressCircle} from './../../../../helpers/UI/misc/'

//Request
    import { getAllCoursesOfUser } from "./../../../../helpers/requests/UserCourseRequest";
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
        let username = window.localStorage.Username;

        if(!username) return this.setState({message:'No hay usuario cargado.',loading:'false'});

        getAllCoursesOfUser(username,(res)=>{
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

    mapMyCourses = () =>{
        
        if (!this.state.courses.length) return <Collection><CollectionItem  active >No tiene cursos asociados aún </CollectionItem></Collection>

        return this.state.courses.map((item,index) => (
            <Col m={4} s={6} key={index}>
                <SimpleCourseCard
                    title="React Native"
                    description="Construir apps nativas nunca fue tan fácil. Aplica tus conocimientos de JavaScript y React para crear una app de iOS y Android reutilizando el mismo código."
                    level="Intermedio"
                    code="111"
                />
            </Col>
        ));
    }

    render() {
        if(this.state.loading) return <ProgressCircle active size={150}/>
        if (this.state.message) return <Collection><CollectionItem  active >{this.state.message} </CollectionItem></Collection>
        return (
            <div className="row">
                <div className="course_item row">
                    
                    {this.mapMyCourses()}

                </div>
            </div>
        );
    }
}