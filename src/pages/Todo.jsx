import React from 'react'
import '../../src/index.css'
import todos from '../assets/todos.jpeg'

function Todo() {
    return (
        <div>
            <h1 className='text-5xl text-center'>TODO LIST</h1>
            <form>
                <input type='text' placeholder='enter todo ' className='box-border' style={{ width: 400, padding: 10, margin: 20, marginLeft: 400, marginTop: 80 }} />
                <button type='submit' className="btn btn-info">ADD TODO</button>
            </form>
           



        </div>

    )
}

export default Todo