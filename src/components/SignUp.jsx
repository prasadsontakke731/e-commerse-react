/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const title = "Register"
const btnText = "Signup Now"
const SignUp = () => {
    const [errorMessage, setErrorMessage] = useState("")
    const { signUpWithEmail, login, createUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/"
    // const handleRegister = () => {
    //     signUpWithEmail().then((result) => {
    //         const user = result.user
    //         navigate(from, { replace: true })
    //         toast.success("Login Successfull")
    //     }).catch((error) => {
    //         const errMessage = error.message;
    //         setErrorMessage("Please Provide Valid Email and Password")
    //         toast.error("Please Provide Valid Email and Password")
    //     })
    // }
    const handleSignUp = (e) => {
        event.preventDefault()
        const form = event.target
        // console.log(form);
        const email = form.email.value
        const password = form.password.value
        const confirmPassword = form.confirmPassword.value

        if (password !== confirmPassword) {
            setErrorMessage("Password dosn't match")
            toast.error("Password Does not match with Confirm Password")
        } else {
            setErrorMessage("")
            createUser(password, email, confirmPassword)
                .then((userCredential) => {
                    const user = userCredential.user
                    toast.success("Account Created Successfully")
                    navigate(from, { replace: true })
                }).catch((error) => {
                    toast.error(error.message)
                })
        }

    }
    return (
        <div className="login-section padding-tb section-bg">
            <ToastContainer />
            <div className="container">
                <div className="account-wrapper">
                    <h3 className='title'>{title}</h3>
                    <form className='account-form' onSubmit={handleSignUp}>
                        <div className="form-group">
                            <input type="text" name='name' id='name' placeholder='Full Name' required />
                        </div>
                        <div className="form-group">
                            <input type="email" name='email' id='email' placeholder='Email*' required />
                        </div>
                        <div className="form-group">
                            <input type="password" name='password' id='password' placeholder='Password*' required />
                        </div>
                        <div className="form-group">
                            <input type="password" name='confirmPassword' id='confirmPassword' placeholder='Confirm  Password*' required />
                        </div>
                        {/* shoing error message */}
                        <div>
                            {
                                errorMessage && (
                                    <div className='error-message text-danger'>{errorMessage}</div>
                                )
                            }
                        </div>

                        <div className='form-group'>
                            <button type='submit' className='d-block lab-btn '>
                                <span>{btnText}</span>
                            </button>
                        </div>
                    </form>
                    {/* account bottom */}
                    <div className="account-bottom">

                        <span className='d-block cate pt-10'>Already have an account <Link to="/login"><span className='fw-bold text-success ms-2'>Login</span></Link></span>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignUp