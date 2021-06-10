// import { createFilterOptions } from "@material-ui/lab";
import React from "react";
import styled from "styled-components";
const Select = ({ value, setValue, options, ...props }) => {
  return (
    <Wrapper>
      <StyledDiv styleRules={props}>
        <select onChange={(e) => setValue(e.target.value)} value={value}>
          {options.map((opt, i) => (
            <option key={i} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </StyledDiv>
    </Wrapper>
  );
};

export default Select;

const Wrapper = styled.div`
  display: flex;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  box-sizing: border-box;
  width: ${(props) =>
    props.styleRules.width ? props.styleRules.width : "100%"};
  margin: ${(props) =>
    props.styleRules.margin ? props.styleRules.margin : "0"};

  select {
    background: ${(props) =>
      props.styleRules.background ? props.styleRules.background : "#ffffff"};
    padding: 0.2rem;
    border: none;

    outline: none;
    /* border-radius: 4px; */
    box-sizing: border-box;
    width: 100%;
    font-size: inherit;
    option {
      color: black;
      &:disabled {
        color: lightgray;
      }
    }
  }
`;
