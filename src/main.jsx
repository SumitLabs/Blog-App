import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout' 
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ErrorPage } from './pages/ErrorPage'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'
import { Create } from './pages/Create'
import { Articles } from './pages/Articles'
import { About } from './pages/About'
import { Article } from './pages/Article'

const router =createBrowserRouter([
{path: "/",
element:<Layout/>,
errorElement:<ErrorPage/>,
children:[
  {
    index:true,
    element:<Home/>
  },
  {
    path:'/profile',
    element:<Profile/>
  },
  {
    path:'/create',
    element:<Create/>
  },
  {
    path:'/articles',
    element:<Articles/>
  },
  {
     path:'/articles/:id',
     element:<Article/>
  },
  {
    path:'/about',
    element: <About/>
  }
]
}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router}/>
  </React.StrictMode>,
)
