let friendsPageDefaultState = {
    friends: [],
    friendsRequests: [],
    allUsers: []
}

const GET_FRIENDSHIP_REQUESTS = 'GET_FRIENDSHIP_REQUESTS'
const SEND_FRIENDSHIP_REQUEST = 'SEND_FRIENDSHIP_REQUEST'
const ACCEPT_FRIENDSHIP_REQUEST = 'ACCEPT_FRIENDSHIP_REQUEST'
const GET_ALL_USERS = 'GET_ALL_USERS'

export const friendsPageReducer = (state = friendsPageDefaultState, action) => {

    switch (action.type) {
        case GET_FRIENDSHIP_REQUESTS:
            return {...state, friendsRequests: [...action.payload]}
        case SEND_FRIENDSHIP_REQUEST:
            return {...state}
        case ACCEPT_FRIENDSHIP_REQUEST:
            return {...state, friends: [...state.friends, action.payload]}
        case GET_ALL_USERS:
            return {...state, allUsers: [...action.payload]}

        default:
            return state
    }
}

export const getFriendshipRequestsActionCreator = (payload) => ({type: GET_FRIENDSHIP_REQUESTS, payload})
export const sendFriendshipRequestActionCreator = (payload) => ({type: SEND_FRIENDSHIP_REQUEST, payload})
export const acceptFriendshipRequestActionCreator = (payload) => ({type: ACCEPT_FRIENDSHIP_REQUEST, payload})
export const getAllUsersInfoActionCreator = (payload) => ({type: GET_ALL_USERS, payload})
