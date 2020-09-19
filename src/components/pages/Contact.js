import React from "react";
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <Form>
        <Form.Row>
        <Col>
        <Form.Control placeholder="First name" />
        </Col>
        <Col>
        <Form.Control placeholder="Last name" />
        </Col>
        </Form.Row>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>


        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary">Submit</Button>{' '}
      </Form>
    </div>
  );
}

export default Contact;
