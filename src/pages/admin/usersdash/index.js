import React from 'react';

///Sections routes import 
    import List from './List/';
    import Create from './Create';
    import Show from './Show';

//ui
import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';


export default class UserDash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
            id: null
        };


        this.select = this.select.bind(this);


    }


    componentDidMount() {
        let id = this.props.id;
        if (id) {
            this.setState({
                selectedIndex: 2,
                id

            });
        }
    }
    select = (index) => this.setState({ selectedIndex: index });


    render() {

        const myComponents = [
            <List />,
            <Create />,
            <Show id={this.state.id} />
        ];

        return (
            <div className="admin-page__section">

                <div className="admin-page__container containerAdmin">

                    <nav className="admin-page__nav">
                        <span> Users Dashboard </span>
                    </nav>


                    <div className="admin-page__item">

                        {myComponents[this.state.selectedIndex]}

                    </div>

                </div>



                <Paper zDepth={1} className="bottom-navigation">
                    <BottomNavigation selectedIndex={this.state.selectedIndex}>
                        <BottomNavigationItem
                            label="Listar los recursos"
                            icon={<FontIcon className="material-icons">list</FontIcon>}
                            onClick={() => this.select(0)}
                        />
                        <BottomNavigationItem
                            label="Crear un recurso"
                            icon={<FontIcon className="material-icons">playlist_add</FontIcon>}
                            onClick={() => this.select(1)}
                        />

                    </BottomNavigation>
                </Paper>
            </div>
        )
    }
}