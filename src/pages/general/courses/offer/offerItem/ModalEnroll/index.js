import React from 'react';
import PropTypes from 'prop-types';


//Components
    import { Button, Modal } from 'react-materialize';

export default class ModalEnroll extends React.Component {

    handleRequestAccept = () => {
       alert(`Está queriendo enlazár a ${window.localStorage.Username} y al curso de codigo ${this.props.Code}`);
       
    }

    render() {
        let { Name } = this.props;
        return (<Modal
                header="Inscribirse al curso"
                bottomSheet
                trigger={<Button
                    key="addCart"
                    floating
                    large
                    className='red darken-3 '
                    waves='light'
                    icon='favorite'
                    onClick={this.handleAddCart}

                />}
                actions={
                    [
                        <Button
                            key="Aceptar"
                            waves="green"
                            className="white black-text"
                            onClick={this.handleRequestAccept}
                        >
                            Aceptar
                        </Button>,
                        <Button
                            key="Cancelar"
                            waves="red"
                            className="white black-text"
                            onClick={this.closeModal}
                            modal='close'
                        >
                            Cancelar
                    </Button>,

                    ]
                }
            >
                <p>¿Seguro que quiere inscribirse a <strong> <em>{Name} </em> </strong> ?</p>
                <p>Deberá esperar a que el sistema procese su pago</p>
            </Modal>)
    }
}

ModalEnroll.propTypes = {
    Name: PropTypes.string.isRequired, //Name del Curso
    Code: PropTypes.number.isRequired //Code del curso.
}