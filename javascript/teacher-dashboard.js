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


function openClassPopup(){

  document.getElementById("classOverlay")
  .style.display = "flex";
}

function closeClassPopup(){

  document.getElementById("classOverlay")
  .style.display = "none";
}

function generateQR(){

  const lesson =
  document.getElementById("lessonSelect").value;

  const code =
  "QR-" + Math.floor(Math.random() * 9999);

  localStorage.setItem("activeLesson", lesson);
  localStorage.setItem("activeQR", code);

  document.getElementById("selectedLesson")
  .innerHTML = lesson;

  document.getElementById("lessonCode")
  .innerHTML = code;

  closeClassPopup();

  document.getElementById("qrOverlay")
  .style.display = "flex";
}

function closeQR(){

  document.getElementById("qrOverlay")
  .style.display = "none";
}