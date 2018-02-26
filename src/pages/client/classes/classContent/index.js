import React, { Component } from 'react';


//Component UI
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views'; //Swipeable 
import About from './about/';

const styles = {

    buttonStyle: { color: "#1976D2" },
    inkStyle: {
        backgroundColor: "#1976D2"
    },
    tabItem: {
        backgroundColor: "white"
    }
};

//Components

class ClassContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
        };

        
        this.handleDisqus = this.handleDisqus.bind(this);
    }

    componentDidMount() {
        this.handleDisqus();

    }

    handleChange = (value) => {
        this.setState({
            slideIndex: value,
        });
    };


    handleDisqus(code) {
        var disqus_config = function (code) {
            
            let url = "/clases";
            this.page.url = url;  // Replace PAGE_URL with your page's canonical URL variable
            this.page.identifier = url + code; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
        };
        (function () { // DON'T EDIT BELOW THIS LINE
            var d = document, s = d.createElement('script');
            s.src = 'https://codigointeractivo.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
        })();

    }

    render() {
        let { Description, Resources, Course ,Code,CourseID} = this.props; 

        return (
            <div className="detail-course__content row">
                <div className="tab-section">

                    <Tabs
                        onChange={this.handleChange}
                        value={this.state.slideIndex}
                        tabItemContainerStyle={styles.tabItem}
                        inkBarStyle={styles.inkStyle}
                    >
                        <Tab label="Acerca de curso" value={0} buttonStyle={styles.buttonStyle} />
                        <Tab label="Comunidad" value={1} buttonStyle={styles.buttonStyle} />
                       

                    </Tabs>

                    <SwipeableViews
                        index={this.state.slideIndex}
                        onChangeIndex={this.handleChange}
                    >

                    <div id="about" className="col s12">
                        <About
                            Description={Description}
                            Resources={Resources}
                            CourseID={CourseID}
                            />

                    </div>

                    <div id="comunidad" className="col s12">
                            <div id="disqus_thread" onLoad={this.handleDisqus(Code)}></div>

                    </div>

                    
            </SwipeableViews>
            
                </div>
            </div>
            // <span> pee </span>
        )
    }
}

export default ClassContent;
