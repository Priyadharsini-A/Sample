//import { useEffect, useState } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
//import './App.css';
import Login from './Login';
import Home from './Home';
function App() {
  return( 
    <div>   
    <Router>
      <Routes>
      <Route path='/Sample' element={<Login/>} />
      <Route path='/home' element={<Home/>}/>
      </Routes>
    </Router>
    </div>    
  );  
};
export default App;
