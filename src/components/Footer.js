import { Container, Row, Col } from "react-bootstrap";
// import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import github from "../assets/img/github.png";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://in.linkedin.com/in/naela-tarannum-9b1080140" target="_blank"><img src={navIcon1} alt="" /></a>
                            <a href="https://github.com/NaelaTarannum" targte="_blank"><img src={github} alt="" /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}