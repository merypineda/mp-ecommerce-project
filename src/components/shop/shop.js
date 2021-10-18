import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import ShopProduct from './shopProduct';
import ShopSearchBar from './shopSearchBar';


class Shop extends Component {
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
    
    render() {
        return (
        <div className='shop'>
            <ShopSearchBar onSubmit={this.onSubmit} className='shop__serach-bar' />
            <div className='shop__products'>
                {
                this.props.filteredProducts.map(product => {
                    return (
                        <ShopProduct {...product} key={product._id} />
                    )
                })
                }
            </div>
            {/* shop cart button */}
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