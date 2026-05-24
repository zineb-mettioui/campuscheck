function loginStudent() {

  const studentId = document.getElementById("studentId").value;

  if(studentId === ""){
    alert("Please enter your student ID");
    return;
  }

  localStorage.setItem("studentId", studentId);

  /*alert("Student ID saved!");*/

  window.location.href =
  "student-dashboard.html";
}