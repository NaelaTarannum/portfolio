import { Col } from "react-bootstrap";
import { Github } from "react-bootstrap-icons";
import { Globe } from "react-bootstrap-icons";

export const ProjectCard = ({ title, description, imgUrl, github, website }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    {/* <span className='navbar-text'> */}
                    <div className='project-icon'>
                        <a href={github} target="_blank"><Github color={'white'} size={25}></Github></a>
                        <a href={website} target="_blank"><Globe size={25} color={'white'} ></Globe></a>
                    </div>
                    {/* </span> */}
                </div>
            </div>
        </Col>
    )
}