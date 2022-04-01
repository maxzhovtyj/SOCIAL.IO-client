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

export const fetchAllUsersInfo = () => {
    return async (dispatch) => {
        const response = await axios.get('/api/users')
        dispatch(getAllUsersInfoActionCreator(response.data))
    }
}

export const fetchGetFriends = (userId) => {
    return async (dispatch) => {
        const response = await axios.get(`/api/friends?id=${userId}`)
        dispatch(getAllUsersInfoActionCreator(response.data))
    }
}

export const fetchGetFriendshipRequests = (userId) => {
    return async (dispatch) => {
        const response = await axios.get(`/api/friendshipRequests?id=${userId}`)
        dispatch(getFriendshipRequestsActionCreator(response.data))
    }
}

export const fetchSendFriendshipRequest = (data) => {
    return async (dispatch) => {
        const response = await axios.post(`/api/users?id=${data.requestId}`, data.myId)
        dispatch(sendFriendshipRequestActionCreator())
    }
}

export const fetchAcceptFriendshipRequest = (data) => {
    return async (dispatch) => {
        const response = await axios.post(`/api/acceptFriendshipRequest`, data)
        dispatch(sendFriendshipRequestActionCreator())
    }
}