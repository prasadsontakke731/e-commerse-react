/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const title = "Login"
const socialTitle = "Login with Google"
const btnText = "Login Now"
const Login = () => {

    const [errorMessage, setErrorMessage] = useState("")
    const { signUpWithEmail, login } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || "/"

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target
        // console.log(form);
        const email = form.email.value
        const password = form.password.value
        // console.log(email, password);
        login(email, password).then((result) => {
            const user = result.user
            toast.success("Login Successful")
            navigate(from, { replace: true })
        }).catch((error) => {
            const errMessage = error.message;
            setErrorMessage("Please Provide Valid Email and Password")
            toast.error("Please Provide Valid Email and Password")
        })

    }

    const handleRegister = () => {
        signUpWithEmail().then((result) => {
            const user = result.user
            navigate(from, { replace: true })
            toast.success("Login Successfull")
        }).catch((error) => {
            const errMessage = error.message;
            setErrorMessage("Please Provide Valid Email and Password")
            toast.error("Please Provide Valid Email and Password")
        })
    }
    return (
        <div>
            <ToastContainer />
            <div className="login-section padding-tb section-bg">
                <div className="container">
                    <div className="account-wrapper">
                        <h3 className='title'>{title}</h3>
                        <form className='account-form' onSubmit={handleLogin}>
                            <div className="form-group">
                                <input type="email" name='email' id='email' placeholder='Email*' required />
                            </div>
                            <div className="form-group">
                                <input type="password" name='password' id='password' placeholder='Password*' required />
                            </div>
                            {/* shoing error message */}
                            <div>
                                {
                                    errorMessage && (
                                        <div className='error-message text-danger'>{errorMessage}</div>
                                    )
                                }
                            </div>
                            <div className="form-group">
                                <div className='d-flex justify-content-between flex-wrap pt-sm-2'>
                                    <div className="checkgroup">
                                        <input type="checkbox" name='remember' id='remember' />
                                        <label htmlFor="remember">Remember Me</label>
                                    </div>
                                    <Link to="/forgetpass">Forgot Password ?</Link>
                                </div>
                            </div>
                            <div className='form-group'>
                                <button type='submit' className='d-block lab-btn '>
                                    <span>{btnText}</span>
                                </button>
                            </div>
                        </form>
                        {/* account bottom */}
                        <div className="account-bottom">

                            <span className='d-block cate pt-10'>Don't have an account <Link to="/sign-up"><span className='fw-bold text-success ms-2'>Sign Up</span></Link></span>
                            <span className='or'>
                                <span>or</span>

                            </span>

                            {/* social login */}
                            <h5 className='subTitle'>{socialTitle}</h5>
                            <ul className='lab-ul social-icons justify-content-center '>
                                <li>
                                    <button className='github bg-primary text-white rounded-5' onClick={handleRegister}><i className='icofont-github'></i></button>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login