import React, { useState } from "react";

function Form() {
  const [inputValue, setInputValue] = useState("");
  const [submitText, setSubmitText] = useState("");

  // 处理输入框变化
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // 处理表单提交
  const handleSubmit = (e) => {
    e.preventDefault(); // 阻止默认刷新
    setSubmitText(`你提交了：${inputValue}`);
    setInputValue(""); // 清空输入框
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="请输入内容"
        />
        <button type="submit">提交</button>
      </form>
      <p>{submitText}</p>
    </div>
  );
}

export default Form;
