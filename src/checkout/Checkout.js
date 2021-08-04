import React,{useState} from 'react';

function Checkout( props ) {

    let [list, setList] = useState([]);
    // const [finalPrice, setFinalPrice] = useState("");
    const [mIndex, setMIndex] = useState(0);
    let count = 0;


    // console.log("my Data",list);

    return (
        <>
            {/* <div className = "checkout-page"> */}
                <input type="checkbox" id="open-cart"/>
                <label for = "open-cart" onClick = {() => {
                    setList(props.mData);
                }} className="go-to-cart"> Go to Cart </label>

                <div className = "checkout-form">
                  <div className = "form-border">
                    <div className = "close-btn">
                        <label for = "open-cart" className = "fas fa-times"></label>
                    </div>
                    <div className = "check-title d-flex justify-content-between">
                        <div><h4>CheckOut</h4></div>
                        <div><label for = "open-cart"  className = "check-buttons change-btn">Change..</label></div>
                    </div>                
                    <div className = "check-content">
                        <div className = "car-heading  p-1 text-dark container d-flex justify-content-between align-items-center">
                            <div> <p className = "check-titles">Brand : <strong>{props.brand}</strong></p> </div>
                            <div> <p className = "check-titles">Model : <strong>{props.model}</strong></p> </div>
                        </div>
                        <div className = "border container my-2">
                        {
                            list.map((val, index) => {
                                {/* index += 1; */}
                                {/* console.log(list.length) */}
                                return(
                                    <>
                                        <div className = "container text-dark border m-2 d-flex align-items-center justify-content-between align-items-center">
                                            <div className = "container mcheckbox">
                                                <input type="checkbox" name="" id="my-list" checked/>
                                            </div>
                                            <div className = "mdetails container text-dark m-2 d-flex align-items-baseline justify-content-between align-items-center py-0">
                                                <label className = "text-dark" htmlFor="my-list">{index}<strong>{val[2]}</strong> </label>
                                                <label className = "text-danger fa fa-inr text-decoration-line-through " style = {{fontSize:"14px", textDecoration : "line-through"}} htmlFor="my-list">{val[0]}</label>
                                                <label className = "text-dark fa fa-inr" htmlFor="my-list">{Math.floor(parseInt(val[0]) * 0.85)}</label>
                                            </div>
                                            <div className = "container mdelete bg-dark" onClick = {() => {
                                                
                                                var mlist = list;
                                                // console.log()
                                                let serviceIndex = mlist.findIndex((value,index) => mlist.indexOf(val) == index)
                                                if(serviceIndex != -1){
                                                    console.log(serviceIndex);
                                                    mlist.splice(serviceIndex,1)
                                                    setList(mlist);
                                                    console.log("list updated", list);
                                                }

                                            }}>
                                                <i class="fa fa-times"></i>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                        </div>
                        
                            
                    </div>                
                    <div className = "check-btn">
                        <div className = "final-price border pl-2">
                            
                            {
                                list.map(value => {
                                    count += parseInt(value[0]);
                                    {/* setFinalPrice(count); */}
                                    {/* setFinalPrice(value[0]); */}
                                    {/* count += parseInt(setFinalPrice(value[0])); */}
                                    
                                })
                            }
                            <h5>Total : </h5>
                            <div className = "">
                                <p className = "fa fa-inr" style = {{fontSize:"14px", textDecoration : "line-through", color: "red"}}>{count}</p>
                                <h4 className = "fa fa-inr">{Math.floor(0.85*count)}</h4>
                            </div>

                            {/* <h4>Total : <strong className = "fa fa-inr price-val">{Math.floor(0.85*count)}</strong> </h4> */}
                        </div>
                        <div className = "checkOut-container">
                            <label for = "open-cart" className = "check-buttons cancel-btn" >Cancel</label>
                            <button className = "check-buttons confirm-btn" type="submit">CheckOut</button>
                        </div>
                    </div>                
                  </div>
                </div>
            {/* </div> */}
        </>
    )
}

export default Checkout;