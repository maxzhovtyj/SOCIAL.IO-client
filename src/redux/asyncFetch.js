import axios from "axios";
import {addNewPostActionCreator, getUserInfoActionCreator, getUserPostsActionCreator} from "./profilePageReducer";
import {getAllPostsActionCreator} from "./newsPageReducer";
import {
    getAllUsersInfoActionCreator,
    getFriendshipRequestsActionCreator,
    sendFriendshipRequestActionCreator
} from "./friendsPageReducer";
// todo error handler
export const fetchUserInfo = (userIdParam) => {
    return async (dispatch) => {
        const response = await axios.get(`/api/userInfo?id=${userIdParam}`)
        dispatch(getUserInfoActionCreator(response.data))
    }
}

export const fetchUserPosts = (userIdParam) => {
    return async (dispatch) => {
        const response = await axios.get(`/auth/userPosts?id=${userIdParam}`)
        dispatch(getUserPostsActionCreator(response.data))
    }
}

export const fetchNewUserPost = (data) => {
    return async (dispatch) => {
        const response = await axios.post('/auth/newPost', data)
        dispatch(addNewPostActionCreator(data))
    }
}

export const fetchAllPosts = () => {
    return async (dispatch) => {
        const response = await axios.get('/auth/posts')
        dispatch(getAllPostsActionCreator(response.data))
    }
}

export const fetchAllUsersInfo = () => {
    return async (dispatch) => {
        const response = await axios.get('/api/allUsersInfo')
        dispatch(getAllUsersInfoActionCreator(response.data))
    }
}

export const fetchGetFriendshipRequests = () => {
    return async (dispatch) => {
        const response = await axios.get('/api/friendshipRequests')
        dispatch(getFriendshipRequestsActionCreator(response.data))
    }
}

export const fetchSendFriendshipRequest = (data) => {
    return async (dispatch) => {
        const response = await axios.post(`/api/users?id=${data.requestId}`, data.myId)
        dispatch(sendFriendshipRequestActionCreator())
    }
}