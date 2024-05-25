import React from 'react'
import Data from "../products.json"
const title = "All Categories";

const ShopCategory = ({ filterItem, setItem, menuItem, setProducts, selectedCategory }) => {
    return (
        <>
            <div className="widget-header">
                <h5 className="ms-2">{title}</h5>
            </div>
            <div className="">
                <button className={`m-2 ${selectedCategory === 'All' ? 'bg-warning' : ''}`} onClick={() => setProducts(Data)}>
                    All
                </button>

                {menuItem.map((Val, id) => {
                    return (
                        <button className={`m-2 ${selectedCategory === Val ? 'bg-warning' : ''}`} onClick={() => filterItem(Val)} key={id}>
                            {Val}
                        </button>
                    );
                })}
            </div>
        </>
    )
}

export default ShopCategory