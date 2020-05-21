import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';

import about from "./pages/js/about";
import Nav from "./components/js/Nav";
import works from './pages/js/works';




function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route path="/works" component={works} />
        <Route path="/about" component={about} />
     </Router>
     
    </div>
  );
}

export default App;
