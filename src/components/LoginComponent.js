import React, { Component } from "react";
import { Form, Col, Container, Button, Card, Row } from "react-bootstrap";
import "../assets/css/loginForm.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            loginSuccessful: false,
            loginFailed: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        event.preventDefault();
    }
    loginClicked() {
        if (this.state.username === "test" && this.state.password === "dummy") {
            this.props.history.push("/welcome");
            //this.setState({ loginSuccessful: true });
            //this.setState({ loginFailed: false });
        } else {
            this.setState({ loginSuccessful: false });
            this.setState({ loginFailed: true });
        }
    }

    render() {
        return (
            <Container className="loginContainer">
                <Row >
                    <Col lg={{ span: 8, offset: 2 }} className="col-centered">
                    <Card className="loginForm">
                            <h1>Login Here</h1>
                            <Form>
                                <Form.Group>
                                    <Form.Row>
                                        
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter email"
                                            name="username"
                                            value={this.state.username}
                                            onChange={this.handleChange}
                                        />

                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Enter password"
                                            name="password"
                                            value={this.state.password}
                                            onChange={this.handleChange}
                                        />
                                    
                                    </Form.Row>
                                    <Form.Row>
                                        
                                            <Button onClick={this.loginClicked} className="btn-large btn-block">
                                                Login
                                            </Button>
                                        
                                    </Form.Row>
                                </Form.Group>
                            </Form>
                        </Card>
                    </Col>
                </Row>
                {/* <ShowInvalidCredentials loginFailed={this.state.loginFailed}/>
            <ShowWelcomeMessage loginSuccessful={this.state.loginSuccessful}/>     */}
                {this.state.loginFailed && <div>Login Failed</div>}
                {this.state.loginSuccessful && <div>Welcome</div>}
            </Container>
        );
    }
}
function ShowInvalidCredentials(props) {
    if (props.loginFailed) {
        return <div>Login Failed</div>;
    }
    return null;
}
function ShowWelcomeMessage(props) {
    if (props.loginSuccessful) {
        return <div>Welcome</div>;
    }
    return null;
}
export default Login;
