import React from 'react';

//Pages
import CoursesDash from './coursesdash';
import ClassesDash from './classesdash';
import UsersDash from './usersdash';


let WhiteList = [
    {
        index: 0,
        match: 'courses',
    },
    {
        index: 1,
        match: 'classes',
    },
    {
        index:2,
        match:'users'
    }
];

export default class Courses extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            matchIndex : 0,
            id:null
        }

        this.selectedRoute = this.selectedRoute.bind(this);
    }

    componentDidMount() {
        const name = this.props.match.params.name;
        // console.log(name);
        const id = this.props.match.params.id;
        // console.log(id);
        if (name) {            
            this.selectedRoute(name)
        }

        if(id){
            this.setState({
                id:id
            });
        }
        
    }

    selectedRoute(name){
        //Podría mejorarlo con un .Map
        WhiteList.forEach((item) => {   //Recorriendo el array
            if (item.match == name) {   //si matchea, modificar el state.
                // console.log(item.match);
                this.setState({ matchIndex : item.index });
            }
        })
    }

   
    render()
    {
        console.log('====================================');
        console.log("Esto deberia mostrarle -> " + this.state.id);
        console.log('====================================');
         const myComponents = [
            <CoursesDash id={this.state.id} />,
            <ClassesDash id={this.state.id} />,
            <UsersDash id={this.state.id} />,
        ]

        return myComponents[this.state.matchIndex];  //Retornando el componente del array.
    }
}