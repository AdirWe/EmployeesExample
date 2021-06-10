import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Employee from "./Employee";
import axios from "axios";
import Operators from "./Operators";
import AddEmployee from "./AddEmployee";
const Body = () => {
  const [employees, setEmployees] = useState([]);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  //init employees:
  useEffect(() => {
    axios.get("/users").then((res) => {
      setEmployees(res.data.users);
    });
  }, []);

  const changeStatus = (userId, newStatus) => {
    axios.post("/users/" + userId + "/" + newStatus).then((res) => {
      let newEmployees = employees.map((emp) => {
        if (emp.id != userId) {
          return emp;
        }
        return {
          ...emp,
          status: newStatus,
        };
      });
      setEmployees(newEmployees);
    });
  };

  const filter = (status) => {
    axios.get("/usersByStatus/" + status).then((res) => {
      setEmployees(res.data.users);
      setStatus(status);
      setSearch("");
    });
  };
  const begginSearch = () => {
    axios
      .get("/filteredUsers?status=" + status + "&search=" + search)
      .then((res) => {
        setEmployees(res.data.users);
        // setSearch("");
      });
  };
  const addEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  return (
    <Wrapper>
      <Operators
        status={status}
        setStatus={(newStatus) => filter(newStatus)}
        search={search}
        setSearch={setSearch}
        begginSearch={begginSearch}
        setIsOpen={setIsOpen}
      />
      <EmployeeList>
        {employees.map((emp) => (
          <Employee changeStatus={changeStatus} data={emp} />
        ))}
      </EmployeeList>
      {isOpen && (
        <AddEmployee addEmployee={addEmployee} setIsOpen={setIsOpen} />
      )}
    </Wrapper>
  );
};
export default Body;

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 3.5rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 2rem 5rem; */
  background: rgb(242, 242, 242);
`;

const EmployeeList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  width: 80%;
  margin-bottom: 2rem;
  /* padding-top: 3rem; */
`;
