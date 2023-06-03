import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import MoreDetail from './components/MoreDetail';
import Home from './Home';
const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/detail/:id" element={<MoreDetail />}></Route>
        </Routes>
    </Router>
  )
}

export default App