"use strict";
/**
 * src/Containers/Form.js
 */
import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = { userName: "" };
  }

  handleSubmit = event => {
      event.preventDefault();
    const response = await axios.get(
      `https://api.github.com/users/${this.state.userName}`,
    );
    this.props.onSubmit(response.data);
    this.setState({ userName: "" });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="GitHub username"
          required
        />
        <button>Add Card</button>
      </form>
    );
  }
}

export default Form;
