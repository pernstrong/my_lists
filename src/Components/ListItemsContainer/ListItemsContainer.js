import React from 'react'
import ListItem from '../ListItem/ListItem'


const ListItemsContainer = ({ items }) => {

  console.log(items)
    const itemsToDisplay = items.map(item => <ListItem item={item} />)


    return (
        <ul>
            {itemsToDisplay}
        </ul>
    )
}

export default ListItemsContainer

