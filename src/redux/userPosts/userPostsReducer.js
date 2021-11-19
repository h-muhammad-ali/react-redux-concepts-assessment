import { FETCH_USERPOSTS_REQUEST, FETCH_USERPOSTS_SUCCESS, FETCH_USERPOSTS_FAILURE } from './userPostsTypes';

const initialState = {
    loading: false,
    userPosts: [],
    error: '',
}

const userPostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERPOSTS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_USERPOSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                userPosts: action.payload,
                error: '',
            }
        case FETCH_USERPOSTS_FAILURE:
            return {
                ...state,
                loading: false,
                userPosts: [],
                error: action.payload,
            }

        default:
            return state;
    }
}

export default userPostsReducer;