import { combineReducers } from "redux";
import userReducer from './user/userReducer';
import userPostsReducer from './userPosts/userPostsReducer';

const rootReducer = combineReducers({
    user: userReducer,
    userPosts: userPostsReducer,
})

export default rootReducer;