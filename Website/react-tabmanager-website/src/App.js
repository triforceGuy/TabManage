import React from 'react';
import Homepage from './Components/Homepage';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Homepage />
      </Router>
    </div>
  );
}

export default App;
