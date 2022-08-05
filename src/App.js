import React from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Search from '@material-ui/icons/Search';
import SearchPage from './SearchPage';

function App() {
  return (

    <div className="App">
      <Router>
        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path='/' element={<Home/>} />
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
