import React from "react";
import { Form, Col, Button, Container, Row, Card } from "react-bootstrap";
function Contact() {
    return (
        <Container>
            <Row>
                <Col>
                    <Form>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                            />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;
