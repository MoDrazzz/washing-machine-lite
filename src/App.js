import React, { Component } from "react";
import "./App.css";
import Router from "./Router";
import { Header } from "./components"

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Router />
      </>
    )  
  }
}
