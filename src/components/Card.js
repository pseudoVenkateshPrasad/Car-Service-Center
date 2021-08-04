import React from 'react';
import { Link } from "react-router-dom";
import img1 from "../images/img-1.png";
import img2 from "../images/img-2.png";
import img3 from "../images/img-3.png";
import img4 from "../images/img-4.png";


function Card() {

    return (
        <>
           <div className = "summer-block-container  d-flex justify-content-center p-2">
                <div className = "summer-blocks d-flex justify-content-center" >
                    <Link exact to = "/services"><div className = "block-1-cards container d-flex justify-content-center align-items-center">
                        <img src = {img1} alt = "block-1-images" />
                    </div></Link>
                    
                    <Link exact to = "/services"><div className = "block-1-cards container d-flex justify-content-center align-items-center">
                        <img src = {img2} alt = "block-1-images" />
                    </div></Link>
                    
                    <Link exact to = "/services"><div className = "block-1-cards container d-flex justify-content-center align-items-center">
                        <img src = {img3} alt = "block-1-images" />
                    </div></Link>
                    
                    <Link exact to = "/services"><div className = "block-1-cards container d-flex justify-content-center align-items-center">
                        <img src = {img4} alt = "block-1-images" />
                    </div></Link>
                </div>
           </div> 
        </>
    )
}

export default Card;
