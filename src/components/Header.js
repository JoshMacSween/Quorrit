import React, { useState, useContext } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useAccount } from '../contexts/AccountProvider'

export default function Header() {
  const { handleSignOut, user } = useAccount()
  // console.log(user.username)
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Quorrit</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            {/* <LinkContainer to="/signUp">
              <Nav.Link>Sign Up</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer> */}

            {user ? (
              <button onClick={handleSignOut} style={{ border: 'none' }}>
                Sign Out
              </button>
            ) : (
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
