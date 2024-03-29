import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL,
    SET_CART_PRODUCTS,
    ADD_CART_PRODUCT,
    AUTHENTICATE_USER
} from './types';
export function signIn({email, password}) {
    console.log({email, password});
    
    return ({
        type: AUTHENTICATE_USER,
        payload: {
            user: {
                _id: 0,
                name: 'Mery Pineda',
                address: '1234 i live here',
                cartProducts: []

            }
        }
    })
}
export function setPurchaseDetail(_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function addCartProduct(product) {
    return ({
        type: ADD_CART_PRODUCT,
        payload: product
    })
}


export function fetchCartProducts() {
    return ({ 
    type: SET_CART_PRODUCTS,
    payload: [
        {
           _id: 0,
           product: {
                _id: 0,
                title: 'JavaScript in the Browser',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                price: 1.99,
                belongsTo: [0, 1],
                imageUrl: 'http://via.placeholder.com/80x80' 
            },
            quantity: 2
        },
        {
            _id: 1,
            product: {
                _id: 1,
                title: 'Graph Database',
                description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
                price: 1.99,
                belongsTo: [0, 6],
                imageUrl: 'http://via.placeholder.com/80x80' 

            },
            quantity: 1
        }
    ]
  })
} 




export function fetchUserPurchases() { 
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 19.40,
                orderNumber: 'A00445566',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 west state street'
                }

            },
            {
                _id: 1,
                total: 9.40,
                orderNumber: 'A00445003',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Andrew Hudgens',
                    shippingAddress: '124 west state street'
                }

            },
            {
                _id: 2,
                total: 1.40,
                orderNumber: 'A00445577',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Lily Hudgens',
                    shippingAddress: '134 west street'
                }

            },
            {
                _id: 3,
                total: 8.40,
                orderNumber: 'A00445786',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Tiffany Loan',
                    shippingAddress: '14 west state street'
                }

            },
            {
                _id: 4,
                total: 6.44,
                orderNumber: 'A00444566',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Steph Will',
                    shippingAddress: '12 state street'
                }

            },
            {
                _id: 5,
                total: 4.40,
                orderNumber: 'A08945566',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jim Joe',
                    shippingAddress: '1234 Brooklyn street'
                }

            },
            {
                _id: 6,
                total: 7.55,
                orderNumber: 'A004fd566',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Nill',
                    shippingAddress: '14 west state street'
                }

            },
            {
                _id: 7,
                total: 8.20,
                orderNumber: 'A012345566',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Smith',
                    shippingAddress: '148 west state street'
                }

            },
   
        ]
    })
}