import React, { createContext, useEffect, useState } from 'react'
import app from "../firebase/firebase.config"
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"


export const AuthContext = createContext()
const auth = getAuth()
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // /create user 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, password, email)
    }
    //create user using email
    const signUpWithEmail = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    // login
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    //logout function
    const logout = () => {
        return signOut(auth)
    }

    //check user is avialable or not

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            return unSubscribe()
        }
    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        signUpWithEmail,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider