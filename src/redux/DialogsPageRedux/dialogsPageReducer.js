let dialogsPageDefaultState = {
    dialogsList: [
        {id: '1', name: 'Max'},
        {id: '2', name: 'Vlad'},
        {id: '3', name: 'Andriy'},
        {id: '4', name: 'Vadim'},
        {id: '5', name: 'Dima'},
        {id: '6', name: 'Sofia'},
        {id: '7', name: 'Sofia'},
        {id: '8', name: 'Sofia'},
        {id: '9', name: 'Sofia'},
        {id: '10', name: 'Sofia'},
        {id: '11', name: 'Sofia'},
        {id: '12', name: 'Sofia'},
        {id: '13', name: 'Sofia'},
        {id: '14', name: 'Sofia'}],
    dialogContent: [
        {id: 1, messageContent: "Hi mate"},
        {id: 2, messageContent: "What's up?"},
        {id: 3, messageContent: "What the weather like today"},
        {id: 4, messageContent: "I'm cool"},
        {id: 5, messageContent: "ReactJS is the best"},
        {id: 6, messageContent: "React Redux ty znat' budesh kruto"},
    ],
}

const SEND_MESSAGE = 'SEND_MESSAGE'
const GET_USERS = 'GET_USERS'

export const dialogsPageReducer = (state = dialogsPageDefaultState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            return {...state, dialogContent: [...state.dialogContent, action.body]}
        case GET_USERS:
            return {}
        default:
            return state;
    }
}

export const sendMessageActionCreator = (body) => ({type: SEND_MESSAGE, body})

