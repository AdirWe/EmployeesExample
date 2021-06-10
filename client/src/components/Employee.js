import React from "react";
import styled from "styled-components";
import { IoIosPerson } from "react-icons/io";
import image from "../images/image.jpg";
import Select from "../elements/Select";
import { BiRadioCircle } from "react-icons/bi";

const Employee = ({ data, changeStatus }) => {
  return (
    <Wrapper
      onClick={() => {
        console.log("Employee = ", data);
      }}
    >
      <Img src={image} />
      <Data>
        <Name>{data.username}</Name>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            borderBottom: "1px solid black",
          }}
        >
          <BiRadioCircle
          // style={{
          //   borderBottom: "1px solid black",
          //   paddingBottom: "0.2rem",
          //   color: "blue",
          // }}
          />
          <Select
            setValue={(newValue) => changeStatus(data.id, newValue)}
            value={data.status}
            options={["Working", "BusinessTrip", "LunchTime", "OnVacation"]}
          />
        </div>
      </Data>
    </Wrapper>
  );
};
export default Employee;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 18rem;
  padding: 0.5rem 1rem;
  background: white;
  margin-top: 3rem;
  margin-right: 2rem;
  border-radius: 3px;
  &:hover {
    box-shadow: 0 0 10px lightblue;
  }
`;

const Img = styled.img`
  border-radius: 50%;
  height: 8rem;
  width: 8rem;
`;

const Data = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  margin-bottom: 0.7rem;
`;

const Name = styled.div`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
