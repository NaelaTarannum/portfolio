import { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import navIcon1 from '../assets/img/nav-icon1.svg';
import github from "../assets/img/github.png";
import { HashLink } from 'react-router-hash-link';
import {
    BrowserRouter as Router
} from "react-router-dom";


const NavBar = () => {
    const [activeTab, setActiveTab] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll)
        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    }, [])
    const updateActiveLink = (value) => setActiveTab(value)
    return (
        <Router>
            <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
                <Container>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" >
                        <span className='navbar-toggler-icon'> </span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className={activeTab === "home" ? "active navbar-link" : "navbar-link"} onClick={() => { updateActiveLink('home') }}>Home</Nav.Link>
                            <Nav.Link href="https://drive.google.com/file/d/1UrdUO6eVRAIoZ7JIgO8SuerCJvaFMrCo/view?usp=sharing" target="_blank" className={activeTab === "experience" ? "active navbar-link" : "navbar-link"} onClick={() => { updateActiveLink('experience') }}>Resume</Nav.Link>
                            <Nav.Link href="#skills" className={activeTab === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => { updateActiveLink('skills') }}>Skills</Nav.Link>
                            <Nav.Link href="#project" className={activeTab === "project" ? "active navbar-link" : "navbar-link"} onClick={() => { updateActiveLink('project') }}>Project</Nav.Link>

                        </Nav>
                        <span className='navbar-text'>
                            <div className='social-icon'>
                                <a href="https://in.linkedin.com/in/naela-tarannum-9b1080140" target="_blank"><img src={navIcon1} alt="" /></a>
                                <a href="https://github.com/NaelaTarannum" targte="_blank"><img src={github} alt="" /></a>
                            </div>
                            <HashLink to='#connect'>
                                <button className="vvd"><span>Let's Connect</span></button>
                            </HashLink>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </Router>
    )
}

export default NavBar