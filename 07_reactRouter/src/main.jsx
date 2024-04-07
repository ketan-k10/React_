import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'

//!     First Method

// const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Layout/> ,
//       children:[
//         {
//           path:"",
//            element:<Home/>
//         },
//         {
//           path:"/about",
//           element:<About/>
//         },
//         {
//           path:"/contact",
//           element: <Contact />
//         },
    
//       ]
//      },
//     ]);
//! Second method

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout/>}>
//       <Route path='' element={<Home/>} />
//       <Route path='/about' element={<About/>}/>
//       <Route path='/contact' element={<Contact/>} />
//     </Route>
//   )
// )

//! User id

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>} />
      <Route path='/user/:userid' element = {<User/>} />
      //! This is important the main concept is how to take this id parameter  value
      //! see user.jsx for this we use useparams.
      {/* <Route 
      loader={()=>{
        
      }}
      path='/github'
       element={<Github/>} /> */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
