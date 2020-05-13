import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';
import Home from "./pages/js/home";
import gallery from "./pages/js/gallery";
import Nav from "./components/js/Nav";




function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route path="/home" component={Home} />
        <Route path="/gallery" component={gallery} />
     
        

     </Router>
    </div>
  );
}

export default App;
