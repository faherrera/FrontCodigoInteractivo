import React from 'react';

//Request
import { getCourses } from './../helpers/request';




//Components 
import  EditCourse  from './../edit/';
import  ShowCourse  from './../show/';
import  TableCourse  from './table';


//Request

///Asset
import './styles.css';


export default class ListCourse extends React.Component{
    constructor(props){
        super(props);

        this.state = {
           
            selectedComponent: 0,
            code: 0
        }

        this.handleShow = this.handleShow.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    
 

    handleEdit(e){
        console.log("------*////****//*---------");

        this.handleSetState(1,e.target.name);

        // console.log(e.target);
        // console.log(e.target.name);
        console.log("------*////****//*---------");
    }
    
    handleDelete(e){
        console.log('====================================');
        console.log("Handle Delete");
        console.log(e.target.name);
        console.log('====================================');
    }

    handleShow(e){
        console.log('====================================');
        console.log("Handle Show");
        console.log(e.target.name);
        this.handleSetState(2, e.target.name);

        console.log('====================================');
    }

    handleSetState(component,code){
        this.setState({
            selectedComponent: component,
            code
        });
    }

    render(){
       

        const myComponents = [
            <TableCourse    handleShow={this.handleShow} 
                            handleEdit={this.handleEdit}
                            handleDelete={this.handleDelete} />,
            <EditCourse code={this.state.code}/>,
            <ShowCourse code={this.state.code}/>
        ]

        return(
                <div className="section">
                    {myComponents[this.state.selectedComponent] }
                </div>

        );
    }
}