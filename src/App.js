import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/search">
            <h1>this is search page</h1>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
