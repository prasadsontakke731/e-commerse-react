import React, { useState } from 'react'
import Rating from '../components/Rating';
import img1 from "/images/shop/01.jpg"

const reviewTitle = "Add a Review"
let ReviewList = [
    {
        imgUrl: "/src/Assets/images/instructor/01.jpg",
        imgAlt: "Client thumb",
        name: "Ganelon Boileau",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/Assets/images/instructor/02.jpg",
        imgAlt: "Client thumb",
        name: "Morgana Cailot",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/Assets/images/instructor/03.jpg",
        imgAlt: "Client thumb",
        name: "Telford Bois",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/Assets/images/instructor/04.jpg",
        imgAlt: "Client thumb",
        name: "Cher Daviau",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
];
const Review = () => {
    const [reviewShow, setReviewShow] = useState(true)
    return (
        <>
            <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}>
                <li className='desc' onClick={() => setReviewShow(!reviewShow)}>Description</li>
                <li className='rev' onClick={() => setReviewShow(!reviewShow)}>Review</li>
            </ul>
            {/* desc and review content */}
            <div className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>
                {/* review showing  */}
                <div className="review-showing">
                    <ul className='content lab-ul'>
                        {
                            ReviewList.map((review, i) => (
                                <li key={i}>
                                    <div className='post-thumb'>
                                        <img src={review.imgUrl} alt="" />
                                    </div>
                                    <div className="post-content">
                                        <div className='entry-meta'>
                                            <div className='posted-on'>
                                                <a href="#">{review.name}</a>
                                                <p>{review.date}</p>
                                            </div>
                                        </div>
                                        <div className='entry-content'>
                                            <p>{review.desc}</p>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }

                    </ul>
                    {/* add review */}
                    <div className="client-review">
                        <div className="review-form">
                            <div className="review-title">
                                <h5>{reviewTitle}</h5>
                            </div>
                            <form className='row'>
                                <div className="col-md-4 col-12">
                                    <input type="text" name='name' id='name' placeholder='Full Name' />
                                </div>
                                <div className="col-md-4 col-12">
                                    <input type="email" name='email' id='email' placeholder='Full Email' />
                                </div>
                                <div className="col-md-4 col-12">
                                    <div className='rating text-warning'>
                                        <span className='me-2'>Your Rationg </span>
                                        <Rating />
                                    </div>
                                </div>
                                <div className='col-md-12 col-12'>
                                    <textarea name="message" id="message" rows={8} placeholder='Type here message...'></textarea>

                                </div>
                                <div className="col-12">
                                    <button className='default-button' type='submit'>
                                        <span>
                                            Submit Review
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
                {/* description showing */}
                <div className="description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus delectus velit nihil sunt, tenetur nisi aperiam reprehenderit distinctio vero. Ullam, error vero ea distinctio sint consequuntur ipsum doloremque alias repellat placeat voluptatibus odio voluptatum possimus eius rem ipsam quae aut, quam officia. Consequuntur doloremque dolores dolore ea modi, animi illum.</p>
                    <div className='post-item'>
                        <div className="post-thumb">
                            <img src={img1} alt="" />
                        </div>
                        <div className="post-content">
                            <ul className='lab-ul'>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quam!</li>
                                <li>dolor sit amet consectetur adipisicing elit. Dolore, quam!</li>
                                <li>Lorem ipsum dolor  consectetur adipisicing elit. Dolore, quam!</li>
                                <li> ipsum dolor sit amet consectetur adipisicing elit. Dolore, quam!</li>
                                <li>Lorem ipsum dolor sit amet consectetur  elit. Dolore, quam!</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quam!</li>
                                <li>Lorem ipsum dolor sit amet Dolore, quam!</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quam!</li>
                                <li>Lorem consectetur adipisicing elit. Dolore, quam!</li>
                            </ul>
                        </div>

                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus delectus velit nihil sunt, tenetur nisi aperiam reprehenderit distinctio vero. Ullam, error vero ea distinctio sint consequuntur ipsum doloremque alias repellat placeat voluptatibus odio voluptatum possimus eius rem ipsam quae aut, quam officia. Consequuntur doloremque dolores dolore ea modi, animi illum.</p>
                </div>

            </div>
        </>
    )
}

export default Review