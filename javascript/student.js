function loginStudent() {

  const studentId = document.getElementById("studentId").value;

  localStorage.setItem("studentId", studentId);

  alert("Student ID saved!");
}