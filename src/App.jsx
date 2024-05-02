import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import React from 'react';
import Layout from './components/Layout';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
