import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import './App.css';
import SignUp from './components/SignUp';
import Priv_comp from './components/Priv_comp';
import Login from './components/Login'


const App = ()=> {
  const pageSize = 5;
  const [progress, setProgress] = useState(0)
 
    return (
      <div>
        <Router>
        <NavBar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
          <Routes> 
            <Route element={<Priv_comp/>}>
              <Route path='/' element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general"/>}/>   
              <Route path='business' element={<News setProgress={setProgress} key="business" pageSize={pageSize} country="in" category="business"/>}/>  
              <Route path='entertainment' element={<News setProgress={setProgress}  key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}/> 
              <Route path='health' element={<News setProgress={setProgress} key="health" pageSize={pageSize} country="in" category="health"/>}/> 
              <Route path='general' element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general"/>}/> 
              <Route path='sports' element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category="sports"/>}/> 
              <Route path='science' element={<News setProgress={setProgress} key="science" pageSize={pageSize} country="in" category="science"/>}/>
              <Route path='technology' element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology"/>}/> 
            </Route>  
              <Route path='/signup' element={ <SignUp/> } />
              <Route path='/login' element={ <Login/> } />
          </Routes>
        </Router>
      </div>
    )
 
  }
    
  export default App;
