// Interface definition
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create student objects
const student1: Student = {
  firstName: "Azeez",
  lastName: "Bayo",
  age: 25,
  location: "Lagos"
};

const student2: Student = {
  firstName: "Azeezat",
  lastName: "Bayo",
  age: 22,
  location: "Lagos"
};

// Array of students
const studentsList: Student[] = [student1, student2];

// Render table using vanilla JavaScript
const table = document.createElement("table");

// Create table header
const headerRow = table.insertRow();
const headerCell1 = headerRow.insertCell();
headerCell1.textContent = "First Name";
const headerCell2 = headerRow.insertCell();
headerCell2.textContent = "Location";

// Iterate through students and create table rows
studentsList.forEach(student => {
  const row = table.insertRow();
  const cell1 = row.insertCell();
  cell1.textContent = student.firstName;
  const cell2 = row.insertCell();
  cell2.textContent = student.location;
});

// Append table to the body
document.body.appendChild(table);

