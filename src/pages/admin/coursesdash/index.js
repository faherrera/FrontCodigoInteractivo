import React from 'react';



///Sections routes import 
import ListCourse from './list';
import CreateCourse from './create';
import ShowCourse from './show';

//ui
    import FontIcon from 'material-ui/FontIcon';
    import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
    import Paper from 'material-ui/Paper';


import './styles.css';
  

export default class CoursesDash extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedIndex: props.id ? 2 : 0, //En caso de traer ID el index será show, sino list
            id: props.id || null // si tiene props.id es ese, sino null.
        };
        
        
        this.select = this.select.bind(this);

       
    }

   

     select(index) {this.setState({ selectedIndex: index })};


    render(){
        
        const myComponents = [
            <ListCourse />,
            <CreateCourse />,
            <ShowCourse id={this.state.id} />
        ];

        return(
            <div className="admin-page__section">

                <div className="admin-page__container containerAdmin">

                    <nav className="admin-page__nav">
                        <span> Cursos Dashboard </span>
                    </nav>

                    
                    <div className="admin-page__item">

                         {myComponents[this.state.selectedIndex]}

                    </div>

                </div>



                <Paper zDepth={1} className="bottom-navigation">
                    <BottomNavigation selectedIndex={this.state.selectedIndex}>
                        <BottomNavigationItem
                            label="Listado de cursos"
                            icon={<FontIcon className="material-icons">list</FontIcon>}
                            onClick={() => this.select(0)}
                        />
                        <BottomNavigationItem
                            label="Crear un curso"
                            icon={<FontIcon className="material-icons">playlist_add</FontIcon>}
                            onClick={() => this.select(1)}
                        />
                      
                    </BottomNavigation>
                </Paper>
            </div>
        )
    }
}