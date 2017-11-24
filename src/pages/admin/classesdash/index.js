import React from 'react';

///Sections routes import 
// import ListClasses from './list';
import CreateClass from './create';
import ShowClass from './show';

//ui
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';


export default class ClassesDash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
            id: null
        };


        this.select = this.select.bind(this);


    }


    componentWillReceiveProps(nextProps) {
        let id = nextProps.id;

        if (id) {
            this.setState({
                selectedIndex: 1,
                id

            });
        }
    }
    select = (index) => this.setState({ selectedIndex: index });


    render() {

        const myComponents = [
            <CreateClass />,
            <ShowClass code={this.state.id} />
        ];

        return (
            <div className="admin-page__section">

                <div className="admin-page__container containerAdmin">

                    <nav className="admin-page__nav">
                        <span> Classes Dashboard </span>
                    </nav>


                    <div className="admin-page__item">

                        {myComponents[this.state.selectedIndex]}

                    </div>

                </div>



                <Paper zDepth={1} className="bottom-navigation">
                    <BottomNavigation selectedIndex={this.state.selectedIndex}>
                        <BottomNavigationItem
                            label="Crear una Clase"
                            icon={<FontIcon className="material-icons">playlist_add</FontIcon>}
                            onClick={() => this.select(0)}
                        />

                    </BottomNavigation>
                </Paper>
            </div>
        )
    }
}