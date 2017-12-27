//Components
import React, {Component} from 'react';
import axios from 'axios';

//Routes
    import { arrayRoutes } from './../../../../../helpers/routesConfig';

//UI
    //UI CODIGO INTERACTIVO.
    import {InputNumber} from '../../../../../helpers/UI/form/input/inputNumber';
    import {InputText} from '../../../../../helpers/UI/form/input/InputText';
    import {ButtonForm} from '../../../../../helpers/UI/form/button/ButtonForm';

import { ProgressCircle } from '../../../../../helpers/UI/misc';

import { ListMessage } from './../../../../../helpers/UI/messages/ListError';
import { FormMessage } from '../../../../../helpers/UI/messages/FormMessage';

import { AutocompleteClass } from './../../../../../helpers/UI/form/autocomplete/AutocompleteClass';

//Request
import { postResource, putResource } from '../../../../../helpers/requests/ResourcesClassesRequest';

//Response.
import { FormResponseResources } from './../../../../../helpers/responses/FormResponse/FormResponseResources';

export default class FormResource extends Component {
    constructor(props){
        super(props);

        this.state = {
            loading: true,
            messageError: [],
            resource: props.resource ? props.resource : {},
            type: props.type ? (props.type === 'edit' ? 'edit' : 'create') : 'create',

        }
    }

    componentDidMount() {
        if (this.state.type === 'create') {
            return this.setState({
                loading:false,
                messageError:[]
            });
        }
        
    }

    componentWillReceiveProps(nextProps){

        if (this.state.type === 'edit') {
            
            this.setState({
                resource: nextProps.resource,
                loading:false
            });
        }
    }

    handleClickButton(e){
        this.setState({
            loading:true,
        });
        let code = this.refs.codeResource.getValue();
        let title = this.refs.titleResource.getValue();
        let externalLink = this.refs.externalLinkResource.getValue();
        let autocomplete = this.refs.classResource.getValue();
        
        /**
         * Aquí deposito el estado de los inputs del form.
         */
        let responseResource = new FormResponseResources(code, title, externalLink, autocomplete);

        if (e.target.id === 'btnCreate') {
            
            

            if (responseResource.status) {
                
                //Aquì va la peticiòn create que recibe un callback.
                postResource(responseResource.data,(res) => {
                    if (res.status) {
                        let route = arrayRoutes.resources + responseResource.data.CodeResource;
                        return window.location = route;

                    }

                    return this.setState({
                        messageError: [...responseResource.message],
                        loading:false
                    });
                });
            }

            return this.setState({
                messageError: [...responseResource.message],
                loading: false
            });
        }

        if (e.target.id === 'btnEdit') {
            
            

            if (responseResource.status) {
                
                //Aquì va la peticiòn create que recibe un callback.
                putResource(this.state.resource.CodeResource,responseResource.data,(res) => {
                    if (res.status) {
                        let route = arrayRoutes.resources + responseResource.data.CodeResource;
                        return window.location = route;

                    }

                    return this.setState({
                        messageError: [...responseResource.message],
                        loading:false
                    });
                });
            }

            return this.setState({
                messageError: [...responseResource.message],
                loading: false
            });
        }
    }
    render() {

        if (this.state.loading) {
            return <ProgressCircle active={this.state.loading}/>
        }

        return (
            <form className="form">
                <FormMessage messages={this.state.messageError} />

                <InputNumber
                    label="Codigo del recurso"
                    placeholder="Ej: 555"
                    required={true}
                    ref="codeResource"
                    disabled={this.state.type !== 'create' ? true : false }
                    value={this.state.resource.CodeResource}
                />

                <InputText
                    label="Nombre del recurso"
                    placeholder="Example: Link al repositorio"
                    required={true}
                    ref="titleResource"
                    value={this.state.resource.TitleResource}
                />
                <InputText
                    label="Link Externo"
                    placeholder="Example: Conociendo el entorno"
                    required={true}
                    ref="externalLinkResource"
                    value={this.state.resource.ExternalLink}
                />

                <AutocompleteClass 
                    ref="classResource"
                    value={this.state.resource.Class_CourseID} 
                />
                <ButtonForm 
                    type={this.state.type}
                    onClick={this.handleClickButton.bind(this)}
                />
            </form>
        );
    }
}