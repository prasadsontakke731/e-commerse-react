import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat in natus ex nam repellat dolores provident illo ."
const ProductDisplay = ({ item }) => {

    const { name, id, price, seller, ratingsCount, quantity, img } = item

    const [preQuantity, setPreQuantity] = useState(quantity)
    const [coupon, setCoupon] = useState("")
    const [size, setSize] = useState("Select Size")
    const [color, setColor] = useState("Select Color")
    console.log(item);

    const handleSizeChange = (e) => {
        setSize(e.target.value)
    }
    const handleColorChange = (e) => {
        setColor(e.target.value)
    }

    // 
    const handleDecrease = () => {
        if (preQuantity > 1) {
            setPreQuantity(preQuantity - 1)
        }

    }
    const handleIncrease = () => {

        setPreQuantity(preQuantity + 1)

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const product = {
            id: id,
            img: img,
            name: name,
            price: price,
            quantity: preQuantity,
            size: size,
            color: color,
            coupon: coupon
        }
        const existingCart = JSON.parse(localStorage.getItem("cart")) || []

        const existingProductIndex = existingCart.findIndex((item) => item.id === id)

        if (existingProductIndex !== -1) {
            existingCart[existingProductIndex].quantity += preQuantity
        } else {
            existingCart.push(product)

        }
        //update localstorage
        localStorage.setItem("cart", JSON.stringify(existingCart))

        //reset form field
        setPreQuantity(1)
        setSize("Select Size")
        setColor("Select Color")
        setCoupon("")
    }
    return (
        <div>
            <div>
                <h4>{name}</h4>
                <p className='rating'>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <i className='icofont-star'></i>
                    <span>{ratingsCount} review</span>
                </p>
                <h4>${price}</h4>
                <h6>{seller}</h6>
                <p>{desc}</p>
            </div>
            {/* cart component */}
            <div>
                <form onSubmit={handleSubmit} >
                    <div className="select-product size">
                        <select value={size} onChange={handleSizeChange}>
                            <option >Select Size</option>
                            <option value="SM">SM</option>
                            <option value="LG">LG</option>
                            <option value="MD">MD</option>
                            <option value="XL">XL</option>
                            <option value="2XL">2XL</option>
                        </select>
                        <i className='icofont-rounded-down'></i>
                    </div>
                    {/* select color */}
                    <div className="select-product color">
                        <select value={color} onChange={handleColorChange}>
                            <option >Select Color</option>
                            <option value="Pink">Pink</option>
                            <option value="Red">Red</option>
                            <option value="Blue">Blue</option>
                            <option value="Orange">Orange</option>
                            <option value="White">White</option>
                        </select>
                        <i className='icofont-rounded-down'></i>
                    </div>
                    {/* cart + - */}
                    <div className="cart-plus-minus">
                        <div className='dec qtybutton' onClick={handleDecrease}>-</div>
                        <input className='cart-plus-minus-box' type="text" name='qtybutton' id='qtybutton' value={preQuantity} onChange={(e) => setPreQuantity(parseInt(e.target.value, 10))} />
                        <div className='inc qtybutton' onClick={handleIncrease}>+</div>
                    </div>
                    {/* coupon field */}
                    <div className="discount-code mb-2" >
                        <input type="text" placeholder='Enter Descount Code' onChange={(e) => setCoupon(e.target.value)} />
                    </div>
                    {/* buttons */}
                    <button type='submit' className='lab-btn'><span>Add To Cart</span></button>
                    <Link to="cart-page" className='lab-btn bg-primary'><span>Check Out</span></Link>

                </form>
            </div>
        </div>
    )
}

export default ProductDisplay