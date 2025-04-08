import { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown} from "react-bootstrap";
import LogoKernel from '../assets/img/LogoKernel.png'
import LnLogo from '../assets/img/WhiteLnLogo.png';
import navIcon3 from '../assets/img/teleWhite.png';
import xlogo from '../assets/img/Xwhite.png';
import dexlogo from '../assets/img/DexLogo.png';
import { HashLink } from 'react-router-hash-link';

import {
    BrowserRouter as Router
  } from "react-router-dom";
  

const Header =()=>{
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
      }
    return(
        <Router>
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={LogoKernel} alt="Logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => {window.location.href = "https://kerneldao.com/restake/"}}>Product</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => {window.location.href = "https://forum.kerneldao.com/t/welcome-to-kerneldao-governance-forum/5"}}>Governance</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => {window.location.href = "https://kerneldao.com/ecosystem/"}}>Ecosystem</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
              <a href="https://www.linkedin.com/company/kernel-dao"><img src={LnLogo} alt="kdao" /></a>
              <a href="https://t.me/KERNELIIDAO"><img src={navIcon3} alt="kelp" /></a>
              <a href="https://x.com/kernel_dao?lang=en"><img src={xlogo} alt="x" /></a>
              <a href="https://pump.fun/coin/A8EeZpqRfQfQrQGfoePc8qRdvbn6Z1o1DuGyDkL9pump"><img src={dexlogo} alt="dex" /></a>
               
              </div>
              <HashLink to='#connect'>
                <button onClick={()=> {window.location.href = "https://kerneldao.com/restake/"}} className="vvd"><span>Launch App</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
    )
}

export default Header;