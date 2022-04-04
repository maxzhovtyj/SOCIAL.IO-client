import axios from "axios";
import {
    getFriendsActionCreator,
    getFriendshipRequestsActionCreator,
    sendFriendshipRequestActionCreator
} from "./friendsPageReducer";

export const fetchGetFriends = (userId) => {
    return async (dispatch) => {
        const response = await axios.get(`/api/friends?id=${userId}`)
        dispatch(getFriendsActionCreator(response.data))
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
        const response = await axios.post(`/api/sendFriendshipRequest?id=${data.requestId}`, {userId: data.userId})
        console.log(response)
        dispatch(sendFriendshipRequestActionCreator())
    }
}

export const fetchAcceptFriendshipRequest = (data) => {
    return async (dispatch) => {
        const response = await axios.post(`/api/acceptFriendshipRequest`, data)
        console.log(response)
        dispatch(sendFriendshipRequestActionCreator())
    }
}