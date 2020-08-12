import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import ListItemsContainer from '../ListItemsContainer/ListItemsContainer'
import ListItemForm from '../ListItemForm/ListItemForm'


const ListView = ({ lists, title }) => {
    const [ list, updateList ] = useState('')

    // find list from redux store and store locally
    useEffect(() => {
        const current = lists.find(list => list.title === title)
        updateList(current)
    }, [lists, title])

    return (
        <section className="list-view">
            <h3>{title}</h3>
            {list.items && !list.items.length && <p>Add an item to see it here!</p>}
            {list.items && <ListItemsContainer items={list.items} />}
            <ListItemForm id={list.id}/>
        </section>
    )
}


const mapStateToProps = state => ({
    lists: state.lists
})

export default connect(mapStateToProps)(ListView)