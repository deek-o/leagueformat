import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
    
    // <nav id="title-navbar" class="navbar bg-dark border-bottom">
    //     <a class="navbar-brand display-1 text-white" href="#"
    //       ><strong>leagueformat.com</strong></a
    //     >
    // </nav>

    function MyNavbar() {
  return (
    <Navbar id="title-navbar" className="navbar bg-dark border-bottom" expand="lg">
      <Navbar.Brand class="navbar-brand display-1 text-white" href="#"><strong>leagueformat.com</strong></Navbar.Brand>
    </Navbar>
  );
}

export default MyNavbar;