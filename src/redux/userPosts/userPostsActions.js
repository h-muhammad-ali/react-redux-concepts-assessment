import { FETCH_USERPOSTS_REQUEST, FETCH_USERPOSTS_SUCCESS, FETCH_USERPOSTS_FAILURE } from './userPostsTypes';
import axios from 'axios';

export const fetchUserPostsRequest = () => {
    return {
        type: FETCH_USERPOSTS_REQUEST,
    }
}

export const fetchUserPostsSuccess = userPosts => {
    return {
        type: FETCH_USERPOSTS_SUCCESS,
        payload: userPosts,
    }
}
export const fetchUserPostsFailure = error => {
    return {
        type: FETCH_USERPOSTS_FAILURE,
        payload: error,
    }
}

export const fetchUserPosts = () => {
    return (dispatch) => {
        dispatch(fetchUserPostsRequest())
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const userPosts = response.data;
                dispatch(fetchUserPostsSuccess(userPosts));
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchUserPostsFailure(errorMsg));
            })
    }
}