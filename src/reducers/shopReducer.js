import {
    SET_SHOP_CATEGORIES,
    SET_SHOP_PRODUCTS,
    FILTER_PRODUCTS_WITH_CATEGORY_ID
 
} from '../actions/types';

const INITIAL_STATE = {
    categories: [],
    productSelected: [],
    products: []
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_SHOP_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        case SET_SHOP_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case  FILTER_PRODUCTS_WITH_CATEGORY_ID:
            console.log(action.payload);
            
            return {
                ...state,
                // productsSelected: action.payload
            }

        default: return state;
    }
}