import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './pages/Form';
import Users from './pages/Users.jsx';
import Nav from './components/Nav.jsx';

function App() {
  return (
    <Router>
      <Nav/>
      <Container>
        <Routes>
          <Route path ='/' element={<Form/>}/>
          <Route path ='/users' element={<Users/>}/>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
