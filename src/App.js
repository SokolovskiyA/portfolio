import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import ContactsPage from './Components/ContactsPage/ContactsPage';
import MyWorkPage from './Components/MyWorkPage/MyWorkPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<HomePage/>}/>
          <Route path='/my_work' element={<MyWorkPage/>}/>
          <Route path='/contacts' element={<ContactsPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
