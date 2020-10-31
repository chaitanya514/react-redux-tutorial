import React from "react";
import List from "./components/List";
import Form from "./components/Form";

import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <h2> This is Article</h2>
      <List />
    </div>
    <div>
      <h3> Add Article here</h3>
      <Form />
      </div>
      </>
  );
}

export default App;
