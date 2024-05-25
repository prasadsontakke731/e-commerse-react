import React from 'react'

/* eslint-disable react/jsx-no-target-blank */

import { Link } from "react-router-dom";

const title = "About ShopCart";
const desc = "";
const ItemTitle = "Categories";
const quickTitle = "Quick Links";
const tweetTitle = "Recent Tweets";

const addressList = [
    {
        iconName: ' icofont-google-map',
        text: ' Pune, India',
    },
    {
        iconName: ' icofont-phone',
        text: ' +91 9834756699',
    },
    {
        iconName: ' icofont-envelope',
        text: ' prasadsontakke731@gmail.com',
    },
]

const socialList = [
    {
        iconName: 'icofont-github',
        siteLink: '#',
        className: 'Github',
        link: "https://github.com/prasadsontakke731"
    },

    {
        iconName: 'icofont-linkedin',
        siteLink: '#',
        className: 'linkedin',
        link: "https://www.linkedin.com/in/prasad-sontakke-676814205/"

    },
    {
        iconName: 'icofont-instagram',
        siteLink: '#',
        className: 'instagram',
        link: "https://www.instagram.com/prasadsontakke45/"
    },

]

const ItemList = [
    {
        text: 'All Products',
        link: '/shop',
    },
    {
        text: 'Shop',
        link: '/shop',
    },
    {
        text: 'Blog',
        link: '/blog',
    },
    {
        text: 'About',
        link: '/about',
    },
    {
        text: 'Policy',
        link: '#',
    },
    {
        text: 'FAQs',
        link: '/about',
    }
]

const quickList = [
    {
        text: 'Summer Sessions',
        link: '#',
    },
    {
        text: 'Events',
        link: '#',
    },
    {
        text: 'Gallery',
        link: '#',
    },
    {
        text: 'Forums',
        link: '#',
    },
    {
        text: 'Privacy Policy',
        link: '#',
    },
    {
        text: 'Terms of Use',
        link: '#',
    },
]

const tweetList = [
    {
        iconName: 'icofont-twitter',
        desc: <p>Aminur islam <a href="#">@ShopCart Greetings!  #HTML_Template</a> Grab your item, 50% Big Sale Offer !!</p>,
    },
    {
        iconName: 'icofont-twitter',
        desc: <p>Somrat islam <a href="#">@ShopCart Hey! #HTML_Template</a> Grab your item, 50% Big Sale Offer !!</p>,
    },
]

const footerbottomList = [
    {
        text: 'Faculty',
        link: '#',
    },
    {
        text: 'Staff',
        link: '#',
    },
    {
        text: 'Students',
        link: '#',
    },
    {
        text: 'Alumni',
        link: '#',
    },
]
const Footer = () => {
    return (
        <footer className='style-2 '>
            <div className="footer-top dark-view padding-tb">
                <div className="container">
                    <div className="row g-4 row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-1 d-flex justify-content-between">
                        <div className="col ">
                            <div className="footer-item our-address">
                                <div className="footer-inner">
                                    <div className="title">
                                        <h4>{title}</h4>
                                    </div>
                                    <div className="content">
                                        <p>{desc}</p>
                                        <ul className="lab-ul office-address">
                                            {
                                                addressList.map((val, i) => (
                                                    <li key={i}> <i className={val.iconName}>{val.text}</i></li>
                                                ))
                                            }
                                        </ul>
                                        <ul className="lab-ul social-icons mt-5">
                                            {socialList.map((val, i) => (
                                                <li key={i}>
                                                    <a href={val.link} target='_blank' className={`${val.className} ms-2`}><i className={val.iconName}></i></a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col ">
                            <div className="footer-item">
                                <div className="footer-inner">
                                    <div className="footer-content">
                                        <div className="title">
                                            <h4>{ItemTitle}</h4>
                                        </div>
                                        <div className="content">
                                            <ul className="lab-ul">
                                                {ItemList.map((val, i) => (
                                                    <li key={i}><a href={val.link}>{val.text}</a></li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* footer bottom */}
            <div className="footer-bottom">
                <div className="container">

                    <div className="section-wrapper">
                        <p>&copy; 2024 <Link ro="/">Shop Cart</Link> Designed by <a href="/" target='_blank'>Prasad Sontakke</a></p>
                        <div className="footer-bottom-list">
                            {
                                footerbottomList.map((val, i) => (
                                    <a href="#" key={i}>{val.text}</a>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer