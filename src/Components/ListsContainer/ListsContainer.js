import React from 'react'
import './ListsContainer.css'
import { connect } from 'react-redux'
import ListCard from '../ListCard/ListCard'

const ListsContainer = ({ lists }) => {
    const listsToDisplay = lists.map(list => <ListCard {...list} key={list.id}/>)

    return (
        <section className="lists-container">
            {!lists.length ? <p>Add a list to see it here!</p> : ''}
            {lists.length ? <h3 className="lists-header">Lists</h3> : ''}
            {listsToDisplay}
        </section>
    )
}

const mapStateToProps = state => ({
    lists: state.lists
})

export default connect(mapStateToProps)(ListsContainer)