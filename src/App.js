import React from 'react'
import  Navbar from './components/Navbar'
import {BrowserRouter as Router} from "react-router-dom"
import './App.css'
import Footer from './components/footer'

function App() {
  return (
   
    <Router>
     <Navbar/>
     <Footer/>
     </Router>


    
  
  )
}

export default App

