const teacherId =
localStorage.getItem("teacherId");

const teachers = {

  "t100": "Mr. Peeters",
  "t101": "Mrs. Jacobs",
  "t102": "Mr. Adams"

};

const teacherName =
teachers[teacherId] || "Teacher";

document.getElementById("teacherWelcome")
.innerHTML = "Hey, " + teacherName;