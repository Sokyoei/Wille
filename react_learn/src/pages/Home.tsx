import Child from "@/components/Child";
import Counter from "@/components/Counter";
import Form from "@/components/Form";
import Hello from "@/components/Hello";
import React, { useState } from "react";

const Home: React.FC = () => {
  const [childMsg, setChildMsg] = useState("");

  // 回调函数：接收子组件传的值
  const getChildData = (msg: string): void => {
    setChildMsg(`子组件传来：${msg}`);
  };

  return (
    <div>
      🏠 首页内容
      <Hello name="Wille" />
      <Counter />
      <Form />
      <Child sendData={getChildData} />
      <p>{childMsg}</p>
    </div>
  );
};

export default Home;
