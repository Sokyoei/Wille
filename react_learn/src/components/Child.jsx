import React from "react";

function Child(props) {
  const sendMsg = () => {
    // 调用父组件传的回调函数，传值
    props.sendData("我是子组件的消息");
  };

  return <button onClick={sendMsg}>给父组件传值</button>;
}

export default Child;
