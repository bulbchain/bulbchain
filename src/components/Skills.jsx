import { Button, Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import sword1 from '../assets/img/sword1.gif';
import sword2 from '../assets/img/sword2.gif';
import sword3 from '../assets/img/sword3.gif';
import sword4 from '../assets/img/sword4.gif';
import kernel from '../assets/img/kernel1.svg';
import gain from '../assets/img/gain1.svg';
import kelp from '../assets/img/kelp1.svg';
import colorSharp from '../assets/img/color-sharp.png';
const Skills=()=>{

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

    return(
        <section>
            <Container className="skill" id="skills">
                <>
                   
                    <div className="skill-bx">
                        <h2>Products</h2>
                        <p>Earn rewards on Ethereum, BTC, BNB with KernelDAO's products</p>
                        <Row>
                        <Col sm={6} md={4}>
                            <div className="proj-imgbx1">
                            <img src={kernel}/>
                                <div className="">
                                    <h8>{"Shared security protocol on BNB Chain. Restake BNB, BTC and other yield-bearing tokens and earn rewards"}</h8>
                                    <span>{""}</span>

                                    <h4 className="mt-5">$649.09M</h4>
                                    <span>TVL</span>
                                </div>
                                <Button className="my-5" variant="light" href="https://kerneldao.com/restake/" target="_blank">Restake now</Button>
                               </div>
                        </Col>
                        <Col sm={6} md={4}>
                            <div className="proj-imgbx2">
                            <img src={kelp}/>
                                <div className="">
                                    <h8>{"Liquid restaking protocol on Ethereum. Mint your ETH and Earn rewards on Ethereum like never Before."}</h8>
                                    <span>{""}</span>

                                    <h4 className="mt-5">$1.13B</h4>
                                    <span>TVL</span>
                                </div>
                                <Button className="my-5" variant="light" href="https://kerneldao.com/kelp/" target="_blank">Mint rsETH</Button>
                               </div>
                        </Col>
                        <Col sm={6} md={4}>
                            <div className="proj-imgbx3">
                            <img src={gain}/>
                                <div  className="">
                                    <h8>{"Automated vaults on Ethereum. Full proof secured funds with revenue sharing and No lock-up, no minimum ETH required."}</h8>
                                    <span>{""}</span>

                                    <h4 className="mt-5">$133.88M</h4>
                                    <span>TVL</span>
                                </div>
                                <Button className="my-5" variant="light" href="https://kerneldao.com/kelp/gain/" target="_blank">Earn now</Button>
                               </div>
                        </Col>
                        </Row>
                       
                        

                    </div>
                    
                   
                </>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    )
}

export default Skills;