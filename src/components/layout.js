import React from "react"
import Header from "./header"
import "./layout.css"
import VerticalNavbar from "./verticalNavbar" // Ensure the path is correct

const Layout = ({ children }) => {
  return (
    <div className="flex bg-[#101418] ">
      <VerticalNavbar />
      <div className="flex-1">
        <div className=" ">
          <main>{children}</main>
        </div>
      </div>
    </div>
  )
}

export default Layout
