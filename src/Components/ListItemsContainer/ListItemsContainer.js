import React from 'react'
import './ListItemsContainer.css'
import ListItem from '../ListItem/ListItem'
import { lists } from '../../reducers/lists'


const ListItemsContainer = ({ items, updateItem, listId }) => {

    const itemsToDisplay = items.map(item => <ListItem item={item} updateItem={updateItem} listId={listId} key={item.id} />)

    return (
        <ul>
            {itemsToDisplay}
        </ul>
    )
}

export default ListItemsContainer

