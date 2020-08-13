import React, { useState } from 'react'
import { addItem } from '../../actions'
import { connect } from 'react-redux'


const ListItemForm = ({ addItem, id }) => {
    const [ item, updateItem ] = useState('')

    const handleClick = e => {
        e.preventDefault()
        const newItem = {text: item, isComplete: false, id: Date.now()}        
        addItem(newItem, id)
        clearInputs()
    }

    const clearInputs = () => {
        updateItem('')
    }

    return (
        <form className="list-item-form">
            <input 
                type="text"
                name="item"
                value={item}
                placeholder="add new item"
                onChange={e => updateItem(e.target.value)}
            />
            <button onClick={handleClick}>Submit</button>
        </form>
    )
}


const mapDispatchToProps = dispatch => ({
    addItem: (item, id) => dispatch(addItem(item, id))
})

export default connect(null, mapDispatchToProps)(ListItemForm)