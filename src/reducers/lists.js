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
        case 'DELETE_LIST':
            // refactor? also used in ADD_ITEM. I tried moving it outside the equation and it did not recognize state...maybe could add a helper function outside of the switch?
            const newList = state.filter(list => list.id !== action.id)
            return newList
        default:
            return state
    }
}
