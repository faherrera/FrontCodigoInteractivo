import React,{Component} from 'react';

///Componetns UI
import RaisedButton from 'material-ui/RaisedButton';


//Components
import Banner from './banner';

const noMargin = {
    margin:0
}



export default class Home extends React.Component{

    render(){
        return(
            <div className="page-home">
                <Banner />
            </div>
        )
    }
}