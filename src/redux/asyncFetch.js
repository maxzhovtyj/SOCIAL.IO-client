import axios from "axios";
import {addNewPostActionCreator, getUserInfoActionCreator, getUserPostsActionCreator} from "./profilePageReducer";
import {getAllPostsActionCreator} from "./newsPageReducer";
// todo error handler
export const fetchUserInfo = (userIdParam) => {
    return async (dispatch) => {
        const response = await axios.get(`/auth/userInfo?id=${userIdParam}`)
        console.log(response.data)
        dispatch(getUserInfoActionCreator(response.data))
    }
}

export const fetchUserPosts = (userIdParam) => {
    return async (dispatch) => {
        const response = await axios.get(`/auth/userPosts?id=${userIdParam}`)
        console.log(response.data)
        dispatch(getUserPostsActionCreator(response.data))
    }
}

export const fetchNewUserPost = (data) => {
    return async (dispatch) => {
        const response = await axios.post('/auth/newPost', data)
        console.log(response.data)
        dispatch(addNewPostActionCreator(data))
    }
}

export const fetchAllPosts = () => {
    return async (dispatch) => {
        const response = await axios.get('/auth/posts')
        dispatch(getAllPostsActionCreator(response.data))
    }
}