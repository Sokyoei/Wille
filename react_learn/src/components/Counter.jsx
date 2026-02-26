import React, { useState } from "react";

function Counter() {
  // 声明状态：count 是状态值，setCount 是修改状态的方法
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>当前计数：{count}</p>
      {/* 点击修改状态，视图自动更新 */}
      <button onClick={() => setCount(count + 1)}>加1</button>
      <button onClick={() => setCount(count - 1)}>减1</button>
    </div>
  );
}

export default Counter;
