import React from 'react'
import background from '../assets/background.jpeg'


const Home = () => {
  return (
    <>
    <div>
      <img src={background} alt='background' style={{width:1500,height:650}} />
      <h1 style={{marginTop:-450 , marginLeft:580, fontSize:50}} className='font-semibold '>TODO APP</h1>
      <button  className="btn btn-error"style={{marginLeft:650, marginTop:40}}><a href='login'>LOGIN</a></button>
    </div>
    
    
    </>
  )
}

export default Home