import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from "/images/logo/logo.png"
import { AuthContext } from '../context/AuthProvider'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NavItems = () => {
    const [menuToggle, setMenuToggle] = useState(false)
    const [socialToggle, setSocialToggle] = useState(false)
    const [headerFixed, setHeaderFixed] = useState(false)

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate()

    //addevent listner

    window.addEventListener(scroll, () => {
        if (window.scrollY > 200) {
            setHeaderFixed(true)
        } else {
            setHeaderFixed(false)
        }


    })
    const handleLogout = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
                toast.success("Logout Successfully")

            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp " : ""}`}>
            <ToastContainer />
            {/* headre top start */}
            <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>

                <div className="container">
                    <div className="header-top-area">
                        <Link to="/signup" className='lab-btn me-3'>Create Account</Link>
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
            {/* header bottom.header-bottom */}
            <div className="header-bottom">
                <div className="container">
                    <div className="header-wrapper">
                        {/* logo */}
                        <div className='logo-search-acte'>
                            <div className="logo">
                                <Link to="/">
                                    <img src={Logo} alt="logo " />
                                </Link>
                            </div>
                        </div>
                        <div className="menu-area">
                            <div className="menu">
                                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="shop">Shop</Link></li>
                                    <li><Link to="cart-page"><i className='icofont-cart fs-3 text-success'></i></Link></li>

                                </ul>

                            </div>
                            {/* sign in and login */}
                            {
                                user ? <>
                                    <Link to="/login"><button onClick={handleLogout} className='fw-bold text-danger bg-white'>LogOut</button></Link>
                                </> : <>
                                    <Link to="sign-up" className='lab-btn me-3 d-none d-md-block'>Create Acount</Link>
                                    <Link to="login" className='d-none d-sm-block'>Login</Link>
                                </>
                            }

                            {/* menu toggler */}
                            <div onClick={() => setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            {/* social toggle */}
                            <div className='ellepsis-bar d-md-none' onClick={() => setSocialToggle(!socialToggle)}>
                                <i className='icofont-info-square'></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavItems