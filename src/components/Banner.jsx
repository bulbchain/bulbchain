import { Col, Container, Row } from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons"
import samDiana from '../assets/img/kernel_token.svg';
import { useNavigate } from "react-router-dom";

 const Banner=()=>{

    return (
        <section className="banner" id="home"> 
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={6}>
                <span className="tagline">What is KernelDAO?</span>
                <h1>{'Restaking, reimagined!'}<span className="wrap">!</span></h1>
                <p>Leading restaking protocol with three key products Kernel (Restaking on BNB Chain), Kelp Liquid Restaking (rsETH), Gain (Automated rewards farming)</p>
                <button onClick={()=> {window.location.href = "https://blogs.kerneldao.com/blog/tokenomics-token-utility-the-foundation-of-kernel-s-ecosystem"}}>View tokenomics<ArrowRightCircle size={25}/></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                <img src={samDiana} alt="Header img"/>
                </Col>
            </Row> 
        </Container>
        </section>
    )
 }
 export default Banner;