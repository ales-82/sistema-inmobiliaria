import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import { routes } from './routerConfig'
import Navbar from './Components/sections/navbar'
import {BrowserRouter as Router, Route, Routes } from "react-router"
import {routes} from "./routerConfig"

function App() {  

  return (
    <>     
     <Router>
       <Routes>
        {
          routes.map((route ,index)=>(
            <Route key ={index} path={route.path} element={route.element}/>
          ))
        }
       </Routes> 
       </Router>           
    </>
  )
}

export default App
