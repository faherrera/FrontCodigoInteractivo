import React,{Component} from 'react';

///Componetns UI
import RaisedButton from 'material-ui/RaisedButton';

const noMargin = {
    margin:0
}



export default class Home extends React.Component{

    render(){
        return(
            <p>
                Dialogs contain text and UI controls focused on a specific task. They inform users about critical information, require users to make decisions, or involve multiple tasks.
            </p>
        )
    }
}