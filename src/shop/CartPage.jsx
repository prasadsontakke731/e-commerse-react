import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader'
import { Link } from 'react-router-dom'
import DelImg from "/images/shop/del.png"

const CartPage = () => {
    const [cartItem, setCartItem] = useState([])


    useEffect(() => {
        //fetch cart item from localstorage
        const storedCartItems = JSON.parse(localStorage.getItem("cart")) || []
        setCartItem(storedCartItems)
    }, [])

    // calculate total price
    const calculateTotalPrice = (item) => {
        return item.price * item.quantity
    }

    //handle quantity increase
    const handleIncrease = (item) => {
        item.quantity += 1
        setCartItem([...cartItem])

        //update local storage with new cart item
        localStorage.setItem("cart", JSON.stringify(cartItem))
    }

    //handle quantity decrease
    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            item.quantity -= 1
            setCartItem([...cartItem])

            //update local storage with new cart item
            localStorage.setItem("cart", JSON.stringify(cartItem))
        }
    }

    // handle Item remove
    const handleRemoveItem = (item) => {
        const updateCart = cartItem.filter((cartItem) => cartItem.id !== item.id)

        //update new cart
        setCartItem(updateCart)
        updateLocalStorage(updateCart)
    }

    function updateLocalStorage(cart) {
        localStorage.setItem("cart", JSON.stringify(cart))
    }

    //cart subtotal
    const cartSubTotal = cartItem.reduce((total, item) => {
        return total + calculateTotalPrice(item)
    }, 0)

    //order total

    const orderTotal = cartSubTotal
    return (
        <div>
            <PageHeader title={"Shop Cart"} currPage={"Cart Page"} />
            <div className="shop-cart padding-tb ">
                <div className="container">
                    <div className="section-wrapper">

                        {/* cart top */}
                        <div className="cart-top">
                            <table>
                                <thead>
                                    <tr>
                                        <th className='cat-product'>Product</th>
                                        <th className='cat-price'>Price</th>
                                        <th className='cat-quantity'>Quantity</th>
                                        <th className='cat-toprice'>Total</th>
                                        <th className='cat-edit'>Edit</th>
                                    </tr>
                                </thead>
                                {/* table body */}
                                <tbody>
                                    {
                                        cartItem.map((item, index) => (
                                            <tr key={index}>
                                                <td className='product-item cat-product'>
                                                    <div className="p-thumb">
                                                        <Link to="/shop"><img src={item.img} alt="" /></Link>
                                                    </div>
                                                    <div className="p-content">
                                                        <Link to="/shop ">{item.name}</Link>
                                                    </div>
                                                </td>
                                                <td className='cat-price'>
                                                    {item.price}
                                                </td>
                                                <td className='cat-quantity'>
                                                    <div className='cart-plus-minus'>
                                                        <div className='dec qtybutton' onClick={() => handleDecrease(item)}>-</div>
                                                        <input type="text" className='cart-plus-minus-box' name='qtybutton' value={item.quantity} />
                                                        <div className='inc qtybutton' onClick={() => handleIncrease(item)}>+</div>

                                                    </div>
                                                </td>
                                                <td className='cat-toprice'>${calculateTotalPrice(item)}</td>
                                                <td className='cat-edit'>
                                                    <a href="#" onClick={() => handleRemoveItem(item)}><img src={DelImg} alt="" /></a>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        {/* cart bottom */}
                        <div className="cart-bottom">
                            {/* checkout box */}
                            <div className="cart-checkout-box">
                                <form className='coupon'>
                                    <input className='cart-page-input-text' type="text" name='coupon' id='coupon' placeholder='Coupon Code...' />
                                    <input type="submit" value="Apply Coupon" />
                                </form>
                                <form className='cart-checkout'>
                                    <input type="submit" value="Update Cart" />
                                    <div>
                                        Checkout Page
                                    </div>
                                </form>
                            </div>
                            {/* shoping box */}
                            <div className="shiping-box">
                                <div className="row ">
                                    <div className="col-md-6 col-12">
                                        <div className="calculate-shiping">
                                            <h3>Calculate Shipping</h3>
                                            <div className='outline-select'>
                                                <select>
                                                    <option value="Pune">Pune</option>
                                                    <option value="Mumbai">Mumbai</option>
                                                    <option value="Solapur">Solapur</option>
                                                    <option value="Satara">Satara</option>
                                                    <option value="Sangli">Sangli</option>
                                                </select>
                                                <span className="select-icon">
                                                    <i className='icofont-rounded-down'></i>
                                                </span>
                                            </div>
                                            <div className="outline-select shipping-select">
                                                <select>
                                                    <option value="Kothrud">Kothrud</option>
                                                    <option value="Deccan">Deccan</option>
                                                    <option value="Shivajinagar">Shivajinagar</option>
                                                    <option value="Swargate">Swargate</option>
                                                    <option value="Alandi">Alandi</option>
                                                </select>
                                                <span className="select-icon">
                                                    <i className='icofont-rounded-down'></i>
                                                </span>
                                            </div>
                                            <input type="text" name='postalCode' id='postalCode' className='cart-page-input-text' placeholder='Postal Code / Zip' />
                                            <button type='submit '>Update Address</button>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="cart-overview">
                                            <h3>Cart Totals</h3>
                                            <ul className='lab-ul'>
                                                <li>
                                                    <span className='pull-left'>Cart Subtotal</span>
                                                    <p className='pul-right'>${cartSubTotal}</p>
                                                </li>
                                                <li>
                                                    <span className='pull-left'>Shipping and Handling</span>
                                                    <p className='pul-right'>Free Shipping</p>
                                                </li>
                                                <li>
                                                    <span className='pull-left'>Order Total</span>
                                                    <p className='pul-right'>${orderTotal.toFixed(2)}</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage