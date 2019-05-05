"use strict";
/**
 * src/Containers/Dashboard.js
 */
import React, { Component } from "react";
import Form from "../Components/Form";
import CardList from "../Components/CardList";
import axios from "axios";

class Dashboard extends Component {
  state = { userName: "", profiles: [] };

  handleSubmit = async event => {
    event.preventDefault();
    const response = await axios.get(
      `https://api.github.com/users/${this.state.userName}`,
    );
    console.log("response", response.data);
    this.addNewProfile(response.data);
    this.setState({ userName: "" });
  };

  addNewProfile = profileData => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };

  render() {
    return (
      <div>
        <Form
          onSubmit={this.handleSubmit}
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="GitHub username"
        />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default Dashboard;
