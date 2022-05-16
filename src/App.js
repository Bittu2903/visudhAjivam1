import React from "react";
import Navbar from "./components/Navbar";
// let doctor = require("./components/home_image.png");
import { Switch, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <img src="/components/home_image.png" alt="doctor_img" />
        <section className="hero-section">
          <h1 className="frontTagline">
            WELCOME TO <span id="smallVisudh">VISUDH</span> AJIVAM
          </h1>
          <h2 className="frontTagline">We Provide You High Quality Services</h2>
        </section>
      
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Visudh Ajivam About Page</h1>
      </section>
    </>
  );
};

const Service = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Visudh Ajivam Service Page</h1>
      </section>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Visudh Ajivam Contact Page</h1>
      </section>
    </>
  );
};

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/service">
        <Service />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
};

export default App;
