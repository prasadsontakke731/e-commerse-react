import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Data from "../products.json"
import ProductCards from './ProductCards'
import Pagination from './Pagination'
import Search from './Search'
import ShopCategory from './ShopCategory'

const showResults = "Showing 01 - 12 of 139 Results"

const Shop = () => {
    const [gridList, setGridList] = useState(true)
    const [products, setProducts] = useState(Data)

    // pegination logic
    const [currentPage, setCurrentPage] = useState(1)

    const productPerPage = 4

    const indexOfLastProduct = currentPage * productPerPage

    const indexOfFirstProduct = indexOfLastProduct - productPerPage

    const currentProduct = products.slice(indexOfFirstProduct, indexOfLastProduct)

    //functio to change the current page

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    // filter products based on category
    const [selectedCategory, setSelectedCategory] = useState("ALL")
    const menuItem = [...new Set(Data.map((Val) => Val.category))]

    const filterItem = (curcat) => {
        const newItem = Data.filter((newVal) => {
            return newVal.category === curcat
        })
        setSelectedCategory(curcat)
        setProducts(newItem)
    }

    return (
        <div>
            <PageHeader title="Our shop page" currPage="shop" />
            {/* shop page */}
            <div className="shop-page padding-tb">
                <div className="container">
                    <div className="row justify-content-center">
                        {/* left side */}
                        <div className="col-lg-8 col-12">
                            <article>
                                {/* layout and title */}
                                <div className="shop-title d-flex flex-wrap justify-content-between">
                                    <p>{showResults}</p>
                                    <div className={`product-view-mode ${gridList ? "gridActive" : "listActive"}`}>
                                        <a className='grid' onClick={() => setGridList(!gridList)}>
                                            <i className='icofont-ghost'></i>
                                        </a>
                                        <a className='list' onClick={() => setGridList(!gridList)}>
                                            <i className='icofont-listine-dots'></i>
                                        </a>
                                    </div>

                                </div>
                                {/* products cards */}
                                <div>
                                    <ProductCards gridList={gridList} products={currentProduct} />
                                </div>
                                <Pagination productPerPage={productPerPage} totalProducts={products.length} paginate={paginate} activePage={currentPage} />
                            </article>
                        </div>
                        {/* right side */}
                        <div className="col-lg-4 col-12">
                            <aside>
                                <Search products={products} gridList={gridList} />
                                <ShopCategory filterItem={filterItem} setItem={setProducts} menuItem={menuItem} setProducts={setProducts} selectedCategory={selectedCategory} />
                            </aside>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Shop