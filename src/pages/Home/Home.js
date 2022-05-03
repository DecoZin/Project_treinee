import React from "react";

function Home()
{
    return(
        <div>
            <h1>Home</h1>
            <button onClick={() => {window.location.href = "/login"}}>Login</button>
        </div>
    );
}

export default Home;