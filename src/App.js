import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './component/Home'
import Exchange from './component/Exchange'
import Coins from './component/Coins'
import Header from './component/Header'
import Footer from './component/Footer'



const App = () => {
  return (
    <Router>
    {/* <Header /> */}
      <Routes>
        <Route path={'/'} element={<Home />}></Route>
        <Route path={'/exchange'} element={<Exchange />}></Route>
        <Route path={'/coins'} element={<Coins />}></Route>
      </Routes>
      {/* <Footer /> */}
    </Router>
  )
}

export default App
