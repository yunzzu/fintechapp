import Profile from './components/Profile';
import { useState } from "react"; //state hook을 import
import ListComp from './components/ListComp';
import Header from './components/Header';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
      return(
        <BrowserRouter>
          <Routes>
            <Route path="/test/" element={<ListComp />}></Route>
          </Routes>
        </BrowserRouter>
      );
  };

export default App;