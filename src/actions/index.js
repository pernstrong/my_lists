export const addList = list => ({
    type: 'ADD_LIST',
    list
})

export const addItem = (item, id) => ({
    type: 'ADD_ITEM',
    item,
    id
})

export const deleteList = id => ({
    type: 'DELETE_LIST',
    id
})