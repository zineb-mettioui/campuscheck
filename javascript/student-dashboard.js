const studentId =
localStorage.getItem("studentId");

const students = {

  "r0123456": "Zineb",
  "r0654321": "Elena",
  "r1234560": "Adam"

};

const studentName =
students[studentId] || "Student";

document.getElementById("welcomeName")
.innerHTML = "Hey, " + studentName;