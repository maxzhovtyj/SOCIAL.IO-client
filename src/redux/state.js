let state = {
    dialogsPage: {
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
        ]
    },
    profilePage: {
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
}

export function addPost(postMessage) {
    let newPost = {
        id: 4,
        text: postMessage,
        name: 'Max Zhovtaniuk',
        likes: 0
    }
}

export default state