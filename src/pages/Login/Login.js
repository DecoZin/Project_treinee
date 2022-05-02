import React,{ useState } from 'react';
import { Form , Button } from "react-bootstrap";
import "./Login.css";

function Login()
{

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function login()
    {
        if (email === "andrelamegobh@hotmail.com" && password === "deco")
        {
        alert("Bem vindo! " + email);
        window.location.href = "/home";
        }
        else
        {
            alert("Dados incorretos!");
        }
    }

    return(
        <div className="base">
            <div className="container">
                <img class name ="image" src="/images/Quick_Notes.png" alt="Quick Notes"/>
                <Form className="inputs">
                    <Form.Group controlId="email">
                        <Form.Control 
                            type="email" 
                            placeholder="E-mail" 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="senha">
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
            </div>
        </div> 
    );
}

export default Login;
