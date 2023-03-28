import React, { useRef }  from "react";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import Map from './Map';

function ContactPage() {
    const form = useRef();
    const sendEmail = (event) =>{
        event.preventDefault(); 
        emailjs.sendForm( 'service_q4iet6p', 'template_0o4obqs', event.target , 'VHBAWYXIKqUH8nQOp' )
             .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
    }

    return (
        <Container fluid className="project-section">
            <Row>
                <Col>
                    <h1 className="project-heading">
                        <strong className="purple">Contacta</strong> conmigo
                    </h1>
                    <p> Aqui estoy para lo que necesites </p>
                </Col>
            </Row>
           <Row  fluid  >
                <Col claseName="form-section">
                    <Form   ref={form} onSubmit={sendEmail}>
                            <div>
                                <Form.Label>Name</Form.Label>
                                <Form.Control  type="text"   placeholder='Escribe aqui...'  name='user_name' />
                            </div>
                            <div>
                                <Form.Label>Email </Form.Label>
                                <Form.Control type="email"  placeholder='Escribe aqui...' name='user_email' />
                            </div>
                            <div >
                                <Form.Label> Message</Form.Label>
                                <Form.Control  name="user_message"  placeholder='Escribe aqui .....'  as="textarea" rows={3}/>
                            </div>
                            <div>
                                <Button  className=" btn-button">Enviar</Button>
                            </div>
                        </Form>
                    </Col>
                    <Col>
                    <Map/>
                </Col>            
            </Row>
        </Container>
     )

    }
export default ContactPage;