import { useState } from 'react'
import Home from './home/Home'
import NavBar from './navbar/NavBar'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Signup from './signup/Signup'
import PageNotFound from './PageNotFound'


function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {path:"/", element:<><Home/><NavBar/></>},
    {path:"/signup", element:<><Home/><NavBar/><Signup/></>},
    {path:"/*", element:<><PageNotFound/></>},
    
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
