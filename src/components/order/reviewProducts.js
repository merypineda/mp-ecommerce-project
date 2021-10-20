import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewProduct from './reviewProduct';

class ReviewProducts extends Component {
    render() {
        const { className } = this.props;
        return (
            <div className={`${className} review-products`}>
                {
                    this.props.cartProducts.map(cartProduct => {
                    return <ReviewProduct key={cartProduct._id} 
                            {...cartProduct}
                    />
                    })
                }
                
            </div>
        );
    }
}
function mapStateToprops(state) {
    const { cartProducts } = state.user;
    return { cartProducts }
}

ReviewProducts  = connect(mapStateToprops)(ReviewProducts)

export default ReviewProducts;
