import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import "swiper/css"

//bootstrap css
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

//fonts and icons

import "././Assets/css/icofont.min.css"
import "././Assets/css/animate.css"
import "././Assets/css/style.min.css"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './home/Home.jsx'
import Shop from './shop/Shop.jsx'
import SingleProduct from './shop/SingleProduct.jsx'
import CartPage from './shop/CartPage.jsx'
import AuthProvider from './context/AuthProvider.jsx'
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx'
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'shop',
        element: <Shop />
      },
      {
        path: 'shop/:id',
        element: <PrivateRoute><SingleProduct /></PrivateRoute>
      },
      {
        path: "/cart-page",
        element: <CartPage />
      },

    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/sign-up",
    element: <SignUp />
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
