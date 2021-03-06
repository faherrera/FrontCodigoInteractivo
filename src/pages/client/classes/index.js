//References
import React, { Component } from 'react';

//Assets
import './style.css'; 
//Component
    import ClassHeader from './classHeader/';
    import ClassContent from './classContent/';
//Request
    import { getClass } from '../../../helpers/requests/ClassesRequest';
//UI
    import { ProgressCircle } from '../../../helpers/UI/misc';
    import { ServerMessageBox } from '../../../helpers/UI/messages/ServerMessageBox/';
import { GetEnrollment } from '../../../helpers/requests/UserCourseRequest';
import { arrayRoutesGeneral } from '../../../helpers/routesConfig';

class Classes extends Component {
    constructor(props){
        super(props);

        this.state = {
            _loading: true,
            message: '',
            _class: {},
            classes: [],
            course: {}

        }

    }
    componentDidMount() {
        console.clear();

        // alert(window.localStorage.getItem("Token"));
        GetEnrollment(
            res => {
                
                if(res == undefined){
                    alert("Ocurrió un error será redirigido a la seccion de cursos");

                    return window.location.href = arrayRoutesGeneral.courses;
                }

                if (res.status === 401) {
                    alert("No está autorizado para ingresar a esta clase, será redirigido a sus cursos con acceso.");
                    return window.location.href= arrayRoutesGeneral.usuario;
                }


                if (res.status === 200) {                
                    return this.populateClasses();
                }
                
              

         }, this.props.code);


    }

    populateClasses(){
        this.setState({
            message: '',
            error:false,
            _loading:true
        });


        let {code } = this.props;

        getClass(code, (res) => {
            if (res.status) {
                return this.setState({
                    _class: res.data,
                    _loading: false,
                });
            }

            return this.setState({
                _loading: false,
                message: res.message

            });


        });

    }

    render() {

        if(this.state._loading) return <ProgressCircle active />
        
        if (this.state.message && this.state.error) return <ServerMessageBox message={this.state.message} onClick={this.populateClasses.bind(this) }/>

        if (this.state.message) return <ServerMessageBox message={this.state.message} error={false}/>

        let { TitleClass, Description ,PathVideo, CourseID,Resources,Course} = this.state._class; 


        return (
            <div className="page-class">
                <ClassHeader
                    PathVideo={PathVideo}
                    Title={TitleClass}
                    NameCourse={Course.Name}
                    CourseID={CourseID}
                />
                <ClassContent 
                    Description={Description}
                    Resources={Resources}
                    CourseID={CourseID}
                    Code = {this.props.code}
                    
                />

            </div>
        )
    }
}

export default Classes;
