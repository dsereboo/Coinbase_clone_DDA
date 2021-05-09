import React from "react"
import { Container, Jumbotron, Row, Col } from "react-bootstrap"
import dashboard from "./assets/dashboard.jpg"

const Section4=()=>{
    return (
      <Container>
        <Jumbotron>
          <h1 className="text-center">Hello, world!</h1>
          <p className="text-center">
            This is a simple hero unit, a simple jumbotron-style component
          </p>
        </Jumbotron>

        <Container>
            <Row>
                 <Col md="4">
                    <Row>
                        <h1>Hello World</h1>
                        <p>
                            minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. 
                        </p>
                    </Row>
                    <Row>
                        <h1>Hello World</h1>
                        <p>
                            minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. 
                        </p>
                    </Row>
                    <Row>
                        <h1>Hello World</h1>
                        <p>
                            minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. 
                        </p>
                    </Row>
                    <Row>
                        <h1>Hello World</h1>
                        <p>
                            minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. 
                        </p>
                    </Row>
                </Col>
                <Col md="8" xs="10">
                    <img className="img-fluid" src={dashboard} alt="dashboard"/>
                </Col>
                
            </Row>
        </Container>
      </Container>
    );
}
export default Section4