import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Detail from './pages/Detail/Detail';
import List from './pages/List/List';
import Main from './pages/Main/Main';
import Mypage from './pages/Mypage/Mypage';
import Survey from './pages/Survey/Survey';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<List />} />
        <Route path="/list/matching" element={<List />} />
        <Route path="/users/:id" element={<Detail />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/profile" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
