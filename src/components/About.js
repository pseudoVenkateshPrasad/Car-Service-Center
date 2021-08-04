import React, {useState, useEffect} from "react";
import "../style.css";
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';



const About = () => {
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() =>{
            setLoader(false);
        }, 3000)
    }, [])

    return(
        <>
        {loader ? (<>
                    <div style = {{height : "100vh", width : "100%" , display : "flex", justifyContent : "center", alignItems : "center"}}>
                        <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_tr1pjkop.json"    background="transparent"  speed="1"  style={{width: "300px", height: "300px"}}  loop  autoplay></lottie-player>
                    </div>
                   </>
                   ) : (
                                <div className = "about border p-0">
                                    <div className = "about-image">
                                        <h2 className = "about-text">About Us</h2>
                                    </div>

                                    <div className = "about-block">
                                        
                                        <div className = "block-1-logo"><AirportShuttleIcon  style = {{ fontSize : 100 } }/></div>
                                        <div className = "about-desc p-4">
                                            <p>
                                            Auto Heaven (A Multi Brand Car Workshop) Founded by the automobile industry experts to deliver flawless & faster repair/ Maintenance of automobiles, Body Repair to your vehicle(s).

                                            We will take care of your car needs especially the latest line of four-wheel automobiles available in the market.

                                            Our state of the art facility is located in Horamavu (North Bangalore). We have fully equipped with latest garage & Body shop equipment’s on par to any major automobile OEM dealer, we offer various services like Body repair/ Maintenance of automobiles/ Car Washing/ Car Grooming/ Car Detailing/ Insurance Renewals & any other specific needs pertaining to your car maintenance. We have highly experienced and trained technicians to handle your prized possession with utmost care.
                                            </p>
                                        </div>
                                    </div>
                                    
                                </div>
                            )}
        </>
    )
}


export default About;