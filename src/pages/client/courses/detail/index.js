import React from 'react';

//Components
    import DetailHeader from './detailHeader';
    import DetailContent from './detailContent';

//Request
    import { getCourse } from './../../../../helpers/requests/CoursesRequest';

//Routes    
    import { arrayRoutesGeneral } from './../../../../helpers/routesConfig';

//UI
    //OWN
    import { ProgressCircle } from '../../../../helpers/UI/misc/index';
    //Messages
    import { ServerMessageBox} from './../../../../helpers/UI/messages/ServerMessageBox'


export default class DetailCourse extends React.Component{
    
    state = {
        loading:true,
        course:{},
        message:'',
        errorServer:false
    }

    componentDidMount() {
        this.populateCourse();
    }

    populateCourse(){
        let {code} = this.props;
        getCourse(code, (res) => {

            if (res.status) {
                return this.setState({loading:false,course:res.data})};
            
            if (res.codeState) {
                return this.setState({loading:false,message:res.message})};

            return this.setState({
                loading:false,
                message: res.message,
                errorServer:true
            });
        });
    }
    render(){ 

        if(this.state.loading) return <ProgressCircle active />
        if (this.state.message) return <ServerMessageBox message={this.state.message} error={this.state.errorServer} btnText="Volver a los cursos" onClick={()=>{ return window.location.href = arrayRoutesGeneral.courses}}/>

        return(

            <div className="page-detail-course">

                <DetailHeader course={this.state.course}/>
                <DetailContent course={this.state.course}/>

            </div>
        );

    }
}