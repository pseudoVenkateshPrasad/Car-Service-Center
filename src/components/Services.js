import React, {useState, useEffect} from "react";
import Service from "../Services";
import { Link } from "react-router-dom";

function Services() {
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() =>{
            setLoader(false);
        }, 2000)
    }, [])


    return (
        <>
            {
                loader ? (
                            <>
                                <div style = {{height : "100vh", width : "100%" , display : "flex", justifyContent : "center", alignItems : "center"}}>
                                    <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_tr1pjkop.json"    background="transparent"  speed="1"  style={{width: "300px", height: "300px"}}  loop  autoplay></lottie-player>
                                </div>
                            </>
                        ) : (
                                <div className = "services border">

                                {/* ASSURANCE PROGRAM CONTAINER */}
                                <div className = "assurance-program-container container">
                                   <div className = "assurance-program">
                                        <div className = "assurance-img">
                                            <img src = "https://gomechanic.in/graphics/Group7557.png" />
                                        </div>
                                        <div className = "assurance-right">
                                            <div className = "assurance-title"><h3> Auto Heaven Assurance Program </h3> </div>
                                            <div className = "assurance-right-down"> 
                                                <ul>
                                                    <li>Upto Rs 25,000 insurance protection with every service request</li>
                                                    <li> Program protects users against damage caused during free pickup and delivery of car.</li>
                                                </ul>
                                            </div>
                                        </div>
                                   </div>
                                </div>

                                {/* SERVICES CONTAINER */}

                                <div className = "service-container mt-4">
                                    <div className = "s-title">
                                        <h3>Our Services</h3>
                                        <p>Get discounted professional periodic car service and repair, wheel care, cashless insurance claim and much more in the Silicon Valley of India: Bangalore.</p>
                                    </div>
                                    <div className = "service-content container-fluid d-flex flex-wrap m-4 p-2 ">
                                        {
                                            Service.map(value => {
                                                return(
                                                    <>
                                                        <Link className = "myLink" exact to = {value.link}>
                                                            <div className = "service-box ">
                                                                <div className = "service-img"> 
                                                                    <img src = {value.imgsrc} alt = "" />
                                                                </div>
                                                                <div className = "service-title"> 
                                                                    <h4> {value.title} </h4>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>

                                </div>

                                </div>
                            )
            }
        </>
    )
}

export default Services;
