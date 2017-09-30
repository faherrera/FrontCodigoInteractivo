import React from 'react';

import './offerItem.css';

export default class OfferItem extends React.Component {

    render() {

        return (
            <div className={"offerCourseItem"+" "+this.props.itemClass }>

                <div className="card hoverable">
                    
                    <div className="card-image" >
                        
                        <img src={this.props.imgCard} style={{ height: '240px' }}/>
                        
                    
                    </div>

                    <div className="card-content">
                        <span className="card-title">{this.props.title}</span>
                    </div>
                    
                    <div className="card-action">
                        
                        <div className="row">

                            <div className="col s6">
                                <i className="material-icons verticalAlign">info_outline</i> <span>{this.props.level}</span>
                            </div>

                            <div className="col s6 right-align ">
                                <a href="#!" className="teal-text">Ver Más</a>
                            </div>
                        </div>
                   
                    </div>
                    
                </div>
            </div>
        );
    }
}