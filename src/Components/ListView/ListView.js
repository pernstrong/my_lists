import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import ListItemsContainer from '../ListItemsContainer/ListItemsContainer'

const ListView = ({ lists, title }) => {
    const [ list, updateList ] = useState('')
    // const [ items, updateItems ] = useState('')

    // find list from redux store and store locally
    useEffect(() => {
        const current = lists.find(list => list.title === title)
        updateList(current)
    }, [lists, title])

    // create list items
    // let itemsToDisplay;
    
    // useEffect(() => {
    //     itemsToDisplay = list.items.map(item => <ListItem item={item} />)
    // }, [list])
    

    return (
        <section className="list-view">
            {title}
            {list.items && <ListItemsContainer items={list.items} />}
        </section>
    )
}

const mapStateToProps = state => ({
    lists: state.lists
})

export default connect(mapStateToProps)(ListView)