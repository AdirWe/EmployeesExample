import React from "react";
import styled from "styled-components";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import axios from "axios";

axios.defaults.baseURL =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1"
    ? "http://localhost:8080/"
    : "/";

function App() {
  return (
    <AppWrapper>
      <Header />
      <Body />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;
