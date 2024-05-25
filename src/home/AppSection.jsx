import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "/images/app/01.jpg"
import img2 from "/images/app/02.jpg"

const btnText = "Sign-up for free"
const title = "Shop any Time any where"

const desc = "Take shop on your any device with our app "
const AppSection = () => {
    return (
        <div className='app-section padding-tb'>
            <div className="container">
                <div className="section-header text-center">
                    <Link to="/sign-up" className='lab-btn mb-4'>{btnText}</Link>
                    <h2 className='title'>{title}</h2>
                    <p>{desc}</p>

                </div>
                <div className="section-wrapper">
                    <ul className='lab-ul'>
                        <li><a href="#"><img src={img1} alt="" /></a></li>
                        <li><a href="#"><img src={img2} alt="" /></a></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default AppSection