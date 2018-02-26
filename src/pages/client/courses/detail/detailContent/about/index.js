import React from 'react';

export default class About extends React.Component{
    render(){
        return(
            <div className="tab-item collection">
                <div className="container">

                    <h3 className="tab-title"> Sobre el curso </h3>

                    <p>
                        {this.props.Description}
                    </p>
                    
                </div>
            </div>
        );
    }
}