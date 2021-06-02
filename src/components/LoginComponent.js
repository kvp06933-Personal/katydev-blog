import React, {Component} from "react";
import { Form, Col, Container, Button } from "react-bootstrap";

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:"test",
            password:"dummy",
            clicked: false
        }
    }
    LoginClicked = () => this.setState({clicked: true});
    render() {
        return (
            <Container>
                <h1>Login Here</h1>
                <Form>
                    <Form.Group>
                        <Form.Row>
                            <Col>
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter email"
                                    
                                />
                            </Col>
                            <Col>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter password"
                                />
                            </Col>
                        </Form.Row>
                        <Form.Row><Button onClick = {this.LoginClicked}>Welcome</Button></Form.Row>
                    </Form.Group>
                </Form>
            </Container>
        );
    }
}

export default Login;
