import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

const User = ({ firstName, lastName, age, setFirstName, setLastName, setAge, handleSubmit }) => {

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} controlId="formBasicName">
                    <Form.Label column sm="3">First name</Form.Label>
                    <Col sm="9">
                        <Form.Control
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            size="lg"
                            type="text"
                            placeholder="Enter your name" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formBasicLastName">
                    <Form.Label column sm="3">Last Name</Form.Label>
                    <Col sm="9">
                        <Form.Control
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            size="lg" type="text" placeholder="Enter your last name" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formBasicAge">
                    <Form.Label column sm="3">Age</Form.Label>
                    <Col sm="9">
                        <Form.Control
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            size="lg" type="number" placeholder="Enter your last name" />
                    </Col>
                </Form.Group>

                <Button variant="primary" type="submit" size="md" block> Save user </Button>
            </Form>
        </div>
    )
}

export default User