import React from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import Input from "../elements/Input";
import Select from "../elements/Select";
import { HiOutlineMinus } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
const Operators = ({ ...props }) => {
  return (
    <Wrapper>
      <Create
        onClick={() => {
          props.setIsOpen(true);
        }}
      >
        Create
        <AiOutlinePlus style={{ color: "white" }} />
      </Create>

      <SearchAndFilter>
        <InputDiv>
          <AiOutlineSearch
            onClick={() => {
              props.begginSearch();
            }}
            style={{ opacity: "0.5", cursor: "pointer" }}
          />
          <Input
            onEnterPress={() => props.begginSearch()}
            placeholder="Type to search"
            value={props.search}
            setValue={(newValue) => props.setSearch(newValue)}
          />
        </InputDiv>
        <SelectDiv>
          <HiOutlineMinus
            style={{
              transform: "rotate(90deg)",
              fontSize: "2rem",
              opacity: "0.1",
            }}
          />
          {/* <span style={{ opacity: "0.6", fontSize: "1.5rem" }}>|</span> */}
          <Select
            setValue={(newValue) => props.setStatus(newValue)}
            value={props.status}
            options={[
              "All",
              "Working",
              "BusinessTrip",
              "LunchTime",
              "OnVacation",
            ]}
          />
        </SelectDiv>
      </SearchAndFilter>
    </Wrapper>
  );
};
export default Operators;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin-top: 2.5rem;
`;

const Create = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: rgb(26, 163, 255);
  color: white;
  width: 10%;
  border-radius: 3px;
  cursor: pointer;
`;

const SearchAndFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: white;
  margin-left: 1rem;
  padding: 0 1rem;
  width: 90%;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 0.2rem;
  width: 85%;
`;

const SelectDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
