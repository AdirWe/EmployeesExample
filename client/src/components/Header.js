import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <Title>Employees</Title>
      <LogOut>Log Out</LogOut>
    </Wrapper>
  );
};
export default Header;

const Wrapper = styled.div`
  width: 100%;
  height: 3.5rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 1.5rem;
  background: white;
  color: rgb(26, 163, 255);
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 2rem;
  /* color: lightblue; */
`;

const LogOut = styled.div`
  /* display: flex;
  align-content: center; */
  font-size: 1rem;
  font-weight: bold;
  padding: 0.2rem 1rem;
  border: 2px solid rgb(26, 163, 255);
  border-radius: 3px;
  /* color: lightblue; */
`;
