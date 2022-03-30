let newsPageDefaultState = {
    posts: []
}

const GET_ALL_POSTS = "GET_ALL_POSTS"

export const newsPageReducer = (state = newsPageDefaultState, action) => {
    switch (action.type) {
        case GET_ALL_POSTS: {
            return {...state, posts: [...action.payload]}
        }
        default:
            return state
    }
}

export const getAllPostsActionCreator = (payload) => ({type: GET_ALL_POSTS, payload})
