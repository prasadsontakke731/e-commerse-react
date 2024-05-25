import React, { useState } from 'react'
import productData from "../products.json"
import { Link } from 'react-router-dom'
import SelectCategory from '../components/SelectedCategary'


const title = (

    <h2>Search your one from <span>thousand</span> of Products</h2>
)

const desc = "We have the largest collection of products"


console.log(productData);


const Banner = () => {
    const [searchInput, setSearchInput] = useState("")
    const [filterProducts, setFilterProducts] = useState(productData)

    //search functionality
    const handleSearch = (e) => {
        const searchTerm = e.target.value
        setSearchInput(searchTerm)

        //filtering products based on the search
        const filtered = productData.filter((product) => product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))

        setFilterProducts(filtered)

    }
    return (
        <div className='banner-section style-4'>
            <div className="container">
                <div className="banner-content">
                    {
                        title
                    }
                    <form >
                        <SelectCategory select={"all"} />
                        <input type="text" name='search' id='search' placeholder='Search your product' value={searchInput} onChange={handleSearch} />
                        <button type='submit'><i className='icofont-search'></i></button>
                    </form>
                    <p>{desc}</p>
                    <ul className='lab-ul '>
                        {
                            searchInput && filterProducts.map((product, i) => <li key={i}>
                                <Link to={`/shop/${product.id}`}>{product.name}</Link>
                            </li>)
                        }
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Banner