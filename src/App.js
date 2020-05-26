import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';
import about from "./pages/js/about";
import Nav from "./components/js/Nav";
import works from './pages/js/works';
import collection from './pages/js/collection';

document.body.style = 'background: #0B0B1E;';



function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route path="/works" component={works} />
        <Route path="/about" component={about} />
        <Route path="/collection" component={collection} />
     </Router>
     
     
    </div>
  );
}

export default App;
