import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL
} from './types';

export function setPurchaseDetails(_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function fetchUserPurchases() { 
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                Amount: 19.40,
                orderNumber: 'A00445566',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 west state street'
                }

            },
            {
                _id: 1,
                Amount: 9.40,
                orderNumber: 'A00445003',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Andrew Hudgens',
                    shippingAddress: '124 west state street'
                }

            },
            {
                _id: 2,
                Amount: 1.40,
                orderNumber: 'A00445577',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Lily Hudgens',
                    shippingAddress: '134 west street'
                }

            },
            {
                _id: 3,
                Amount: 8.40,
                orderNumber: 'A00445786',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Tiffany Loan',
                    shippingAddress: '14 west state street'
                }

            },
            {
                _id: 4,
                Amount: 6.44,
                orderNumber: 'A00444566',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Steph Will',
                    shippingAddress: '12 state street'
                }

            },
            {
                _id: 5,
                Amount: 4.40,
                orderNumber: 'A08945566',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jim Joe',
                    shippingAddress: '1234 Brooklyn street'
                }

            },
            {
                _id: 6,
                Amount: 7.55,
                orderNumber: 'A004fd566',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Nill',
                    shippingAddress: '14 west state street'
                }

            },
            {
                _id: 7,
                Amount: 8.20,
                orderNumber: 'A012345566',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Smith',
                    shippingAddress: '148 west state street'
                }

            },
   
        ]
    })
}