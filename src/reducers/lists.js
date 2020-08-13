export const lists = (state = [], action) => {
    const currentList = state.find(list => list.id === action.id)
    const listsWithoutCurrent = state.filter(list => list.id !== action.id)


    switch (action.type) {
        case 'ADD_LIST':
            return [...state, { id: Date.now(), title: action.list.title, items: action.list.items }]
        case 'ADD_ITEM':
            // const list = state.find(list => list.id === action.id)
            currentList.items.push(action.item)
            // const updatedList = state.filter(list => list.id !== action.id)
            return [...listsWithoutCurrent, currentList]
        case 'DELETE_LIST':
            // refactor? also used in ADD_ITEM. I tried moving it outside the equation and it did not recognize state...maybe could add a helper function outside of the switch?
            // const newList = state.filter(list => list.id !== action.id)
            return listsWithoutCurrent
        case 'UPDATE_ITEM':
            currentList.items = currentList.items.map(item => {
                console.log(item.id, action.item.id)
                if (item.id === action.item.id) {
                    console.log(item.isComplete)
                    item.isComplete = !item.isComplete
                    console.log(item.isComplete)
                }
                return item
            })
            return [...listsWithoutCurrent, currentList]


            // refactor this as well?
            // const list2 = state.find(list => list.id === action.id)
            // const updatedItems = list2.items.map(item => {
            //     if (item === action.item) {
            //         item.isComplete = !item.isComplete
            //     }
            //     return item
            // })
            // list2.items = updatedItems
            // // no duplicates
            // const updatedAllLists = state.map(list => {
            //     if (list.id === action.id) {
            //         return list2
            //     }
            //     return list
            // })
            // return updatedAllLists
        default:
            return state
    }
}
