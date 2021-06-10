const express = require("express");

const cors = require("cors");

const app = express();
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
app.use(morgan("dev")); //print routes to terminal

app.use(cors());
app.use(cookieParser());

const port = 8080;

const data = require("./data.json");
const fs = require("fs");

const writeData = (newData) => {
  // convert JSON object to string
  const strData = JSON.stringify(newData);

  // write JSON string to a file
  fs.writeFile("data.json", strData, (err) => {
    if (err) {
    }
    console.log("JSON data is saved.");
  });
};
app.get("/users", (req, res) => {
  res.json({ users: data.users });
});

app.get("/usersByStatus/:status", (req, res) => {
  if (req.params.status == "All") {
    res.json({ users: data.users });
  } else {
    let requiredUsers = data.users.filter(
      (user) => user.status == req.params.status
    );
    res.json({ users: requiredUsers });
  }
});

app.get("/filteredUsers", (req, res) => {
  // console.log(req.query);
  let { search, status } = req.query;
  // console.log("filteredUsers! search = ", search, ". status = ", status);
  if (status == "All") {
    res.json({
      users: data.users.filter(
        (user) => search == undefined || user.username.includes(search)
      ),
    });
  } else {
    let requiredUsers = data.users.filter(
      (user) =>
        user.status == status &&
        (search == undefined || user.username.includes(search))
    );
    res.json({ users: requiredUsers });
  }
});

app.post("/users/:userId/:status", (req, res) => {
  let { userId, status } = req.params;
  let newUsers = data.users.map((user) => {
    if (user.id == userId) {
      return { ...user, status: status };
    }
    return user;
  });
  writeData({ ...data, users: newUsers });
  res.json({});
});

app.post("/addEmployee/:username/:status", (req, res) => {
  let { status, username } = req.params;

  let newUser = { status: status, username: username, id: data.counter };
  writeData({ users: [...data.users, newUser], counter: data.counter + 1 });

  res.json({ newEmployee: newUser });
});

const createData = () => {
  // init JSON object
  const newData = {
    counter: 5,
    users: [
      {
        id: "1",
        status: "Working",
        username: "Mr. Jackson",
      },

      {
        id: "2",
        status: "BusinessTrip",
        username: "Ms. Jackson",
      },
      {
        id: "3",
        status: "LunchTime",
        username: "Jackson Junior",
      },
      {
        id: "4",
        status: "OnVacation",
        username: "Jackson Junior the III",
      },
      {
        id: "5",
        status: "OnVacation",
        username: "Jackson Five",
      },
    ],
  };
  // convert JSON object to string
  const strData = JSON.stringify(newData);
  // write JSON string to a file
  fs.writeFile("data.json", strData, (err) => {
    if (err) {
    }
    console.log("JSON data is saved.");
  });
};
// createData();

app.listen(port, () =>
  console.log(`Adir Weisman' Example app listening on port ${port}!`)
);
