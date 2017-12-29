import React, { Component } from 'react';

//Assets

//UI
    //OWN
    import {ProgressCircle} from './../../../../../helpers/UI/misc/';

//Request

    //Filter
    import {filterFromCourseCode} from './../../../../../helpers/filters/ClassFilter';

export class Listado extends Component{
    render(){
        let {Title,Arr } = this.props;


        return (<div className="about-class__listado">
            <div className="row">
                <div className="col s12">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title ">{Title}</span>
                            <hr />
                            <div className="collection">
                                {
                                    (Arr.lenght) ?
                                        Arr.map((item, index) => {
                                            return <a href="#!" key={index} className="collection-item"> {index + 1}. <strong> {item.TitleResource} </strong>  </a>
                                        }) : <a className="collection-item">  <strong> Por el momento no hay items en este listado =D</strong> </a>
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
} 

class About extends Component {

    render() {
        let { Description, Resources ,CourseID} = this.props;
        
        return (
            <div className="about-class">

                <div className="about-class__description">
                    <div className="row">
                        <div className="col s12">
                            <div className="card">
                                <div className="card-content">
                                    <span className="card-title ">Descripción</span>
                                    <hr />
                                    <p>
                                        {Description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Listado 
                    Title="Listado de recursos"
                    Arr={Resources}
                />

            </div>
        )
    }
}

export default About;
