import axios from "axios";
import {addNewPostActionCreator, getUserPostsActionCreator} from "../ProfilePageRedux/profilePageReducer";
import {getAllPostsActionCreator} from "./newsPageReducer";

export const fetchUserPosts = (userIdParam) => {
    return async (dispatch) => {
        const response = await axios.get(`/api/userPosts?id=${userIdParam}`)
        dispatch(getUserPostsActionCreator(response.data))
    }
}

export const fetchNewUserPost = (data) => {
    return async (dispatch) => {
        const response = await axios.post('/api/newPost', data)
        dispatch(addNewPostActionCreator(data))
    }
}

export const fetchAllPosts = () => {
    return async (dispatch) => {
        const response = await axios.get('/api/posts')
        dispatch(getAllPostsActionCreator(response.data))
    }
}