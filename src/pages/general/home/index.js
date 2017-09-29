import React,{Component} from 'react';

///Componetns UI
import RaisedButton from 'material-ui/RaisedButton';


//Components
import Banner from './banner';
import Promo from './promo';
import Testimonials from './testimonials';
const noMargin = {
    margin:0
}



export default class Home extends React.Component{

    render(){
        return(
            <div className="page-home">
                <Banner />
                <Promo/>
                <Testimonials/>
            </div>
        )
    }
}