
import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useRef } from 'react'
import { auth } from '../Config/firebase'
import todo from '../assets/todo.jpeg'


const Register = () => {
  const email = useRef()
  const password = useRef()

  const registerUser = (event) => {
    event.preventDefault()
    console.log(email.current.value);
    console.log(password.current.value);

    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
      });


  }
  return (
    <>
    <img src={todo} style={{width:1500, height:560}} />
    <h1 className='text-center text-4xl' style={{marginTop:-400, marginLeft:100}}>REGISTER</h1>
    <form onSubmit={registerUser}>
        <input type="email" placeholder='enter your email' ref={email} style={{marginLeft:620, padding:10, marginTop:20}} /><br/>
        <input type="password" placeholder='enter your password' ref={password} style={{marginLeft:620, padding:10, marginTop:20}} /><br/>
        <button className='btn btn-primary'style={{marginLeft:680, marginTop:20}}>Register</button>
      </form>
    
    
    </>
  )
}

export default Register