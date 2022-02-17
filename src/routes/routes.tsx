import React from "react";
import { Home } from '../Pages/Home'
import { Skills } from '../Pages/Skills'
import { Repos } from '../Pages/Repos'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import { StyleRoutes } from "./styles";

export const MyRoutes = () => {
  return (
    <StyleRoutes>
      <Router>
        <div>
          <Link to="/"> Home </Link>
          <Link to="/skills"> Skills </Link> 
          <Link to="/repos"> Repositories </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/repos" element={<Repos />} />
        </Routes>
      </Router>
    </StyleRoutes>

  )
}
