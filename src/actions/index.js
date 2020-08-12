export const addList = list => ({
    type: 'ADD_LIST',
    list
})

export const addItem = (item, id) => ({
    type: 'ADD_ITEM',
    item,
    id
})