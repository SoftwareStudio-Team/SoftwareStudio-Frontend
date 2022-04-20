import React, { useState, useEffect, useLayoutEffect } from "react";

import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
function App() {
  const markdown = `A paragraph with *emphasis* and **strong importance**.
  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.

  * Lists
  * [ ] todo
  * [x] done
  
  A table:
  
  | a | b |
  | - | - |
  boat
  boat
  `;
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
      </Routes>
    
    </>
  );
}

export default App;
