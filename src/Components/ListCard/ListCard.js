import React from 'react'
import { Link } from 'react-router-dom'


const ListCard = ({ title }) => {
console.log(title)
    return (
        <section className="list-card">
            <Link to={`/list/${title}`}>
                <p>{title}</p>
                {/* <button>Go to List!</button> */}
            </Link>
            <button>X</button>
        </section>
    )
}

export default ListCard