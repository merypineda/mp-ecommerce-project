import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';


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
            this.props.setNavbarLinks(nextProps.categories, (_id) => this.props.filterProductsWithCategoryId()); // to render the categories
        }
        return true
    }
    
    render() {
        return (
            <div className='shop'>

                shop.....
                {/* shop search bar */}
                {/* shop product */}
                {/* shop cart button */}
                
                
            </div>
        );
    }
}
function mapStateToProps(state) {
    const { categories } = state.shop; // to get it out of the categories
    return { categories }
}

Shop = connect(mapStateToProps, actions)(Shop)
export default Shop;