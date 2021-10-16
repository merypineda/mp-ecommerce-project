import {
    SET_USER_PURCHASES
} from './types';

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                title: 'purchase 1',
                Amount: 8.02
            },
            {
                _id: 2,
                title: 'purchase 2',
                Amount: 19.40
            }
        ]
    })
}