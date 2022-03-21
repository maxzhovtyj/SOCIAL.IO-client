let dialogsPageDefaultState = {
    dialogsList: [
        {id: '1', name: 'Max'},
        {id: '2', name: 'Vlad'},
        {id: '3', name: 'Andriy'},
        {id: '4', name: 'Vadim'},
        {id: '5', name: 'Dima'},
        {id: '6', name: 'Sofia'}],
    dialogContent: [
        {id: 1, messageContent: "Hi mate"},
        {id: 2, messageContent: "What's up?"},
        {id: 3, messageContent: "What the weather like today"},
        {id: 4, messageContent: "I'm cool"},
        {id: 5, messageContent: "ReactJS is the best"},
        {id: 6, messageContent: "React Redux ty znat' budesh kruto"},
    ],
}

export const dialogsPageReducer = (state = dialogsPageDefaultState, action) => {
    switch (action.type) {
        case "ADD_MESSAGE":
            return {...state, dialogContent: [...state.dialogContent, action.newDialogMessage]}
        default:
            return state;
    }
}

