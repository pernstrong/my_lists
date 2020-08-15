export const lists = (state = [], action) => {
    const currentList = state.find(list => list.id === action.id)
    const listsWithoutCurrent = state.filter(list => list.id !== action.id)


    switch (action.type) {
        case 'ADD_LIST':
            return [...state, { id: Date.now(), title: action.list.title, items: action.list.items }]
        case 'ADD_ITEM':
            currentList.items.push(action.item)
            return [...listsWithoutCurrent, currentList]
        case 'DELETE_LIST':
            return listsWithoutCurrent
        case 'UPDATE_ITEM':
            currentList.items = currentList.items.map(item => {
                if (item.id === action.item.id) {
                    item.isComplete = !item.isComplete
                }
                return item
            })
            return [...listsWithoutCurrent, currentList]
        default:
            return state
    }
}
