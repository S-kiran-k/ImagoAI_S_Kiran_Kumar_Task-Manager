import { Outlet } from "react-router-dom"
import Header from "../src/components/Header/Header"
import Footer from "../src/components/Footer/Footer"

const Applayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Applayout