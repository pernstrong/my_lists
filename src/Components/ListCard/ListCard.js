import React from 'react'
import './ListCard.css'
import { Link } from 'react-router-dom'


const ListCard = ({ title }) => {
    
    return (
        <section className="list-card">
            <Link to={`/list/${title}`} className='link'>
                <p>{title}</p>
            </Link>
        </section>
    )
}

export default ListCard