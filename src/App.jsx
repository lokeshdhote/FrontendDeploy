import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Route from './routers/route.jsx'
import FullLayout from './components/FullLayout'
import {  productsLoad } from './store/Actions/productAction.jsx'
import { useState } from 'react'


function App() { 

 

  const dispatch = useDispatch()
  dispatch(productsLoad())

  
  return (
   <div  >

<Route/>
   </div>
      
  
  )
}

export default App
