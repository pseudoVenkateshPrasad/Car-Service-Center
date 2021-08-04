import React from "react";
import Carousel from 'react-elastic-carousel';
import ServiceMenu from "./ServiceMenu";
import { Link } from "react-router-dom";


export default function Demo() {

    const breakPoints = [
        
        {
            width : 1,
            itemsToShow : 1
        },
        {
            width : 500,
            itemsToShow : 3
        }
        ,
        {
            width : 768,
            itemsToShow : 5
        },
        {
            width : 920,
            itemsToShow : 6
        },
        {
            width : 1120,
            itemsToShow : 7
        },
        {
            width : 1366,
            itemsToShow : 7
        }

    ]

    return(
        <>
        <div className = "slider-container">
            <div className = "new-slider">
                <Carousel breakPoints = {breakPoints}>
                    <Link exact to = "/services/periodic-service"> <ServiceMenu number = "Periodic Services" /> </Link>
                    <Link exact to = "/services/periodic-service"> <ServiceMenu number = "Denting & Painting" /> </Link>
                    <Link exact to = "/services/periodic-service"> <ServiceMenu number = "Batteries" /> </Link>
                    <Link exact to = "/services/periodic-service"> <ServiceMenu number = "Car Spa & Cleaning" /> </Link>
                    <Link exact to = "/services/periodic-service"> <ServiceMenu number = "Ac Service & Repair" /> </Link>
                    <Link exact to = "/services/periodic-service"> <ServiceMenu number = "Tyre & Wheel Care" /> </Link>
                    <Link exact to = "/services/periodic-service"> <ServiceMenu number = "Insurance Claims" /> </Link>
                    <Link exact to = "/services/periodic-service"> <ServiceMenu number = "Detailing Services" /> </Link>
                    <Link exact to = "/services/periodic-service"> <ServiceMenu number = "Custom Services" /> </Link>
                    <Link exact to = "/services/periodic-service"> <ServiceMenu number = "Windshields & Glass" /> </Link>
                    <Link exact to = "/services/periodic-service"> <ServiceMenu number = "Lights & Fitments" /> </Link>
                </Carousel>
            </div>
        </div>
        </>
    )
}

