import React from 'react';

//Assets
    import './offerItem.css';

//UI
    //Materialize
        import {Button,Modal} from 'react-materialize';
    //OWN
        import SimpleCourseCard from './../../../../../helpers/UI/cards/course/';
        import ModalEnroll from './ModalEnroll/';
//Routes
    import { arrayRoutesGeneral } from './../../../../../helpers/routesConfig';

export default class OfferItem extends React.Component {

    render() {

        let {Thumbnail,Name,Level,Code} = this.props.course;

        return (
            <SimpleCourseCard
                // key={index}
                className="col s12 m6 l4"
                image={Thumbnail}
                title={Name}
                level={Level}
                actions={
                    [
                        <Button
                            key="seeMore"
                            waves="green"
                            node='a'
                            href={arrayRoutesGeneral.courses + Code}
                            className="grey lighten-5 black-text"
                        >
                            Detalles
                        
                        </Button>,
                        <ModalEnroll Name={Name} Code={Code} key="modal" />
                    ]}

            />
        );
    }
}




