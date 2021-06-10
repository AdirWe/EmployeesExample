import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Input from "../elements/Input";
import Select from "../elements/Select";

const AddEmployee = ({ setIsOpen, addEmployee }) => {
  const onSubmit = () => {
    // console.log("before submiting:", status, username);
    axios
      .post(
        "/addEmployee/" + username + "/" + status
        //   {
        //     status: status,
        //     username: username,
        //   }
      )
      .then((res) => {
        console.log("after submiting:", res.data);

        addEmployee(res.data.newEmployee);
        setIsOpen(false);
      });
  };

  const [status, setStatus] = useState("Working");
  const [username, setUsername] = useState("");

  return (
    <Modal>
      <Wrapper>
        <Title>Create New User</Title>
        <Data>
          <Label>User name:</Label>
          <Input
            setValue={(newValue) => setUsername(newValue)}
            value={username}
          />
          <Label>Status:</Label>
          <Select
            setValue={(newValue) => setStatus(newValue)}
            value={status}
            options={["Working", "BusinessTrip", "LunchTime", "OnVacation"]}
          />
        </Data>
        <FooterButons>
          <SendButton
            onClick={() => {
              onSubmit();
            }}
          >
            Create
          </SendButton>
          <CancelButton
            onClick={() => {
              setIsOpen(false);
            }}
          >
            cancel
          </CancelButton>
        </FooterButons>
      </Wrapper>
    </Modal>
  );
};

export default AddEmployee;

const Modal = styled.div`
  color: #5c5c5c;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  /* padding: 3rem 8rem 4rem 8rem; */
  background: rgba(146, 146, 146, 0.5);
  backdrop-filter: blur(4px);
`;

const Wrapper = styled.div`
  /* box-sizing: content-box; */
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  width: 30%;
  height: fit-content;
  padding: 1rem 0;
`;

const Title = styled.div`
  box-sizing: border-box;
  padding: 0 2rem 1rem 2rem;
  font-weight: bold;
  width: 100%;
  font-size: 1.3rem;
  border-bottom: 1px solid lightgray;
`;

const Data = styled.div`
  box-sizing: border-box;
  padding: 0 2rem;
  width: 100%;
`;

const Label = styled.label`
  font-size: 0.8rem;
  opacity: 0.8;
`;

const FooterButons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  margin-top: 1rem;
  padding-left: 1rem;
`;

const SendButton = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 0.2rem 1rem;
  color: #5c5c5c;
  font-weight: bold;
  cursor: pointer;
  border-radius: 3px;
  background: rgb(26, 163, 255);
  color: white;
`;

const CancelButton = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 0.2rem 1rem;
  color: #5c5c5c;
  font-weight: bold;
  cursor: pointer;
  border-radius: 3px;
`;
