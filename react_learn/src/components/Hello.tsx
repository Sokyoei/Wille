import React from "react";

interface HelloProps {
  name: string;
}

const Hello: React.FC<HelloProps> = ({ name }) => {
  return <div>你好，{name}！这是我的第一个自定义组件</div>;
};

export default Hello;
