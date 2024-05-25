/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = ({ productPerPage, totalProducts, paginate, activePage }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <ul className='default-pagination lab-ul'>
            <li>
                <Link href="#" onClick={() => {
                    if (activePage < pageNumbers.length) {
                        paginate(activePage - 1)
                    }
                }}>
                    <i className='icofont-rounded-left'></i>
                </Link>
            </li>
            {
                pageNumbers.map((number) => (
                    <li key={number} className={`page-item ${number === activePage ? "bg-warning" : ""}`}>
                        <button onClick={() => paginate(number)} className='bg-transparent'>{number}</button>
                    </li>
                ))
            }
            <li>
                <Link href="#" onClick={() => {
                    if (activePage < pageNumbers.length) {
                        paginate(activePage + 1)
                    }
                }}>
                    <i className='icofont-rounded-right'></i>
                </Link>
            </li>
        </ul>
    )
}

export default Pagination