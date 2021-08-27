import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Home from "./pages/Home";
import Subscriptions from "./pages/Subscriptions";
import Trending from "./pages/Trending";

import Sidebar from "./components/Sidebar";
import SidebarRow from "./components/SidebarRow";
import FetchAPI from "./components/FetchAPI";
import Header from "./components/Header";
import React, { Component } from "react";
import { render } from "@testing-library/react";
import VideoCard from "./components/VideoCard";
import VideoCards from "./components/VideoCards";
import axios from "axios";
import { mapDispatchToProps, mapStateToProps } from "./redux/actions/actions"; 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=PK&key=AIzaSyBpU4qmIOrepyEnXBUNCgqJuRfxEYN5kp8`
      )
      .then((response) => {
       // this.setState({ data: response.data.items });
        this.props.setSearchResults(response.data.items);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <VideoCards data={this.props.searchResults} />
        {/* <Router>
          <Sidebar>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/trending" component={Trending} />
              <Route path="/subscriptions" component={Subscriptions} />
            </Switch>
          </Sidebar>
        </Router> */}
      </div>
    );
  }
}

App.propTypes = {
  setVideoDetails: PropTypes.func,
  setSearchResults: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
