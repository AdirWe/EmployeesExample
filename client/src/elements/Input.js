import React from "react";
import styled from "styled-components";

const Input = ({ value, setValue, ...props }) => {
  return (
    <Wrapper
      onKeyPress={(e) => {
        if (e.key == "Enter" && props.onEnterPress) {
          props.onEnterPress();
        }
      }}
    >
      <StyledDiv {...props}>
        <input
          placeholder={props.placeholder ? props.placeholder : ""}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type={props.type ? props.type : "text"}
        />
      </StyledDiv>
    </Wrapper>
  );
};

export default Input;

const StyledDiv = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.2rem;
  &:disabled {
    color: lightgray;
  }
  input {
    outline: none;
    border: none;
    background: none;
  }
  box-sizing: border-box;

  background: ${(props) => (props.background ? props.background : "#ffffff")};
  border-radius: 3px;

  font-size: inherit;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
