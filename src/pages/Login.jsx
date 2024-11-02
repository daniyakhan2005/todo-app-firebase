import React, { useRef, useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../Config/firebase'
import background from '../assets/background.jpeg'
const Login = () => {
  const [error,setError]=useState(false)
  const email = useRef()
  const password = useRef()

  // navigation
  const navigate = useNavigate()
  const loginUser = (event) => {
    event.preventDefault()
    console.log(email.current.value);
    console.log(password.current.value);

    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate('/')

      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(errorMessage)

      });


  }
  return (
    <>
    <img src={background} style={{width:1500, height:560}}  />
    <div>
      <h1 className='text-center text-4xl' style={{marginTop:-400}}>LOGIN USER</h1>
      <form onSubmit={loginUser}>
        <input type="email" placeholder='enter your email' ref={email} style={{marginLeft:580, padding:10, marginTop:20}} /><br />
        <input type="password" placeholder='enter your password' ref={password}style={{marginLeft:580, padding:10, marginTop:20}} /> <br />
        <button className='btn btn-secondary'style={{marginLeft:640, marginTop:20}}>Login</button>
      </form>
      <p className='text-2xl'style={{marginLeft:500, marginTop:20, color:'white'}}>{error && error}</p>

    </div>
    
    
    </>
  )
}

export default Login