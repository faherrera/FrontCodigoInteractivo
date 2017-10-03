import React from 'react';



///Sections routes import 
import ListCourse from './list';
import CreateCourse from './create';
//ui
    import FontIcon from 'material-ui/FontIcon';
    import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
    import Paper from 'material-ui/Paper';


   
  
const myComponents = [
    <ListCourse/>,
    <CreateCourse />
];

export default class CoursesDash extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            selectedIndex: 1,
        };
        
        
        this.select = this.select.bind(this);

       
    }

    select = (index) => this.setState({ selectedIndex: index });


    render(){
        
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



                <Paper zDepth={1}>
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