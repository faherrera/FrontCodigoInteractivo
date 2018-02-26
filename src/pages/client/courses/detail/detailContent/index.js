import React from 'react';

//Components Tabs
import Listing from './list';
import Temary from './temary';
import About from './about';
import Instructor from './instructor';

//Component UI
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views'; //Swipeable 


//Assets
import './styles.css';

const styles = {
    
    buttonStyle: { color: "#1976D2" },
    inkStyle:{
        backgroundColor: "#1976D2" 
    },
    tabItem:{
         backgroundColor: "white"
    }
};



export default class DetailContent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            slideIndex: 0,
        };

        

    }

    handleChange = (value) => {
        this.setState({
            slideIndex: value,
        });
    };


    render() {
        let { Classes, Description, ProfessorID} = this.props.course;

        return (
            <div className="detail-course__content row">
                <div className="tab-section">

                    <Tabs
                        onChange={this.handleChange}
                        value={this.state.slideIndex}
                        tabItemContainerStyle={styles.tabItem}
                        inkBarStyle={styles.inkStyle}
                    >
                        <Tab label="Lista de clases" value={0} buttonStyle={styles.buttonStyle} />
                        <Tab label="Temario" value={1} buttonStyle={styles.buttonStyle}  />
                        <Tab label="Acerca de" value={2} buttonStyle={styles.buttonStyle}  />
                        <Tab label="Profesor" value={3} buttonStyle={styles.buttonStyle}  />

                    </Tabs>
                    
                    <SwipeableViews
                        index={this.state.slideIndex}
                        onChangeIndex={this.handleChange}
                    >
                        <Listing Classes={Classes}/>

                        <Temary /> 
                        
                        <About Description={Description}/>
                        
                        <Instructor ProfessorID={ProfessorID}/>
                        
                    </SwipeableViews>

                </div>
            </div>
        );
    }
}