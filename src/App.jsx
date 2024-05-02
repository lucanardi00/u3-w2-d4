import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import React, { useState } from 'react';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import MyMain from './components/MyMain';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleNavbarSearch = (term) => {
    setSearchTerm(term);
  };
  return (
    <div className="App">
      <header>
        <MyNavbar onSearchSubmit={handleNavbarSearch} />
      </header>
      <main>
        <MyMain searchTerm={searchTerm} />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
