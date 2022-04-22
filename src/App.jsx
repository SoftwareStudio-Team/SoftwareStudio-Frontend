import React, { useState, useEffect, useLayoutEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CreateBlog from "./pages/CreateBlog";
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route
          path={"/"}
          element={<Home/>}
        />
        <Route
          path={"/register"}
          element={<Register/>}
        />
        <Route
          path={"/login"}
          element={<Login/>}
        />
        <Route
          path={"/createblog"}
          element={<CreateBlog/>}
        />
      </Routes>
    
    </>
  );
}

export default App;
