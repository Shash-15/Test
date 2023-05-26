const express = require("express");
const app = express();

// Load student details API with pagination
app.get("/students", (req, res) => {
  const { page, pageSize } = req.query;
  const students = require("./students.json");

  // Apply pagination logic
  const start = (page - 1) * pageSize;
  const end = start + parseInt(pageSize);
  const paginatedStudents = students.slice(start, end);

  res.json(paginatedStudents);
});

// Server-side filtering API
app.get("/students/filter", (req, res) => {
  const { filterCriteria } = req.query;
  const students = require("./students.json");

  // Apply filtering logic based on filterCriteria
  const filteredStudents = students.filter((student) => {
    // Apply your specific filtering logic here
    // Example: filter by student name
    return student.name.includes(filterCriteria);
  });

  res.json(filteredStudents);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
