import React, { Component } from 'react';

//Own Components 
    import Allow from './Allow/';
    import Denied from './Denied/';

//Request
import { consultSession} from './../../../../../helpers/requests/AuthRequest';
//Assets
    import './style.css';
export default class Auth extends Component {

    constructor(){
        super()

        this.state = {
            session:false,
            dataUser: {}
        }
    }

    componentDidMount(){
        let consult = consultSession();

        if (consult.status) {
            this.setState({
                session:true,
                dataUser: consult.data
            });
        }
    }

    render() {
        if (this.state.session) {
            return <Allow dataUser={this.state.dataUser}/>
        }
        
        return <Denied />

    }
}