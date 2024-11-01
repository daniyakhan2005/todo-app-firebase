import React, { useState } from 'react'
import { getFirestore } from 'firebase/firestore'
import {db} from '../Config/firebase'
import { collection,addDoc } from 'firebase/firestore'

  const Todo=() =>  {
    const [title,setTitle]=useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(title=''){
            await addDoc(collection(db,'todos'),{
                title:title,
                completed:false
            })
            setTitle('')
        }

    }

    

    
   
  return (
    <div>
    <h1 className='text-5xl text-center'>TODO LIST</h1>
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder='enter todo ' className='box-border'value={title} onChange={(e)=>setTitle(e.target.value)} style={{ width: 400, padding: 10, margin: 20, marginLeft: 400, marginTop: 80 }} />
        <button type='submit' className="btn btn-info">ADD TODO</button>
    </form>
    <div className='card'>
        <table className='table'>
            <thead>
                <tr>
                    <th scope='col'>ID</th>
                    <th scope='col'>TODO</th>
                    <th scope='col'></th>
                    <th scope='col'></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>1</th>
                    <th>hello</th>
                    <th>
                        <button className='btn btn-success'>update</button>
                    </th>
                    <th>
                    <button className='btn btn-warning'>delete</button>
                    </th>

                </tr>
            </tbody>
        </table>

    </div>
   



</div>

)
  
}

export default Todo