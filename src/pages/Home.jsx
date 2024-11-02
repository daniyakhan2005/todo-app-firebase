
import React, { useEffect, useRef, useState } from 'react'
import { collection, addDoc, getDocs, query, where, updateDoc } from "firebase/firestore";
import { auth, db } from '../Config/firebase';


const Home = () => {
  const todoInput = useRef();


  // usestate
  const [todo, setTodo] = useState([]);

  // useeffect
  useEffect(() => {
    const getDataFromFirestore = async () => {
      const q = query(collection(db, "todo"), where("uid", "==", auth.currentUser.uid));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);
        console.log(doc.data());
        todo.push({
          ...doc.data(),
          docid: doc.id
        })
        setTodo([...todo])

      });
    }

    getDataFromFirestore()
  }, [])
 
  

  // add todo
  const addTodo = async (event) => {
    event.preventDefault()
    console.log(todoInput.current.value)

    try {
      const docRef = await addDoc(collection(db, "todo"), {
        title: todoInput.current.value,
        uid: auth.currentUser.uid
      });
      console.log("Document written with ID: ", docRef.id);
      todo.push({
        title: todoInput.current.value,
        uid: auth.currentUser.uid,
        docid: docRef.id
      })
      setTodo([...todo])
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    

  }
  const DELTED = (uid)=>{
    
    todo.splice(item.docid , 1);
    setTodo([...todo]);
    
  }
  const edit = (uid)=>{
    console.log("todo edited" , uid);
    const editedVal = prompt("enter value");
    todo.splice(uid , 1 , editedVal);
    setTodo([...todo]);
    
  }
  return (
    <>


      <h1 className='text-center mt-5 text-5xl card'>Todo App</h1>
      <form className='text-center mt-5' onSubmit={addTodo}>
        <input type="text" placeholder='enter todo' ref={todoInput} className='p-2 gap-7 mt-8' />
        <button type="submit" className='btn btn-secondary ml-4'>Add Todo</button>
      </form>
      <ol className='text-center text-1xl'>
        {todo.length > 0 ? todo.map(item => {
          return <li key={item.docid}>{item.title} <button onClick={()=>DELTED(uid)} className='btn btn-warning'>delete</button><button className='btn btn-success ml-3 mb-2 mt-7'>edit</button></li>
         
        }) : <h1>No Data Found...</h1>}
       
      </ol>
    </>
  )
}

export default Home
