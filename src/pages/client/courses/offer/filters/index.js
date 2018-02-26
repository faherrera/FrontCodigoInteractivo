import React from 'react';

export default class Filters extends React.Component{

    render(){
        return(
            <div className="filter-section">

                <a href="#!" className="chip"> Frontend <i className="material-icons verticalAlign">code</i> </a>

                <a href="#!" className="chip"> Backend <i className="material-icons verticalAlign">code</i> </a>

                <a href="#!" className="chip"> Mobile <i className="material-icons verticalAlign">code</i> </a>

                <a href="#!" className="chip"> Todos <i className="material-icons verticalAlign">code</i> </a>

            </div>
        );
    }
}