import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import HeaderImg from "../assets/img/header.png";
// import 'animate.css';
import { useState, useEffect } from "react";
const Banner = () => {
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        const ticker = setInterval(() => {
            tick();
        }, delta);
        return () => clearInterval(ticker)
    }, [text])
    const tick = () => {
        let fullText = "Fullstack Developer";
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period);

        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setDelta(500)
        }
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center" >
                    <Col xs={12} md={12} xl={6}>
                        <img className="banner-img" src={HeaderImg} alt="header" />
                    </Col>
                    <Col xs={12} md={12} xl={6}>
                        <span className="tagline"> Welcome to my Portfolio</span>
                        <h1>{`Hi, I'm Naela, `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                        <p>jdoif fgndigjmrlfg rgjirolemgrb igprogkg pgrpokgrkgpngrjpjgprj</p>
                        <button onClick={() => console.log('connect')}>Let's connect<ArrowRightCircle size={25}></ArrowRightCircle></button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}


export default Banner;