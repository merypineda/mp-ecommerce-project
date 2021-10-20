import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import CartButton from './cartButton';
import ShopCart from './shopCart';
import ShopProduct from './shopProduct';
import ShopSearchBar from './shopSearchBar';


class Shop extends Component {
    constructor() {
        super()

        this.state = {
            showCart: true
        }
    }


    componentDidMount() {
        const headerLinks = [
            {
                _id: 0,
                title: 'Login',
                path: '/signin'
            }
        ]
        this.props.setHeaderLinks(headerLinks);
        this.props.fetchShopCategories()
        // filter products with links
        this.props.fetchShopProducts();

    }

    shouldComponentUpdate(nextProps) {
        if(this.props != nextProps ) {
            this.props.setNavbarLinks(nextProps.categories, (_id) => this.props.filterProductsWithCategoryId(_id)); // to render the categories
        }
        return true
    }

    onSubmit = (fields) => {
        console.log(fields);
        this.props.filterProductWithQuery(fields)
    }

    handleAddToCart = () => {
        if(document.getElementById('shop-cart').classList.contains('cart-hidden')) {
            document.getElementById('shop-cart').classList.remove('cart-hidden');
        } else {
            document.getElementById('shop-cart').classList.add('cart-hidden');
        } // this adds and removes the cart
    }
    
    render() {
        return (
        <div className='shop'>
            <ShopSearchBar onSubmit={this.onSubmit} className='shop__search-bar' />
            <div className='shop__products'>
                {
                this.props.filteredProducts.map(product => {
                    return (
                        <ShopProduct {...product} key={product._id} />
                    )
                })
                }
            </div>
           { 
                this.state.showCart ? <ShopCart className='shop__cart'/> : ''
            }
            <CartButton onClick={this.handleAddToCart} className='shop__cart-button' icon='fas fa-cart-plus' />
            </div>
        );
    }
}
function mapStateToProps(state) {
    const { categories, filteredProducts } = state.shop; // to get it out of the categories
    return { 
        categories,
        filteredProducts
    }
}

Shop = connect(mapStateToProps, actions)(Shop)
export default Shop;