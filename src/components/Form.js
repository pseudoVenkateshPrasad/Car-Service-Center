import React, {useState, useEffect} from "react";
import Button from '@material-ui/core/Button';
import axios from "axios";



const Form = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [cars, setCars] = useState([]);
    const [brand, setBrand] = useState("");
    const [models, setModels] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8082/cars")
        .then(res => {
                setCars(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    }, [])


    const Model = (carBrand, cars) =>{
        for(let i=0; i<cars.length; i++){
            if(cars[i].Manufacturer === carBrand) {
              setModels(cars[i].Models)
            }else{
              continue;
            }
          }
    }
    
    console.log(models);
    return(
        <>
            <div className = " form-box container d-flex justify-content-center align-items-center mt-4">
                <form>
                    <fieldset className = "my-fieldset" >
                        
                        <legend className = "legend">
                                Book Appointment
                        </legend>

                        <div className = "form-content">

                            <div className = "form-heading">
                                <h3>The Best Car Service Await You..!</h3>
                            </div>

                        {/* *********************PERSON NAME***************************** */}
                            <div className = "person-details p-name">
                                <label>Name</label>
                                <input 
                                type = "text"
                                value = {name}
                                onChange = {e => setName(e.target.value)}
                                placeholder = "Enter Your Name"
                                required
                                />
                            </div>

                        {/* ************************PERSON PHONE*********************** */}
                            <div className = "person-details p-phone">
                                <label>Phone</label>
                                <input 
                                type = "text"
                                value = {phone}
                                onChange = {e => 
                                    {console.log(e.target.value)
                                    setPhone(e.target.value)}}
                                placeholder = "Phone Number"
                                required
                                />
                            </div>
                        
                        {/* ***********************CAR BRAND***************************** */}
                            <div className = "person-details p-brand">
                                <label>Select Car</label>
                                <input 
                                 list = "brands"  
                                 type = "text"  
                                 onChange = {(e)  => { 
                                                    setBrand(e.target.value);
                                                    Model(e.target.value, cars)
                                                 }
                                            } 
                                 placeholder = "Select Car Brand"
                                />
                                <datalist id="datalist" id = "brands" >
                                    {
                                        cars.map(val => {
                                            return(
                                            <option className = "options" key = {val.id} value = {val.Manufacturer}> {val.Manufacturer} </option>
                                            )
                                        })
                                    }
                                </datalist>
                            </div>
                        
                        {/* ***********************CAR MODEL***************************** */}
                            <div className = "person-details p-model">
                                <label>Model</label>
                                <input 
                                 list = "models" 
                                 type = "text" 
                                 onChange = {e => {
                                                    console.log("e.target.value")

                                                   }
                                            } 
                                 placeholder = "Select Car Model"

                                />
                                <datalist id="datalist" id = "models" className = "my-data-option">
                                    {
                                        models.map(values => {
                                            return(
                                            <option className = "options" key = {values} value = {values}> {values} </option>
                                            )
                                        })
                                    }
                                </datalist>
                            </div>

                        {/* ***********************SUBMIT BUTTON*************************** */}
                            <div className = "submit-btn d-flex justify-content-center mt-3">
                                <Button variant="contained" type = "submit" onClick = {() => {console.log("Data Submitted")}} color="secondary">Request An Instant Callback !</Button>
                            </div>

                        </div>

                    </fieldset>                      
                </form>
                
            </div>

         </>
    )
}


export default Form;

