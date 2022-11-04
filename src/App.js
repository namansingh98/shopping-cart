import React from 'react'
import Header from './Components/Header'
import Store from './Components/Store' 
import './css/Main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Success from './Components/Success';
import Cancel from './Components/Cancel';
function App() {
  return (
      <Container>
        <Header></Header> 
        <BrowserRouter>
        <Routes>
          <Route index element={<Store/>}/>
        <Route path="success" element={<Success/>} />
        <Route path="Cancel" element={<Cancel/>} />
       
        </Routes>
        </BrowserRouter>
     
    </Container>
  )
}

export default App