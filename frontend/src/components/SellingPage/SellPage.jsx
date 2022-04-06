import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import { Row, Col, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import './sellpage.css';

class SellPage extends Component {
    state = {  } 
    render() { 
        return (
            <Container>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group className = "mb-2" controlId="formTitle">
                                    <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter Title" />
                                </Form.Group>
                            </Col>
                            <Col></Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className = "mb-2" controlId = "formISBN">
                                    <Form.Label>ISBN</Form.Label>
                                    <Form.Control type = "text" placeholder = "Enter ISBN" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className = "mb-2" controlId = "formAuthor">
                                    <Form.Label>Add Author</Form.Label>
                                    <Form.Control type = "text" placeholder = "Enter Author Name"/>
                                </Form.Group>
                            </Col>
                        <Row>
                            <Col>
                                <Form.Group className = "mb-2" controlId = "formDept">
                                    <Form.Label>Department</Form.Label>
                                    <Form.Control type = "text" placeholder = "Enter Department(s)"/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className = "mb-2" controlId = "formCondition">
                                    <Form.Label>Condition</Form.Label>
                                    <Form.Select id = "selectCondition">
                                        <option>Select a Condiiton</option>
                                        <option>New</option>
                                        <option>Good</option>
                                        <option>Fair</option>
                                        <option>Poor</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className = "mb-2" controlId = "formCampus">
                                    <Form.Label>Campus</Form.Label>
                                    <Form.Select id = "selectCampus">
                                        <option>Select a campus</option>
                                        <option>Atlanta</option>
                                        <option>Oxford</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        <Row>
                            <Col>
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                        </Row>
                        </Row>
                        <Form.Group className = "mb-2" controlId = "form.Textarea">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as = "textarea" rows = {3} placeholder = "Add a Description..."/> 
                        </Form.Group>
                        <Row>
                            <Col></Col>
                            <Col></Col>
                            <Col>
                                <Form.Group className = "mb-5" controlId = "price">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type = "text" placeholder = "$" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                        <Button variant = "primary" type = "submit" style={{ backgroundColor: "#D28E00", borderColor: "#D28E00" }}>Post Listing</Button>
                        </Row>
                    </Form>
            </Container>
        );
    }
}
 
export default SellPage;