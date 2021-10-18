import React, { Component } from 'react';

class Quantity extends Component {
    render() {
        const { className, quantity } = this.props // to get it out of the component
        return (
            <div className={`${className} quantity`}>
                <div className='quantity_count'>
                    {quantity}
                </div>
                <div className='quantity_plus'>
                    <i className='fas fa-plus'></i>
                 </div>
                 <div className='quantity_minus'>
                 <i className='fas fa-minus'></i>
                </div>
            </div>
        );
    }
}

export default Quantity