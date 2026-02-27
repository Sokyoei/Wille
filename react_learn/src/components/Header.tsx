import { Button } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const goToHome = () => navigate("/");
  const goToAbout = () => navigate("/about");

  return (
    <header style={{ padding: "1rem", background: "#f0f0f0" }}>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Button type="primary" onClick={goToHome} style={{ fontSize: "16px", cursor: "pointer" }}>
          首页
        </Button>
        <Button type="primary" onClick={goToAbout} style={{ fontSize: "16px", cursor: "pointer" }}>
          关于
        </Button>
      </nav>
    </header>
  );
};

export default Header;
