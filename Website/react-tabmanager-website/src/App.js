import React from 'react';
import Homepage from './Components/Homepage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SetUp from './Components/SetUp/SetUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/SetUp' element={<SetUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
