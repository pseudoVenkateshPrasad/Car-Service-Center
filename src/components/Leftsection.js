import React from 'react';
import Card from "./Card";
import WorkSteps from "../WorkSteps";
import Benefits from "../Benefits";

// console.log(WorkSteps);
// console.log(Benefits);



function Leftsection() {

    return (
        <>
        <div className = " feature-img">
            <img src = "https://images.unsplash.com/photo-1599474151975-1f978922fa02?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt = "" />
        </div>
        {/* BLOCK - 1  */}
            <div className = "block block-1 ">
                <div className = "b-1-heading px-5 py-3 d-flex justify-content-start">
                    <h3>Auto Heaven Summer Spice</h3>
                </div>
                <div className = "b-1-tag px-5 py-1 d-flex justify-content-start">
                    <h5>Hand Picked Car Services for Your Summer Needs</h5>
                </div>
                <div className = "b-1-content">
                    <Card />
                </div>
            </div>
        
        {/* BLOCK - 2  */}

            <div className = "block block-2">
                <div className = "b-1-heading">

                    <h3 className = "block-2-title">How Auto Heaven Works ?</h3>
                
                </div>

                <div className = "block-2-content">
                    {
                        WorkSteps.map( val => {
                            return(<>
                                <div className = "block-2-cell">
                                    
                                    <div className = "b-left">
                                        <h1> {val.keys}</h1>
                                    </div>
                                
                                    <div className = "b-middle">
                                        <div>
                                            <h3>{val.head}</h3>
                                        </div>
                                        <div>
                                            <p>{val.tag}</p>
                                        </div>
                                    </div>
                                    
                                    <div className = "b-right">
                                        <img src = {val.imgsrc} alt = "how we work logo" />
                                    </div>

                                </div>  
                                </>
                            )
                        })
                    }

                </div>
            </div>

        {/* BLOCK - 3 */}
            <div className = "block block-3">

                <div className = "b-1-heading">
                    <h3 className = "block-2-title">GoMechanic Benefits</h3>
                </div>
            
                <div className = "block-3-content">
                   {
                       Benefits.map(value => {
                               return(<>
                                        <div className = "block-3-boxes"> 
                                                <div className = "img-container">
                                                    <img className = "img-fluid img-thumbnail" src = {value.imgsrc} />
                                                </div>
                                                <div className = "block-details">
                                                    <h3>{value.head}</h3>
                                                    <p>{value.tag}</p>
                                                </div>
                                        </div>
                                     </>
                               )
                           }
                       )
                    
                   }
                </div>
            </div>
        
        {/* BLOCK - 4  */}
            <div className = "block block-4">
                   {
                       Benefits.map(
                           values => {
                               return(
                                   <>
                                    <div className = "feedback-box d-flex justify-content-start">
                                        <div><h3>{values.services}</h3></div>
                                        <div><p> {values.type} </p></div>
                                    </div>
                                   </>
                               )
                           }
                       )
                   }
                
            </div>

        

        </>
    )
}

export default Leftsection;
