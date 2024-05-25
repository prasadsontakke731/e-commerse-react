import React, { useState } from 'react'
// import icon1 from "/images/shape-img/icon/01.png"
import icon1 from "/images/shape-img/icon/01.png"
import Rating from '../components/Rating';
import { Link } from 'react-router-dom';

const title = "Our Products";


const ProductData = [
    {
        imgUrl: 'src/Assets/images/categoryTab/01.jpg',
        cate: 'Shoes',
        title: 'Nike Premier X',
        author: 'Assets/images/course/author/01.jpg',
        brand: 'Nike',
        price: '$199.00',
        id: 1,
    },
    {
        imgUrl: 'src/Assets/images/categoryTab/02.jpg',
        cate: 'Bags',
        title: 'Asthetic Bags',
        author: 'Assets/images/course/author/02.jpg',
        brand: 'D&J Bags',
        price: '$199.00',
        id: 2,
    },
    {
        imgUrl: 'src/Assets/images/categoryTab/03.jpg',
        cate: 'Phones',
        title: 'iPhone 12',
        author: 'src/Assets/images/categoryTab/brand/apple.png',
        brand: 'Apple',
        price: '$199.00',
        id: 3,
    },
    {
        imgUrl: 'src/Assets/images/categoryTab/04.jpg',
        cate: 'Bags',
        title: 'Hiking Bag 15 Nh100',
        author: 'Assets/images/course/author/04.jpg',
        brand: 'Gucci',
        price: '$199.00',
        id: 4,
    },
    {
        imgUrl: 'src/Assets/images/categoryTab/05.jpg',
        cate: 'Shoes',
        title: 'Outdoor Sports Shoes',
        author: 'Assets/images/course/author/05.jpg',
        brand: 'Nike',
        price: '$199.00',
        id: 5,
    },
    {
        imgUrl: 'src/Assets/images/categoryTab/06.jpg',
        cate: 'Beauty',
        title: 'COSRX Snail Mucin',
        author: 'Assets/images/course/author/06.jpg',
        brand: 'Zaara',
        price: '$199.00',
        id: 6,
    },
    {
        imgUrl: 'src/Assets/images/categoryTab/07.jpg',
        cate: 'Bags',
        title: 'Look Less Chanel Bag ',
        author: 'Assets/images/course/author/01.jpg',
        brand: 'Gucci',
        price: '$199.00',
        id: 7,
    },
    {
        imgUrl: 'src/Assets/images/categoryTab/08.jpg',
        cate: 'Shoes',
        title: 'Casual Sneakers',
        author: 'Assets/images/course/author/02.jpg',
        brand: 'Bata',
        price: '$199.00',
        id: 8,
    },
]
const CategoryShowCase = () => {
    const [items, setItems] = useState(ProductData)

    const filterItem = (catItem) => {
        const updateItems = ProductData.filter((curElem) => {
            return curElem.cate === catItem
        })
        setItems(updateItems)
    }
    return (
        <div className='course-section style-3 padding-tb'>
            {/* shapes */}
            <div className='course-shape one'>
                <img src={icon1} alt="" />
            </div>
            <div className='course-shape two'>
                <img src={icon1} alt="" />
            </div>
            {/* main section */}
            <div className="container">
                {/* section header */}
                <div className="section-header">
                    <h2 className='title'>{title}</h2>
                    <div className='course-filter-group'>
                        <ul className='lab-ul'>
                            <li onClick={() => setItems(ProductData)}>All</li>
                            <li onClick={() => filterItem("Shoes")}>Shoes</li>
                            <li onClick={() => filterItem("Bags")}>Bags</li>
                            <li onClick={() => filterItem("Phones")}>Phones</li>
                            <li onClick={() => filterItem("Beauty")}>Beauty</li>
                        </ul>
                    </div>
                </div>
                {/* section body */}
                <div className="section-wrapper">
                    <div className='row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3  row-cols-md-2 row-cols-1 course-filter'>
                        {
                            items.map((product) => <div key={product.id} className='col'>
                                <div className="course-item style-4">
                                    <div className="course-inner">
                                        <div className="course-thumb">
                                            <img src={product.imgUrl} alt="" />
                                            <div className="course-category">
                                                <div className="course-cate">
                                                    <a href="">{product.cate}</a>
                                                </div>
                                                <div className="course-reiew">
                                                    <Rating />
                                                </div>
                                            </div>
                                        </div>
                                        {/* content */}
                                        <div className="course-content">
                                            <Link to={`/shop/${product.id}`}><h5>{product.title}</h5></Link>
                                            <div className="course-footer">
                                                <div className="course-author">

                                                    <Link to="/" className='ca-name'>{product.brand}</Link>
                                                </div>
                                                <div className="course-price">
                                                    {product.price}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryShowCase