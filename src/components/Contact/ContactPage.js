import React  from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./style.css";

function ContactPage() {
    return (
        <Container>
           <Row>
            <Col>
                <h1> Formulario de contacto</h1>
                <Form className="cf">
                    <div className='half left cf'>
                        <input type='text' placeholder='Name' name='user_name' /> 
                        <input type='email' placeholder='Email address' name='user_email' />
                    </div>
                    <div className='half right cf'>
                    <textarea name='message' type='text' placeholder='Message'></textarea>
                    </div>
                    <Button>
                        <input type='submit' value='Submit' id='input-submit' />
                    </Button>
                </Form>
            </Col>
            </Row>
        </Container>
     )

    }
export default ContactPage;