import React from 'react';
import PropTypes from 'prop-types';


//Components
    import { Button, Modal,Preloader } from 'react-materialize';

//Request
    import { postUserCourse } from './../../../../../../helpers/requests/UserCourseRequest';
//Classes
    import UserCourse from './../../../../../../helpers/classes/UserCourse';

export default class ModalEnroll extends React.Component {

    state ={
        loading:false,
        message:"",

    }

    componentDidMount() {
        this.setState({
            message:""
        });
    }

    handleLinkUserAndCourse = () => {
        this.setState({
            loading:true
        });
        let enroll  = new UserCourse(window.localStorage.Username,this.props.Code,false,false);

      postUserCourse(enroll,(res)=>{
          
            if (res.status) {
                this.setState({
                    loading:false,

                });

                return window.location.href="http://localhost:3000/usuario/pendientes";

            }

            this.setState({
                loading:false,
                message:res.message
            });
      });
    }

    render() {
        let { Name } = this.props;
        let triggerClass = (window.localStorage.Token) ? "red darken-3" : "hide";
        console.log(triggerClass);
        if (this.state.loading || this.state.message) {
            return <Modal
                header='Procesando información'
                modalOptions={{
                    dismissible:false
                }}
                bottomSheet
                trigger={<Button
                    key="addCart"
                    floating
                    large
                    className={triggerClass}
                    waves='light'
                    icon='favorite'
                    onClick={this.handleAddCart}

                />}
                actions={(this.state.message) ? [<Button
                    key="Cancelar"
                    waves="red"
                    className="white black-text"
                    modal='close'
                    onClick={()=>{this.setState({message: ""})}}
                >
                    Cancelar
                    </Button>] : []}
                >
                
                    <div className="center">
                        
                        { (this.state.loading) ? <Preloader flashing size="big"/> : <p> {this.state.message}</p>}
                    </div>
            </Modal>
        }
        return (<Modal
                header="Inscribirse al curso"
                bottomSheet
                modalOptions={{
                    dismissible:true
                }}
                trigger={<Button
                    key="addCart"
                    floating
                    large
                    className={triggerClass}
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
                            onClick={this.handleLinkUserAndCourse}
                        >
                            Aceptar
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