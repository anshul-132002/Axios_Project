import { useState } from 'react'
import FetchData from './components/FetchData'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import FetchCard from './components/fetchcard'
import Home from './components/Home'
import FetchdataPagination from './components/FetchdataPagination'

function App() {

  return (
    <BrowserRouter>
    <Navbar></Navbar>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path='/users' element={<FetchData></FetchData>}></Route>
  <Route path='/products' element={<FetchCard/>}></Route>
  <Route path='/userpagination' element={<FetchdataPagination></FetchdataPagination>}></Route>
</Routes>
    </BrowserRouter>
  )
}

export default App
