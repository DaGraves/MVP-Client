import {REDIRECT_TO_NEW_PAGE} from '../actions/redirect';

const initialState = {
    redirect: false
}

export default function reducer(state = initialState, action) {
    if(action.type === REDIRECT_TO_NEW_PAGE) {
        return Object.assign({}, state, {
            redirect: action.redirect
        })
    }
    return state;
}
