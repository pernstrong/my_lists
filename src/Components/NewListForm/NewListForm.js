import React, { useState } from 'react'
import { addList } from '../../actions'
import { connect } from 'react-redux'

const NewListForm = (props) => {

    const [ title, updateTitle ] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        const list = createList()
        props.addList(list)
        clearInputs()
    }

    const createList = () => {
        return ({
            title,
            items: []
        })
    }

    const clearInputs = () => {
        updateTitle('')
    }

    return (
        <form className="new-list-form">
            <input 
                type="text"
                name="title"
                value={title}
                placeholder="list title"
                onChange={e => updateTitle(e.target.value)}
            />
            <button onClick={handleClick}>Add List</button>
        </form>
    )
}

const mapDispatchToProps = dispatch => ({
    addList: list => dispatch(addList(list))
})

export default connect(null, mapDispatchToProps)(NewListForm)