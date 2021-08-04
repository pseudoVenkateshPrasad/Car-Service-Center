import React from "react";
import Navbar from "./components/Navbar";
import {Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Book from "./components/Book";
import Error from "./components/Error";
import PeriodicServices from "./Service/PeriodicServices";
// import ServiceMenu from "./components/ServiceMenu";
import Demo from "./components/Demo";
import checkout from "./checkout/Checkout";

const Layout = () => {

    return(
        <>
            <Navbar />
            <Switch>
              <Route exact path = "/" component = {Home}  />
              <Route exact path = "/about" component = {About} />
              <Route exact path = "/services" component = {Services} />
              <Route exact path = "/book" component = {Book} />
              <Route exact path = "/demo" component = {Demo} />
              <Route exact path = "/checkout" component = {checkout} />


              <Route exact path = "/services/periodic-service" component = {PeriodicServices} />
              
              
              <Route component = {Error} />
            </Switch>

        </>
    )
}


export default Layout;