import html5 from "../assets/img/html5.png";
import css from "../assets/img/css.png";
import js from "../assets/img/js.png";
import github from "../assets/img/github.png";
import redux from "../assets/img/pngegg.png";
import mysql from "../assets/img/mysql.png";
import mongo from "../assets/img/mongo.png";
import nodejs from "../assets/img/node.png";
import Reactjs from "../assets/img/reactjs.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

function Skills() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>

                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={Reactjs} alt="Image" />
                                    <h5>React Js</h5>
                                </div>
                                <div className="item">
                                    <img src={html5} alt="Image" />
                                    <h5>HTML </h5>
                                </div>
                                <div className="item">
                                    <img src={css} alt="Image" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={js} alt="Image" />
                                    <h5>Java Script</h5>
                                </div>
                                <div className="item">
                                    <img src={nodejs} alt="Image" />
                                    <h5>Node Js</h5>
                                </div>
                                <div className="item">
                                    <img src={redux} alt="Image" />
                                    <h5>Redux</h5>
                                </div>
                                <div className="item">
                                    <img src={mongo} alt="Image" />
                                    <h5>Mongo DB</h5>
                                </div>
                                <div className="item">
                                    <img src={mysql} alt="Image" />
                                    <h5>MySQL</h5>
                                </div>
                                <div className="item">
                                    <img src={github} alt="Image" />
                                    <h5>Github</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}

export default Skills;