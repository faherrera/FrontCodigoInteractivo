import React from 'react';

import {Container} from 'react-materialize';
import {ListItem} from 'material-ui';

export default class Temary extends React.Component{

    render(){
        return(
            <div className="tab-item collection">
                <Container>
                    <h3> En el curso aprenderás
                    </h3>
                    <hr/>

                    {
                        this.props.link ?
                            <ListItem
                                hoverColor="#b2dfdb"
                            >
                                <a target="_blank" href={this.props.link}> Temario del curso </a>
                            </ListItem>
                        :

                            <ListItem
                                hoverColor="#e57373 "
                            >
                                <strong> Sin temario por el momento </strong>
                            </ListItem>
                    }
                    

                </Container>

            </div>
        );

    }
}