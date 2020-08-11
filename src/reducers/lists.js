export const lists = (state = [], action) => {
    switch (action.type) {
        case 'ADD_LIST':
            return [...state, { id: Date.now(), list: action.list }]
        default:
            return state
    }
}