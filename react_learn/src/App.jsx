import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Child from "./components/Child";

function App() {
  const [childMsg, setChildMsg] = useState("");

  // 回调函数：接收子组件传的值
  const getChildData = (msg) => {
    setChildMsg(`子组件传来：${msg}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          hello world
        </a>
      </header>
      <Hello name="Wille" />
      <Counter />
      <Form />
      <Child sendData={getChildData} />
      <p>{childMsg}</p>
    </div>
  );
}

export default App;
