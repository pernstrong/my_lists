import React from 'react'
import './ListItem.css'
// update item
// connect to redux
// here or items container?

const ListItem = ({ item, updateItem, listId }) => {

    const handleClick = () => {
        updateItem(item, listId)
        // styleCompleted()
    }

    const styleCompleted = () => {
        return item.isComplete ? 'complete' : 'incomplete'
    }

    return (
        <li onClick={handleClick} className={styleCompleted()}>{item.text}</li>
    )
}

export default ListItem