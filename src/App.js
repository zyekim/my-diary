import './App.css';
import CreateDiary from './components/CreateDiary'
import DiaryList from './components/DiaryList'
import DetailDiary from './components/DetailDiary'
import UpdateDiary from './components/UpdateDiary'
import React from 'react';
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div className="container">
      <Routes>
        <Route exact path="/" element={ <DiaryList/>} />
        <Route path="/diary/:id" element={<DetailDiary/>}></Route>
        <Route path="/edit/:id" element={<UpdateDiary/>}></Route>
        <Route path="/create" element={ <CreateDiary />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
