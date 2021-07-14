const express = require("express");
const cors = require("cors");

const app = express();
const port = 8000;
app.listen(port, () => {
  console.info("Server is listening on port:" + port);
});

app.use(cors());
app.use(express.json());

const students = [];

app.get("/students", (req, res) => {
  res.json(students);
});

app.post("/students", (req, res) => {
  const student = req.body.student;
  console.info(student);
  const isExist = students.includes(student);
  console.log(isExist)
  if (isExist) {
    res.json({ message: "Student already exist: " + student });
  } else {
    students.push(student);
    res.json({ message: "Student added: " + student });
  }
});
