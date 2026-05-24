function loginTeacher() {

  const teacherId = document.getElementById("teacherId").value;
  
   if(teacherId === ""){
    alert("Please enter your teacher ID");
    return;
  }
  
  localStorage.setItem("teacherId", teacherId);

  /*alert("Teacher ID saved!");*/

  window.location.href =
  "teacher-dashboard.html";
}