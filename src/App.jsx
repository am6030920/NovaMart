import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from './components/Header/Header'
import Home from './pages/home/Home'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path={"/"} exact={true} element={<Home/>}/>
         {/* <Route path="/help-center" element={<HelpCenter />} /> */}
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App