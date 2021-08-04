import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
    return(
        <>
            <div className = "error-page">
                <Link exact to = "/">
                        <i class="fas fa-hand-point-left"></i>
                </Link>
            </div>        
        </>
    )
}


export default Error;