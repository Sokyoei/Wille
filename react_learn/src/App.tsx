import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Child from "./components/Child";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Header from "./components/Header";
import Hello from "./components/Hello";
import About from "./pages/About";
import Home from "./pages/Home";

const App: React.FC = () => {
  const [childMsg, setChildMsg] = useState("");

  // 回调函数：接收子组件传的值
  const getChildData = (msg: string): void => {
    setChildMsg(`子组件传来：${msg}`);
  };

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        hello world
        </a>
        </header> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Hello name="Wille" />
      <Counter />
      <Form />
      <Child sendData={getChildData} />
      <p>{childMsg}</p>
    </div>
  );
};

export default App;
