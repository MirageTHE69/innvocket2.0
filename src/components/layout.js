import React from "react";
import Header from "./header";
import "./layout.css";
import VerticalNavbar from "./verticalNavbar"; // Ensure the path is correct

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <VerticalNavbar />
      <div className="flex-1">
    
        <div className="container mx-auto p-4">
          <main>{children}</main>
         
        </div>
      </div>
    </div>
  );
};

export default Layout;
