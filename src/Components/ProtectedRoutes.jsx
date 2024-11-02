import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../Config/firebase'
import { useNavigate } from 'react-router-dom'

const ProtectedRoutes = ({componenet}) => {
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log(uid)
                setLoading(false)
            } else {
                navigate('/login')
            }
        });

    }, [])
    //  FOR THE NAVIGATION PROCESS
    const navigate = useNavigate()
  return (
    loading ? <h1>Loading...</h1> :  componenet
  )
}

export default ProtectedRoutes