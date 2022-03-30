import axios from "axios";

let profilePageDefaultState = {
    userInfo: {},
    userPosts: []
}

const ADD_NEW_POST = "ADD_POST"
const GET_USER_POSTS = "GET_USER_POSTS"
const GET_USER_INFO = "GET_USER_INFO"

export const profilePageReducer = (state = profilePageDefaultState, action) => {
    switch (action.type) {
        case ADD_NEW_POST: {
            return {...state, userPosts: [...state.userPosts, action.payload]}
        }
        case GET_USER_POSTS: {
            return {...state, userPosts: [...action.payload]}
        }
        case GET_USER_INFO: {
            return {...state, userInfo: {...action.payload}}
        }
        default:
            return state
    }
}

export const addNewPostActionCreator = (payload) => ({type: ADD_NEW_POST, payload})
export const getUserPostsActionCreator = (payload) => ({type: GET_USER_POSTS, payload})
export const getUserInfoActionCreator = (payload) => ({type: GET_USER_INFO, payload})

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