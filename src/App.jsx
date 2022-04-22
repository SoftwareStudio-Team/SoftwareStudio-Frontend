import React, { useState, useEffect, useLayoutEffect } from "react";
import { Route, Routes } from "react-router-dom";


import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Change from "./pages/Change";
import Profile from "./pages/Profile";
import BlogEditor from "./components/BlogEditor";
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
          path={"/change"}
          element={<Change/>}
        />
         <Route
          path={"/profile/:id"}
          element={<Profile/>}
        />
        <Route
          path={"/createblog"}
          element={<BlogEditor />}
        />
      </Routes>
    
    </>
  );
}

export default App;
