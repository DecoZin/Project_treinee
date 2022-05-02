import React from "react";
import { BrowserRouter , Route , Switch } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Login from "./pages/Login";

function Routes()
{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/cadastro" component={Cadastro}/>
                <Route exact path="/home" component={Home}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;