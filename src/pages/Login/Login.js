import React from "react";
import { Form , Button } from "react-bootstrap";
import "./Login.css";

function Login()
{
    return(
        <div className="base">
            <div className="container">
<<<<<<< Updated upstream
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
                
=======
                <img className="mb-3" class name ="image" src="/images/Quick_Notes.png" alt="Quick Notes"/>
                <Form className="inputs">
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Control 
                            type="email" 
                            placeholder="E-mail" 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="senha">
                        <Form.Control 
                            type="password" 
                            placeholder="Senha" 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="primary" onClick={login}>
                        Login
                    </Button>
                </Form>
>>>>>>> Stashed changes
            </div>
        </div> 
    );
}

export default Login;