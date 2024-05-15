import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
// import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// const router = createBrowserRouter(createRoutesFromElements(
//   <Route path='/' element={<Layout/>}>
//     <Route path='' element={<Home/>} />
//     <Route path='about' element={<About/>} />
//   </Route>
// ))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router={router}/> */}
  </React.StrictMode>,
)
