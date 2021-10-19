import React, { Component } from 'react';

function CartButton({className, icon}) {
    return (
        <div className={`${className} cart-button`}>
            <i className={icon}/>
                
        </div>
    )
}

function CartContent({className, products}) {
    let count = products.length; // to know the otal in the cart
    let productsJSX = products.map(product => <h1>{product}</h1>) // for the product in the cart
    return (
        <div className={`${className} cart-content`}>  
            <div className='cart-content__title'>
                Cart({count})
            </div>   
            <div className='cart-content__products'>
                {productsJSX}
            </div>  
            <CartFooter className='cart-content__footer' products={products} />
                
        </div>
    )
}

function CartFooter({className, products}) {
    const price =7.96
    return (
        <div className={`${className} cart-footer` }>
            <a className='cart-footer__checkout'>
                Checkout
            </a>
            <div className='cart-footer__subtotal'>
                Subtotal
                
            </div>
            <div className='cart-footer__price'>
                ${price}
                
            </div>
        </div>
    )
}

class ShopCart extends Component {
    render() {
        const { className } = this.props
        return (
            <div className={`${className} shop-cart`}>
                <CartButton className='shop-cart__toggle' icon='fas fa-times' />
                <CartContent className='shop-cart__content' products={[488, 888, 5656, 5656, 900, 4747, 4848,697, 757, 757, 757]}/>
            </div>
        );
    }
}

export default ShopCart