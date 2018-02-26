import React, { Component } from 'react';

// Assets
    import noImage from './../../../../../../assets/img/noimage.jpg';

//Request
    import { getUser } from './../../../../../../helpers/requests/UserRequest';
    
//UI
    import { ProgressCircle } from './../../../../../../helpers/UI/misc';
    //Message
    import { ServerMessageBox } from './../../../../../../helpers/UI/messages/ServerMessageBox/';


class Instructor extends Component {

    state = {
        user:{},
        loading:true,
        message:'',
        errorServer:false
    }
    componentDidMount() {
        this.gettingUser();
    }

    gettingUser(){
        let code = this.props.ProfessorID;

        getUser(code,(res)=>{
            if (res.status) {
                
            return this.setState({
                    user:res.data,
                    loading:false,
                });

            }

            return this.setState({
                message:res.message,
                loading:false
            });

        });
    }
    render() {

        if (this.state.loading) return <ProgressCircle active size={100}/>
        if (this.state.message) return <ServerMessageBox message={this.state.message}/>

        return (
            <div className="tab-item collection">

                <div className="col s12 m8 offset-m2 l6 offset-l3">
                    <div className="card-panel grey lighten-5 z-depth-1">
                        <div className="row valign-wrapper">
                            <div className="col s4">
                                <img src={noImage} alt="" className="circle responsive-img" />
                            </div>
                            <div className="col s8 center">
                                <h4 className="center-align"> {this.state.user.Name} </h4>
                                <ul>
                                    <li> {this.state.user.Email} </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Instructor;
