import React from 'react';

//Pages
    import Courses from './courses/';
    // import Home from './home/';
    import GeneralClasses from './classes/';
    import UserSection from './user/';
    import Error404 from './error404/';

//Layout
    import ClientLayout from './../../layouts/client/client';

let WhiteList = [
    // {
    //     index: 0,
    //     match: 'home',
    // },
    {
        index: 0,
        match: 'usuario',
    },
    {
        index: 1,
        match: 'cursos',
    },
    {
        index: 2,
        match: 'clases',
    },
    {
        index: 3,
        match: 'error',
    },
];

export default class General extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            matchIndex: 3,
            param: null
        }

        this.selectedRoute = this.selectedRoute.bind(this);
    }

    componentDidMount() {
        const name = this.props.match.params.name || "error";
        const param = this.props.match.params.param;
        
        
        if (name) {
            if (name === 'clases' && !param) {
                return this.selectedRoute("cursos") //Lo envio a esta direccion ya que no es posible ingresar a Classes. Sino podría enviarlo a un error de pagina 404

            }

            this.selectedRoute(name)
        }

        if (param) {
            this.setState({
                param            
            });

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
            // <Home code={this.state.param} />,
            <UserSection  param={this.state.param}/>,
            <Courses code={this.state.param} />,
            <GeneralClasses code={this.state.param} />,
            <Error404 code={this.state.param} />,
        ]
        return (<ClientLayout>
                    {
                        myComponents[this.state.matchIndex]  //Retornando el componente del array.
                    }
                </ClientLayout>)
    }
}