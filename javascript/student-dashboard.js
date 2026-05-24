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

let days = localStorage.getItem("daysCount");

if(days === null){
  days = 5;
}

document.getElementById("daysCount").innerHTML = days;

function openScanner(){
  document.getElementById("scannerOverlay").style.display = "flex";
}

function closeScanner(){
  document.getElementById("scannerOverlay").style.display = "none";
}

function completeCheckIn(){

  const activeQR = localStorage.getItem("activeQR");
  const activeLesson = localStorage.getItem("activeLesson");

  if(activeQR === null){
    alert("No active class QR found. Ask your teacher to generate one.");
    return;
  }

  let currentDays =
  Number(localStorage.getItem("daysCount")) || 5;

  currentDays++;

  localStorage.setItem("daysCount", currentDays);

  document.getElementById("daysCount").innerHTML = currentDays;

  const studentId = localStorage.getItem("studentId");

  const attendance = JSON.parse(localStorage.getItem("attendance")) || [];

  attendance.push({
    studentId: studentId,
    lesson: activeLesson,
    qrCode: activeQR,
    time: new Date().toLocaleTimeString()
  });

  localStorage.setItem("attendance", JSON.stringify(attendance));

  closeScanner();

  alert("Check-in successful for " + activeLesson);
}
