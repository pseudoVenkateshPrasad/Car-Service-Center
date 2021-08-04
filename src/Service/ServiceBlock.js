import React, { useEffect, useState } from "react";
import ServicesData from "../ServicesData";
import FaceIcon from "@material-ui/icons/Face";
import { orange } from "@material-ui/core/colors";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import Demo from "../components/Demo";
import axios from "axios";
import Price from "../priceData";
import CheckOut from "../checkout/Checkout";
import { ContactSupportOutlined } from "@material-ui/icons";

export default function ServiceBlock() {
  const [cars, setCars] = useState([]);
  const [brand, setBrand] = useState("");
  const [models, setModels] = useState([]);
  const PeriodicService = ServicesData;
  const [modelSelect, setModelSelect] = useState("");
  const [price, setPrice] = useState([]);
  // const [checked, setChecked] = useState(true);
  // const [items, setItems] = useState([]);
  const [arrList, setArrList] = useState([]);

  var left = 0;
  var right = 1;
  // var cartArr = [];
  
  var checkOutArr = [];


  useEffect(() => {
    axios
      .get("http://localhost:8082/cars")
      .then((res) => {
        setCars(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const Model = (carBrand, cars) => {
    for (let i = 0; i < cars.length; i++) {
      if (cars[i].Manufacturer === carBrand) {
        setModels(cars[i].Models);
      } else {
        continue;
      }
    }
  };

  const PriceCalculator = (modelSelect) => {
    //  console.log("my Model",modelSelect)
    //  console.log(Price.length)
    for (let i = 0; i < Price.length; i++) {
      if (
        modelSelect.toLocaleUpperCase() == Price[i].model.toLocaleUpperCase()
      ) {
        setPrice(Price[i].charges);
        // console.log(Price[i].charges);
        break;
      } else {
        // console.log("Not FOund")
        continue;
      }
    }
  };

  // console.log(items);

  return (
    <div>
      <Demo />
      <div className="container border bg-dark i-o-box row mb-4 pl-4 ">
          <div className="brand  b-width">
            <div className="p-brand">
              <input
                className="my-input"
                list="brands"
                type="text"
                onChange={(e) => {
                  //   console.log(e.target.value);
                  setBrand(e.target.value);
                  Model(e.target.value, cars);
                }}
                placeholder="Select Car Brand"
              />
              <datalist id="datalist" id="brands">
                {" "}
                {cars.map((val) => {
                  return (
                    <option
                      className="options"
                      key={val.id}
                      value={val.Manufacturer}
                    ></option>
                  );
                })}{" "}
              </datalist>{" "}
            </div>{" "}
          </div>
          {/* MODEL BOX */}{" "}
          <div className="model  b-width">
            <div className="p-model">
              {" "}
              {/* <label>Model</label> */}{" "}
              <input
                list="models"
                type="text"
                className="my-input"
                onChange={(e) => {
                  //   console.log(e.target.value);
                  setModelSelect(e.target.value);
                  PriceCalculator(e.target.value);
                }}
                placeholder="Select Car Model"
              />
              <datalist id="datalist" id="models" className="my-data-option">
                {" "}
                {models.map((values) => {
                  return (
                    <option
                      className="options"
                      key={values}
                      value={values}
                    ></option>
                  );
                })}{" "}
              </datalist>{" "}
            </div>{" "}
          </div>
          <div className="b-width check-out">
            {" "}
            {/* <button type = "submit" className = "checkout"> Checkout</button> */}{" "}
            <CheckOut mData = {checkOutArr} brand = {brand} model = {modelSelect} />
          </div>{" "}
        </div>


      <div className="container deal-book p-5 text-white">
        {" "}
        {/* BRAND BOX */}
        
        
        {PeriodicService.map((data) => {
          {
            /* console.log(data.length) */
          }
          return (
            <>
              <div className="deal-book-cell container-fluid row m-2 p-1 border ">
                <div className="container-fluid col d-flex img-container align-items-center justify-content-center border border-primary">
                  <img
                    width="200"
                    height="200"
                    className="img-fluid"
                    src={data.imgsrc}
                    alt=""
                  />
                  <div className="price-container">
                    {" "}
                    {price.slice(left, right).map((val) => {
                      left++;
                      right++;
                      return (
                        <>
                          <div className="price">
                            <label for="mySelector" className = "fa fa-inr original-price"> {val} </label>{" "}
                          </div>{" "}
                          <div className="price">
                            <h4 className = "fa fa-inr discount-price"> {Math.floor(0.85 * val)} </h4>{" "}
                          </div>{" "}
                        </>
                      );
                    })}
                  </div>{" "}
                </div>{" "}
                <div className="col-9 p-3">
                  <div className="row m-2 title">
                    <h3> {data.title} </h3>{" "}
                  </div>{" "}
                  <div className="row m-2">
                    <ul className="container-fluid requirement-list list-group list-group-flush d-flex justify-content-between flex-row flex-wrap">
                      {" "}
                      {data.required.map((reqData) => {
                        return (
                          <>
                            <div className="combined">
                              <SportsBasketballIcon
                                style={{
                                  height: "15px",
                                  color: orange[200],
                                }}
                              />{" "}
                              <li className="list-group-item requirement-list-items border-0">
                                {" "}
                                {reqData}{" "}
                              </li>{" "}
                            </div>{" "}
                          </>
                        );
                      })}{" "}
                    </ul>{" "}
                  </div>{" "}
                  <div className="row m-2">
                    <ul className="features-list list-group list-group-flush d-flex flex-row flex-wrap text-justify">
                      {" "}
                      {data.features.map((reqData) => {
                        return (
                          <>
                            <div className="combined">
                              <FaceIcon
                                style={{
                                  height: "15px",
                                  color: orange[200],
                                }}
                              />{" "}
                              <li className="list-group-item border-0 requirement-list-items">
                                {" "}
                                {reqData}{" "}
                              </li>{" "}
                            </div>{" "}
                          </>
                        );
                      })}{" "}
                    </ul>{" "}
                  </div>{" "}
                  <div className="row m-2 dynamic-box">
                    {" "}
                    {/* ADD TO CART */}{" "}
                    <div className="cart b-width">
                      <div className="bx-width">
                      
                      </div>{" "}
                      <div className="bx-width">
                        <button
                          type="submit"
                          onClick={ () => {
                            for (let i = 0; i < PeriodicService.length; i++) {
                              if (PeriodicService[i].title == data.title) {
                                // console.log(price[i]);
                                var cartArr = [];
                                cartArr.push(price[i]);
                                cartArr.push(brand);    //Brand Pushed
                                cartArr.push(data.title);  //Title Pushed
                                cartArr.push(modelSelect); //Model Pushed
                                break;
                              }else{
                                continue;
                              }
                            }
                            // Pushing Values to Array : cartArr : initially Empty
                          
                            // itemsArr = cartArr;
                            // console.log("Array of Items",cartArr)
                            // console.log(itemsArr);
                            // 
                            checkOutArr.push(cartArr);
                            console.log("Arr of Arrs", checkOutArr);
                            // setArrList(checkOutArr);
                            return;
                            }
                          }
                          className="my-input cart-btn"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}{" "}
      </div>{" "}
    </div>
  );
}
