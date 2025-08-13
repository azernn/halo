
import {Route, Routes } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Login from "./components/auth/Login"
import Details from "./components/Main/Details"
import Basket from "./components/admin/Basket"

function App() {

  return (
    <>
     <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path="/login" element={<Login  />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
     <Footer/>
    </>
  )
}

export default App
