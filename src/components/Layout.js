import React from "react";
import { Outlet } from "react-router-dom"

export default function Layout() {
    return (
        <>
        <h1>this is Layout page</h1>
        <Outlet/>
        </>
    )
}