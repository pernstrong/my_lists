export const lists = (state = [], action) => {
    switch (action.type) {
        case 'ADD_LIST':
            return [...state, { id: Date.now(), title: action.list.title, items: action.list.items }]
        case 'ADD_ITEM':
            console.log(action.item, action.id)
            const list = state.find(list => list.id === action.id)
            list.items.push(action.item)
            const updatedList = state.filter(list => list.id !== action.id)
            return [...updatedList, list]
        default:
            return state
    }
}
