import { Col, Container, Row ,Nav, Tab} from "react-bootstrap";
import ProjectCard from "./ProjectCard";

import family1 from '../assets/img/family1.jpeg';
import family2 from '../assets/img/family2.jpeg';
import family3 from '../assets/img/family3.jpeg';
import family4 from '../assets/img/family4.jpeg';
import family5 from '../assets/img/family5.jpeg';
import family6 from '../assets/img/family6.jpeg';
const Projects =()=>{
    const projects =[
        {
            title: "Ragnar's",
            description:"Gurds of the mother land",
            imgUrl:family1,
        },
        {
            title: "Hjalmar's",
            description:"Gurds of the mother land",
            imgUrl:family2,
        },
        {
            title: "Alfhar's",
            description:"Gurds of the mother land",
            imgUrl:family3,
        },
        {
            title: "Gunnar's",
            description:"Gurds of the Marianne",
            imgUrl:family4,
        },
        {
            title: "Oliver's",
            description:"Gurds of the Amaterasu",
            imgUrl:family5,
        },
        {
            title: "Agnar's",
            description:"Gurds of the Hibernia",
            imgUrl:family6,
        }
    ]
return(
<section className="project" id="project">
    <Container>
        <Row>
            <Col>
            <h2>Family</h2>
            <p>
                A collection of family to shed their blood to save the mother land
            </p>
            <Tab.Container id="project-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center" id="pills-tab">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Tab One</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Tab Two</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third">Tab Three</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projects.map((project,index)=>{
                            return(
                                <ProjectCard key={index} {...project}/>
                            )
                        })}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second"> loren ipsum</Tab.Pane>
                    <Tab.Pane eventKey="third"> loren ipsum</Tab.Pane>
                </Tab.Content>
            </Tab.Container>
            </Col>
        </Row>
    </Container>
</section>
)
}

export default Projects;