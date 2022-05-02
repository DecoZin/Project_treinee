import React from "react";
import { Form , Button } from "react-bootstrap";
import "./Login.css";

function Login()
{
    return(
        <div className="base">
            <div className="container">
                <div>
                    <img src="/images/Quick_Notes.png" alt="Quick Notes"/>
                    <Form className="inputs">
                        <Form.Group controlId="email">
                            <Form.Control type="email" placeholder="E-mail" />
                        </Form.Group>
                        <Form.Group controlId="senha">
                            <Form.Control type="password" placeholder="Senha" />
                        </Form.Group>
                        <Button variant="primary" type="login">
                            Login
                        </Button>
                    </Form>
                </div>
                
            </div>
        </div> 
    );
}

export default Login;