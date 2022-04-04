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
