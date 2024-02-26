import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './component/Home'
import Exchange from './component/Exchange'
import Coins from './component/Coins'
import Header from './component/Header'
import Footer from './component/Footer'
import Login from './component/Login'
import Singup from './component/Singup'

import './style/style.css'
import Coindetails from './component/Coindetails'
import About from './component/About'
import Contact from './component/Contact'
import Chartview from './component/Chart'




const App = () => {
  return (

    <Router>
    <Header />
      <Routes>
        <Route path={'/'} element={<Home />}></Route>
        <Route path={'/exchange'} element={<Exchange />}></Route>
        <Route path={'/login'} element={<Login />}></Route>
        <Route path={'/singnup'} element={<Singup />}></Route>
        <Route path={'/coins'} element={<Coins />}></Route>
        <Route path='/coins/:id' element={<Coindetails />} />
        <Route path={'/about'} element={<About />}></Route>
        <Route path={'/contact'} element={<Contact />}></Route>
        <Route path={'/ch'} element={<Chartview />}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
