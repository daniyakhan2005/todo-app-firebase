import React from 'react'
import todo from '../assets/todo.jpeg'

const Login = () => {
  return (
    <>
    <div>
    <img src={todo} alt='todo' style={{width:1500,height:650}} />
    <h1 style={{marginTop:-450 , marginLeft:580, fontSize:50}} className='font-semibold '>WELCOME TO MY TODO APP</h1>
    <button  className="btn btn-error"style={{marginLeft:850, marginTop:40}}><a href='todo'>CLICK HERE</a></button>


    </div>
    
    
    </>
  )
}

export default Login