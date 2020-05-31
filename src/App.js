import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';
import about from "./pages/js/about";
import Nav from "./components/js/Nav";
import works from './pages/js/works';
import collection from './pages/js/collection';
import urban from './pages/js/urban';
import landscape from './pages/js/landscape';
import nature from './pages/js/nature';

document.body.style = 'background: #0B0B1E;';



function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route exact path='/' component={works} />
        <Route path="/works" component={works} />
        <Route path="/about" component={about} />
        <Route path="/collection" component={collection} />
        <Route path="/urban" component={urban} />
        <Route path="/nature" component={nature} />
        <Route path="/landscape" component={landscape} />
     </Router>
     
     
    </div>
  );
}

export default App;
