import React from 'react'
import { connect } from 'react-redux'
import ListCard from '../ListCard/ListCard'

const ListsContainer = ({ lists }) => {
    console.log(lists)
    const listsToDisplay = lists.map(list => <ListCard {...list} key={list.id}/>)

    return (
        <section className="lists-container">
            {!lists.length ? <p>Add a list to see it here!</p> : ''}
            {listsToDisplay}
        </section>
    )
}

const mapStateToProps = state => ({
    lists: state.lists
})

export default connect(mapStateToProps)(ListsContainer)