import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from './components/Header/Header'
import Home from './pages/home/Home'
import Productlisting from './pages/Productlisting/Productlisting'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path={"/"} exact={true} element={<Home/>}/>
      <Route path={"/Productlisting"} exact={true} element={<Productlisting/>}/>
         {/* <Route path="/help-center" element={<HelpCenter />} /> */}
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App