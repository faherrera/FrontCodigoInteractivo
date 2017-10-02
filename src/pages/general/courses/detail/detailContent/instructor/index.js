import React, { Component } from 'react';

// Assets

class Instructor extends Component {
    render() {
        return (
            <div className="tab-item collection">

                <div className="col s12 m8 offset-m2 l6 offset-l3">
                    <div className="card-panel grey lighten-5 z-depth-1">
                        <div className="row valign-wrapper">
                            <div className="col s4">
                                <img src="https://faherrera.github.io/images/perfil/burns_400x400.jpg" alt="" className="circle responsive-img" />
                            </div>
                            <div className="col s8 center">
                                <h4 className="center-align"> Facundo Herrera </h4>
                                <ul>
                                    <li> faherrera.dev@gmail </li>
                                </ul>
                                {/*<a className="btn-floating btn-large waves-effect waves-light blue lighten-2 "><i className="material-icons">group</i></a>*/}


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Instructor;
