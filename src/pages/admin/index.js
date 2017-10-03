import React from 'react';

import CoursesDash from './coursesdash';
import UsersDash from './usersdash';

const WhiteList = [
    {
        index:0,
        match:'courses',
        component: <CoursesDash />
    },
    {
        index:1,
        match:'user',
        component: <UsersDash/>
    }
];

export default class DashBoard extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            matchIndex : 0,
        }

        this.selectedRoute = this.selectedRoute.bind(this);
    }

    componentDidMount() {
        const name = this.props.match.params.name;
        if (name) {            
            this.selectedRoute(name)
        }
        
    }

    selectedRoute(name){
        WhiteList.forEach((item) => {   //Recorriendo el array
            if (item.match == name) {   //si matchea, modificar el state.
                // console.log(item.match);
                this.setState({ matchIndex : item.index });
            }
        })
    }

    render(){

        return WhiteList[this.state.matchIndex].component;
    }
}