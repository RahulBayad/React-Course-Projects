import { useState } from 'react'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider,} from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route  path='' element={<Home/>} />
    <Route path='about' element={<About/>} />
  </Route>
))

function App() {
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

