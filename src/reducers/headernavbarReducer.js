import {
    SET_HEADER_LINKS,
    SET_NAVBAR_LINKS
} from '../actions/types'
// the reducer component 

const INITIAL_STATE = {
    headerLinks: [
        {
            title: 'accoytytyunt'
        },
        {
            title: 'purchtytytase'
        }
    ],
    navbarLinks: [
        {
            title: 'account'
        },
        {
            title: 'purchase'
        }
    ]
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_HEADER_LINKS:
            return {
                ...state,
                headerLinks: action.payload
            }

        case SET_NAVBAR_LINKS:
            return {
                ...state,
                navbarLinks: action.payload
            }
        default: return state;
    }
}