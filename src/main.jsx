
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Todo from './pages/Todo.jsx'

const router = createBrowserRouter([
  {
    path:'',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'login',
        element:<Login/>
      },
      {
        path:'todo',
        element:<Todo/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
<RouterProvider  router={router}>
  <App/>
 </RouterProvider>
)
