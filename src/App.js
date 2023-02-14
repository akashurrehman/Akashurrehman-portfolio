import React from 'react';
import Home from './components/Home';

import { Route,BrowserRouter,Routes } from 'react-router-dom';
import About from './components/About';

const App=()=>{
  return (
    <div>
      <BrowserRouter>      
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>   
    </div>
  );
}
export default App;
