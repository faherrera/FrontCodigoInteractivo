import React from 'react';

//Pages
import Courses from './courses/';
import Home from './home/';
import Classes from './classes/';

let WhiteList = [
    {
        index: 0,
        match: 'home',
    },
    {
        index: 1,
        match: 'cursos',
    },
    {
        index: 2,
        match: 'clases',
    },
];

export default class General extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            matchIndex: 0,
            code: null
        }

        this.selectedRoute = this.selectedRoute.bind(this);
    }

    componentDidMount() {
        const name = this.props.match.params.name;
        const code = this.props.match.params.code;
        
        // alert('El name es-> '+name+' y el code es -> '+code);
        if (code) {
            this.setState({
                code: code
            });
        }

        if (name) {
            return this.selectedRoute(name)
        }

    }

    selectedRoute(name) {
        //Podría mejorarlo con un .Map
        WhiteList.forEach((item) => {   //Recorriendo el array
            if (item.match == name) {   //si matchea, modificar el state.
                // console.log(item.match);
                this.setState({ matchIndex: item.index });
            }
        })
    }


    render() {
        const myComponents = [
            <Home code={this.state.code} />,
            <Courses code={this.state.code} />,
            <Classes code={this.state.code} />,
        ]

        return myComponents[this.state.matchIndex];  //Retornando el componente del array.
    }
}