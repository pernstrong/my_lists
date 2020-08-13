import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { deleteList } from '../../actions'
import { useHistory } from "react-router-dom";


import ListItemsContainer from '../ListItemsContainer/ListItemsContainer'
import ListItemForm from '../ListItemForm/ListItemForm'


const ListView = ({ lists, title, deleteList }) => {
    const history = useHistory()
    const [ list, updateList ] = useState('')
    console.log(lists, title, deleteList)

    // find list from redux store and store locally
    useEffect(() => {
        const current = lists.find(list => list.title === title)
        updateList(current)
    }, [lists, title])

    const handleClick = () => {
        window.confirm('Are you sure you want to delete') && deleteList(list.id) && handleRoute()
    }

    const handleRoute = () => {
        history.push('/')
    }

    return (
        <section className="list-view">
            <h3>{title}</h3>
            {list.items && !list.items.length && <p>Add an item to see it here!</p>}
            {list.items && <ListItemsContainer items={list.items} />}
            <ListItemForm id={list.id}/>
            <button onClick={handleClick}>Delete List</button>
        </section>
    )
}


const mapStateToProps = state => ({
    lists: state.lists
})

const mapDispatchToProps = dispatch => ({
    deleteList: id => dispatch(deleteList(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListView)