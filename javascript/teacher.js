function loginTeacher() {

  const teacherId = document.getElementById("teacherId").value;

  localStorage.setItem("teacherId", teacherId);

  alert("Teacher ID saved!");
}