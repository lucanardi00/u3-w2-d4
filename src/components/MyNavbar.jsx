import logo from './logo.png';
import React, { useState } from 'react';
import { Navbar, Nav, NavItem, NavLink, Image, Dropdown, DropdownButton, Form, FormControl } from 'react-bootstrap';
import styles from './MyNavbar.module.css';
import { Router, Link, useLocation } from 'react-router-dom';

const MyNavbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();

  const handleSearch = (event) => {
    event.preventDefault();
    if (event.key === 'Enter') {
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
            <NavLink as={Link} to="/" active={location.pathname === '/'}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink as={Link} to="/tvshows" active={location.pathname === '/tvshows'}>
              TV Shows
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink as={Link} to="/movies" active={location.pathname === '/movies'}>
              Movies
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink as={Link} to="/recent" active={location.pathname === '/recent'}>
              Recently Added
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink as={Link} to="/fav" active={location.pathname === '/fav'}>
              My List
            </NavLink>
          </NavItem>
        </Nav>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <NavItem>
              <DropdownButton id="dropdown-search" title={<i className="bi bi-search"></i>}>
                <Dropdown.Item>
                  <Form onSubmit={handleSearch}>
                    <FormControl
                      type="text"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </Form>
                </Dropdown.Item>
              </DropdownButton>
            </NavItem>
            <NavItem>
              <NavLink as={Link} to="/about" className={styles.kids}>
                KIDS
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink as={Link} to="/notifications">
                <i className="bi bi-bell"></i>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink as={Link} to="/profile">
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
