// import { useState } from "react";
import React from "react";
import "../App.css";
import Form from "../Components/Form";

const Login = () => {
  return (
    <React.Fragment>
      <section className="section login ">
        <div className="container w-3/4 m-auto text-center form">
          <div className="text-center">
            <h1 className="text-4xl text-white font-bold pt-12">Bank login</h1>
            <Form />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Login;
