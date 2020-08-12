export const lists = (state = [], action) => {
    switch (action.type) {
        case 'ADD_LIST':
            return [...state, { id: Date.now(), title: action.list.title, items: action.list.items }]
        default:
            return state
    }
}