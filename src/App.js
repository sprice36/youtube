import logo from "./logo.svg";
import "./App.css";
import { Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Subscriptions from "./pages/Subscriptions";
import Trending from "./pages/Trending";

import Sidebar from "./components/Sidebar";
import SidebarRow from "./components/SidebarRow";

import Header from "./components/Header";
import FetchAPI from "./components/FetchAPI";
import React, { Component } from "react";
import { render } from "@testing-library/react";
import VideoCards from "./components/VideoCards";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
   // FetchAPI();
  }

  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <VideoCards /> 
        {/* <Router>

        <Sidebar>
          <Route path='/' component={Home} exact/>
          <Route path='/trending' component={Trending} />
          <Route path='/subscriptions' component={Subscriptions} />
        </Sidebar>
      </Router> */}
      </div>
    );
  }
}
export default App;
