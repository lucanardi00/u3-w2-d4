import logo from './logo.png'
import React, { useState } from 'react';
import { Navbar, Nav, NavItem, NavLink, Image, Dropdown, DropdownButton } from 'react-bootstrap';
import styles from './MyNavbar.module.css';

const MyNavbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); 
      console.log('Search term:', searchTerm); 
      setSearchTerm(''); 
    }
  };

  return (
    <Navbar bg="transparent" expand="lg" className="navbar" data-bs-theme="dark">
      <Navbar.Brand href="#home">
        <Image src={logo} alt="Logo" width="100" height="60" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <NavItem>
            <NavLink href="#home">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#tvshows">TV Shows</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#movies">Movies</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#recent">Recently Added</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#fav">My List</NavLink>
          </NavItem>
        </Nav>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
          <NavItem>
              <DropdownButton id="dropdown-search" title={<i className="bi bi-search"></i>}>
                <Dropdown.Item href="#">
                  <form onSubmit={handleSearch}>
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button type="submit" style={{ display: 'none' }}>
                    </button>
                  </form>
                </Dropdown.Item>
              </DropdownButton>
            </NavItem>
            <NavItem>
              <NavLink href="#about" className={styles.kids}>KIDS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#notifications">
                <i className="bi bi-bell"></i>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about">
                <i className="bi bi-person-circle"></i>
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
