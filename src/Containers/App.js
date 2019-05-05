/**
 * src/Containers/App.js
 */
import React from "react";
import Form from "./Form";
import CardList from "./CardList";

const App = () => (
  <div className="App">
    <header>
      <h1>Github task matcher</h1>
    </header>
    <Form />
    {/* <CardList /> */}
  </div>
);

export default App;
