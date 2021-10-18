import React, { Component } from 'react';

class GreenPriceTag extends Component {
    render() {
        const { className, title } = this.props // to get it out of the component
        return (
            <div className={`${className} green-price-tag`}>
                ${title} 
            </div> // the dollar sign adds it to the application...
        );
    }
}

export default GreenPriceTag