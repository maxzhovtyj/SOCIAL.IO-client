let profilePageDefaultState = {
    posts: [
        {
            id: 0,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            name: 'Max Zhovtaniuk',
            likes: 10
        },
        {
            id: 1,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            name: 'Max Zhovtaniuk',
            likes: 15
        },
        {id: 2, text: "Fuck it", name: "Max Zhovtaniuk", likes: 5},
        {id: 3, text: "yo", name: "Max Zhovtaniuk", likes: 0}
    ]
}

const ADD_POST = 'ADD_POST'

export const profilePageReducer = (state = profilePageDefaultState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {...state, posts: [...state.posts, action.body]}
        }
        default:
            return state
    }
}

export const addPostActionCreator = (body) => ({type: ADD_POST, body})