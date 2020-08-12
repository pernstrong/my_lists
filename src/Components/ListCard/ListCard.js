import React from 'react'
import './ListCard.css'
import { Link } from 'react-router-dom'


const ListCard = ({ title }) => {
console.log(title)
    return (
        <section className="list-card">
            <Link to={`/list/${title}`} className='link'>
                <p>{title}</p>
                {/* <button>Go to List!</button> */}
            </Link>
            {/* <button>X</button> */}
        </section>
    )
}

export default ListCard