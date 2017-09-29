import React from 'react';

export default class PromoItem extends React.Component{

    render(){
        return(
            <div className="promo-item center">
                <div className="promo-item__icon">
                    <i className="large material-icons teal-text text-darken-4">{this.props.icon}</i>
                </div>
                <div className="promo-item__title">
                    {this.props.title}
                </div>
                <div className="promo-item__description light">
                    {this.props.description}
                </div>
            </div>
        )
    }
}