import React, { useState,useEffect } from "react";
import "../style.css";
import Form from "./Form";
import Leftsection from "./Leftsection";

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() =>{
            setLoading(false);
        }, 1000)
    }, [])

    return(
        <>
        {
            loading ? (<>
                        <div style = {{height : "100vh", width : "100%" , display : "flex", justifyContent : "center", alignItems : "center"}}>
                            <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_tr1pjkop.json"    background="transparent"  speed="1"  style={{width: "300px", height: "300px"}}  loop  autoplay></lottie-player>
                        </div>
                      </>
            ) : (
                <>
                    <div className = "home-page d-flex pt-5  ">
                        <div className = "left-section">
                            <Leftsection />
                        </div>
                        <div className = "right-section">
                            <Form />
                        </div>
                    </div>
                </>
            )
        }
    </>
    )
}


export default Home;