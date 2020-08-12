import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

const ListView = ({ lists, title }) => {
    const [ list, updateList ] = useState('')

    useEffect(() => {
        const current = lists.find(list => list.title === title)
        console.log(current.title)
        updateList(current)
    }, [lists, title])
    

    return (
        <section className="list-view">
            {title}

        </section>
    )
}

const mapStateToProps = state => ({
    lists: state.lists
})

export default connect(mapStateToProps)(ListView)