import React from "react";
import { Outlet } from "react-router-dom"
import  Header  from "./Header";
import  Footer  from "./Footer";
import Aside from "./Aside"
import NavBar from "./NavBar"

export default function Layout() {
    return (
        <>
        <Header />
        <NavBar/>
        <Aside/>
        <Outlet/>
        <Footer/>
        </>
    )
}