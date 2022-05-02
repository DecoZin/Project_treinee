import React from "react";
/* import { Link , useHistory } from "react-router-dom" */



function Home()
{
    // const history = useHistory();

    /* function handleClick()
    {
        history.push("/login")
    } */

    return(
        <div>
            <h1>Home</h1>
            <button onClick={() => {window.location.href = "/login"}}>Login</button>
            {/* <Link to = "/login">Login</Link> */}
        </div>
    );
}

export default Home;